import { FC } from "react"
interface CouponProps {
  width?: string
  height?: string
  fill?: string
}

const Coupon: FC<CouponProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.02713 0.610395L7.44513 2.19099C7.31739 2.31879 7.14423 2.39077 6.96353 2.39119H4.47433C3.32353 2.39119 2.39113 3.32359 2.39113 4.47439V6.96359C2.39078 7.14471 2.31881 7.31834 2.19093 7.44659L0.608934 9.02719C0.218408 9.41785 -0.000976563 9.94762 -0.000976562 10.5C-0.000976563 11.0524 0.218408 11.5821 0.608934 11.9728L2.19093 13.5548C2.31873 13.6825 2.39071 13.8557 2.39113 14.0364V16.5256C2.39113 17.6764 3.32353 18.6088 4.47433 18.6088H6.96353C7.14465 18.6092 7.31827 18.6811 7.44653 18.809L9.02713 20.391C9.41779 20.7815 9.94755 21.0009 10.4999 21.0009C11.0523 21.0009 11.5821 20.7815 11.9727 20.391L13.5547 18.809C13.6825 18.6812 13.8556 18.6092 14.0363 18.6088H16.5255C17.6763 18.6088 18.6087 17.6764 18.6087 16.5256V14.0364C18.6091 13.8553 18.6811 13.6817 18.8089 13.5534L20.3909 11.9728C20.7815 11.5821 21.0008 11.0524 21.0008 10.5C21.0008 9.94762 20.7815 9.41785 20.3909 9.02719L18.8089 7.44519C18.6811 7.31745 18.6092 7.14429 18.6087 6.96359V4.47439C18.6087 3.32359 17.6763 2.39119 16.5255 2.39119H14.0363C13.8552 2.39114 13.6814 2.31913 13.5533 2.19099L11.9727 0.608995C11.5821 0.218469 11.0523 -0.000915527 10.4999 -0.000915527C9.94755 -0.000915527 9.41779 0.219869 9.02713 0.610395ZM6.50433 13.5044L13.5043 6.5044L14.4955 7.49559L7.49553 14.4956L6.50433 13.5044ZM6.99993 6.99999V8.39999H8.39993V6.99999H6.99993ZM12.5999 14H13.9999V12.6H12.5999V14Z"
        fill={props.fill}
      />
    </svg>
  )
}

Coupon.defaultProps = {
  width: "21",
  height: "21",
  fill: "#7743DB",
}

export default Coupon
