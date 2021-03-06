import React from "react";
import { IconProps } from "utils/commonProps";

const ZoomIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg
      className={className || "h-6 w-6"}
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.8748 56.875L44.7253 44.7038L56.8748 56.875ZM51.4582 28.4375C51.4582 34.543 49.0328 40.3984 44.7155 44.7157C40.3983 49.0329 34.5428 51.4583 28.4373 51.4583C22.3318 51.4583 16.4764 49.0329 12.1592 44.7157C7.84191 40.3984 5.4165 34.543 5.4165 28.4375C5.4165 22.332 7.84191 16.4766 12.1592 12.1593C16.4764 7.84207 22.3318 5.41667 28.4373 5.41667C34.5428 5.41667 40.3983 7.84207 44.7155 12.1593C49.0328 16.4766 51.4582 22.332 51.4582 28.4375V28.4375Z"
        stroke="white"
        strokeWidth="5.41667"
        strokeLinecap="round"
      />
      <path
        d="M28.4372 28.4375H18.958M28.4372 18.9583V28.4375V18.9583ZM28.4372 28.4375V37.9167V28.4375ZM28.4372 28.4375H37.9163H28.4372Z"
        stroke="white"
        strokeWidth="5.41667"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ZoomIcon;
