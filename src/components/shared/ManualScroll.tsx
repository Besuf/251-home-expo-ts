import React, { useEffect } from "react";

const ManualScroll = () => {
  useEffect(() => {
    if (typeof window !== undefined) window.scrollTo(0, 0);
  }, []);
  return <div></div>;
};

export default ManualScroll;
