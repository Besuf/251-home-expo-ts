import React from "react";

import LocationIcon from "components/icons/LocationIcon";
import TimerIcon from "components/icons/TimerIcon";
import LazyImage from "components/shared/LazyImage";
import { getPictureSrcSet } from "lib/image";

const locationPic = {
  xs: "/images/location/location-low.jpg",
  sm: "/images/location/location-1x.jpg",
  md: "/images/location/location-2x.jpg",
  lg: "/images/location/location-3x.jpg",
};

const EventLocation = () => {
  return (
    <div
      className="bg-textPrimary h-[700px]  md:h-[695px] w-full relative bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${locationPic.xs})`,
      }}
    >
      <LazyImage
        src={locationPic.sm}
        sizes="(min-width: 768px)100vw"
        srcSet={getPictureSrcSet(locationPic)}
        alt="Sample Image Alt"
        className="object-cover w-full h-full"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(270.03deg, rgba(0, 0, 0, 0.4) 0.02%, rgba(196, 196, 196, 0) 47.92%, rgba(0, 0, 0, 0.4) 99.98%)",
        }}
      ></div>
      <div className="absolute right-0 bottom-0 w-full md:w-[600px] px-10  md:px-16 py-16 bg-black bg-opacity-90">
        <div className="flex">
          <h4 className="text-3xl pb-2 border-b-2 border-primary">Location</h4>
        </div>
        <div className="flex flex-col mt-12 gap-5">
          <div className="flex items-center gap-5">
            <LocationIcon />
            <span className="text-lg">Ethiopian Hilton Hotel</span>
          </div>
          <div className="flex items-center gap-5">
            <TimerIcon />
            <span className="text-lg">
              Friday, Saturday - October 9/10, 2021{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLocation;
