import React from "react";
import { IconProps } from "utils/commonProps";

const MenuIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg
      className={className || "h-9 w-9"}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 27H4.5V24H22.5V27ZM31.5 19.5H4.5V16.5H31.5V19.5ZM22.5 12H4.5V9H22.5V12Z"
        fill="white"
      />
    </svg>
  );
};

export default MenuIcon;
