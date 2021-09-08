import React from "react";
import { IconProps } from "utils/commonProps";

const PhoneIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg
      className={className || "h-6 w-6"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.949 12.993L21.751 14.03C21.567 15.001 20.659 15.653 19.631 15.554L17.584 15.356C16.693 15.27 15.933 14.636 15.706 13.79L15.075 11.435C14.14 11.052 13.11 10.877 11.985 10.909C10.9015 10.9326 9.83379 11.1734 8.845 11.617L8.453 13.822C8.305 14.658 7.616 15.281 6.743 15.369L4.708 15.573C3.692 15.675 2.719 15.029 2.431 14.063L2.121 13.025C1.813 11.994 2.088 10.908 2.842 10.175C4.623 8.44501 7.592 7.57701 11.749 7.57101C15.913 7.56601 18.974 8.42801 20.934 10.159C21.759 10.887 22.144 11.965 21.949 12.993V12.993Z"
        fill="#9CA3AF"
      />
    </svg>
  );
};

export default PhoneIcon;
