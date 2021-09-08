import React from "react";
import { IconProps } from "utils/commonProps";

const LocationIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg
      className={className || "h-6 w-6"}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 1.875C12.266 1.87823 9.6448 2.96575 7.71153 4.89902C5.77826 6.83229 4.69074 9.45345 4.68751 12.1875C4.68424 14.4218 5.41406 16.5954 6.76501 18.375C6.76501 18.375 7.04626 18.7453 7.0922 18.7988L15 28.125L22.9116 18.7941C22.9528 18.7444 23.235 18.375 23.235 18.375L23.2359 18.3722C24.5862 16.5934 25.3157 14.4207 25.3125 12.1875C25.3093 9.45345 24.2218 6.83229 22.2885 4.89902C20.3552 2.96575 17.7341 1.87823 15 1.875V1.875ZM15 15.9375C14.2583 15.9375 13.5333 15.7176 12.9166 15.3055C12.2999 14.8935 11.8193 14.3078 11.5355 13.6226C11.2516 12.9373 11.1774 12.1833 11.3221 11.4559C11.4668 10.7285 11.8239 10.0603 12.3484 9.53585C12.8728 9.0114 13.541 8.65425 14.2684 8.50955C14.9959 8.36486 15.7499 8.43912 16.4351 8.72295C17.1203 9.00678 17.706 9.48743 18.118 10.1041C18.5301 10.7208 18.75 11.4458 18.75 12.1875C18.7488 13.1817 18.3533 14.1348 17.6503 14.8378C16.9473 15.5408 15.9942 15.9363 15 15.9375V15.9375Z"
        fill="#FEE715"
      />
    </svg>
  );
};

export default LocationIcon;
