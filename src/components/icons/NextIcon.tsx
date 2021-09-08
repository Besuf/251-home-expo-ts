import React from "react";
import { TriggerProps } from "utils/commonProps";

const NextIcon: React.FC<TriggerProps> = (props) => {
  const { className, onClick } = props;
  return (
    <svg
      className={className || "h-6 w-6"}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 2L17 12L7 22" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default NextIcon;
