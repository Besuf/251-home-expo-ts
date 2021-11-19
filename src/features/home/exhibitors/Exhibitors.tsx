import React from "react";
import ExihibitorCarousel from "./exhibitorCarousel/ExihibitorCarousel";

const Exhibitors = () => {
  return (
    <div className="px-10 md:px-24 lg:px-28 xl:px-32 py-28 lg:py-36 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="w-full">
          <div className="flex w-full justify-end">
            <h3 className="text-3xl   text-right">
              <span className="block">We Work With The</span>
              <span className="block border-b-2 border-primary pb-2">Best</span>
            </h3>
          </div>
          <p className="mt-14 text-right">
            Our exhibitors are the leading Real estate and home appliance firms
            in the country. Catering to you with a diverse set of options,
            making it easy for you to fulfill your property and home accessory
            needs.
          </p>
        </div>

        <div className=" h-96 md:h-72 w-full ">
          <ExihibitorCarousel />
        </div>
      </div>
    </div>
  );
};

export default Exhibitors;
