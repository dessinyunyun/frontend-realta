import React from "react"

const ThreeDots = props => {
  return (
    <svg
      className="fill-textSecondary/80 text-thin h-4 hover:fill-textSecondary cursor-pointer"
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29.96 122.88"
    >
      <defs>
        <style>{`.cls-1{fill-rule:evenodd;}`}</style>
      </defs>
      <title>3-vertical-dots</title>
      <path
        className="cls-1"
        d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"
      />
    </svg>
  )
}
ThreeDots.defaultProps = {
  width: "25",
  height: "20",
  fill: "#82868C",
}

export default ThreeDots
