import React from "react";
import { TriggerProps } from "utils/commonProps";

const BackIcon: React.FC<TriggerProps> = (props) => {
  const { className, onClick } = props;
  return (
    <svg
      className={className || "h-6 w-6"}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 22L7 12L17 2" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default BackIcon;
