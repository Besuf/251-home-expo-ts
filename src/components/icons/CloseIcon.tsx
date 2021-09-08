import React from "react";
import { TriggerProps } from "utils/commonProps";

const CloseIcon: React.FC<TriggerProps> = (props) => {
  const { className, onClick } = props;
  return (
    <svg
      className={className || "h-6 w-6"}
      onClick={onClick}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.2948 9.58994L30.3735 10.6686L10.5236 30.5169L9.44498 29.439L29.2948 9.58994Z"
        fill="white"
      />
      <path
        d="M10.5236 9.58994L30.3735 29.4383L29.2948 30.5177L9.44498 10.6693L10.5236 9.58994Z"
        fill="white"
      />
    </svg>
  );
};

export default CloseIcon;
