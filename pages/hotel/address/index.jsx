import React from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const libraries = ["places"]
const mapContainerStyle = {
  width: "100%",
  height: "80vh",
  borderRadius: "15px 0px 0px 15px",
}
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
}

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAx8cr7qSNQZ2I5ZR0mToeZ4VNfotZVWmg",
    libraries,
  })

  if (loadError) {
    return <div>Error loading maps</div>
  }

  if (!isLoaded) {
    return <div>Loading maps</div>
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  )
}

export default App
