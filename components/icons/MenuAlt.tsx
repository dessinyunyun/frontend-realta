import { FC } from "react"

interface MenuAltProps {
  width?: string
  height?: string
  fill?: string
}

const MenuAlt: FC<MenuAltProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.36523 5.5C3.36523 5.23478 3.47059 4.98043 3.65813 4.79289C3.84566 4.60536 4.10002 4.5 4.36523 4.5H16.3652C16.6305 4.5 16.8848 4.60536 17.0723 4.79289C17.2599 4.98043 17.3652 5.23478 17.3652 5.5C17.3652 5.76522 17.2599 6.01957 17.0723 6.20711C16.8848 6.39464 16.6305 6.5 16.3652 6.5H4.36523C4.10002 6.5 3.84566 6.39464 3.65813 6.20711C3.47059 6.01957 3.36523 5.76522 3.36523 5.5ZM3.36523 10.5C3.36523 10.2348 3.47059 9.98043 3.65813 9.79289C3.84566 9.60536 4.10002 9.5 4.36523 9.5H10.3652C10.6305 9.5 10.8848 9.60536 11.0723 9.79289C11.2599 9.98043 11.3652 10.2348 11.3652 10.5C11.3652 10.7652 11.2599 11.0196 11.0723 11.2071C10.8848 11.3946 10.6305 11.5 10.3652 11.5H4.36523C4.10002 11.5 3.84566 11.3946 3.65813 11.2071C3.47059 11.0196 3.36523 10.7652 3.36523 10.5ZM3.36523 15.5C3.36523 15.2348 3.47059 14.9804 3.65813 14.7929C3.84566 14.6054 4.10002 14.5 4.36523 14.5H16.3652C16.6305 14.5 16.8848 14.6054 17.0723 14.7929C17.2599 14.9804 17.3652 15.2348 17.3652 15.5C17.3652 15.7652 17.2599 16.0196 17.0723 16.2071C16.8848 16.3946 16.6305 16.5 16.3652 16.5H4.36523C4.10002 16.5 3.84566 16.3946 3.65813 16.2071C3.47059 16.0196 3.36523 15.7652 3.36523 15.5Z"
        fill={props.fill}
      />
    </svg>
  )
}

MenuAlt.defaultProps = {
  width: "21",
  height: "21",
  fill: "#82868C",
}

export default MenuAlt
