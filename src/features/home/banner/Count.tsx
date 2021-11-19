import React from "react";
import Clock from "components/counter/Clock";

const Count = () => {
  const deadline = "January 1, 2022";
  return (
    <div>
      <Clock deadline={deadline} />
    </div>
  );
};

export default Count;
