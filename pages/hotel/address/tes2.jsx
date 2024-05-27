import React from "react"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"

const libraries = ["places"]
const mapContainerStyle = {
  width: "500px",
  height: "500px",
}
const center = {
  lat: 33.6348792,
  lng: -117.7426695,
}
const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAsOiVFoj7et2Q8qKfbyPy-_nwVOCGpITg",
    libraries,
  })

  const mapRef = React.useRef()
  const onMapLoad = React.useCallback(map => {
    mapRef.current = map
  }, [])

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(14)
  }, [])

  if (loadError) {
    return "Error loading maps"
  }
  if (!isLoaded) {
    return "Loading Maps"
  }

  return (
    <div>
      <h1>Hello</h1>
      <Search panTo={panTo} />
      <Locate panTo={panTo} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onLoad={onMapLoad}
      ></GoogleMap>
    </div>
  )
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            console.log(position)
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
          },
          () => null
        )
      }}
    >
      <h2>locate</h2>
    </button>
  )
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 33.6348792, lng: () => -117.7426695 },
      radius: 200 * 1000,
    },
  })

  return (
    <div className="search">
      <input
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}
        disabled={!ready}
        placeholder="Enter an address"
      />
      <ul>
        {status === "OK" &&
          data.map(({ id, description }) => (
            <li
              key={id}
              onClick={() => {
                setValue(description, false)
                clearSuggestions()
                getGeocode({ address: description })
                  .then(results => {
                    getLatLng(results[0]).then(({ lat, lng }) => {
                      console.log(lat, lng)
                      panTo({ lat, lng })
                    })
                  })
                  .catch(error => {
                    console.log("error!")
                  })
              }}
            >
              {description}
            </li>
          ))}
      </ul>
    </div>
  )
}
