import React from "react";
import { IconProps } from "utils/commonProps";

const TimerIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg
      className={className || "h-6 w-6"}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2.33334C7.56701 2.33334 2.33334 7.567 2.33334 14C2.33334 20.433 7.56701 25.6667 14 25.6667C20.433 25.6667 25.6667 20.433 25.6667 14C25.6667 7.567 20.433 2.33334 14 2.33334ZM17.8418 19.4915L12.8333 14.483V7H15.1667V13.517L19.4915 17.8418L17.8418 19.4915V19.4915Z"
        fill="#FEE715"
      />
    </svg>
  );
};

export default TimerIcon;
