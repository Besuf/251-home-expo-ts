import React from "react";
import Clock from "components/counter/Clock";

const Count = () => {
  const deadline = "October, 9, 2021";
  return (
    <div>
      <Clock deadline={deadline} />
    </div>
  );
};

export default Count;
