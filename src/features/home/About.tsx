import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="px-10 md:px-24 py-14 pb-24 bg-textPrimary">
      <div className="flex justify-center">
        <h3 className="text-center text-3xl border-b-2 border-primary  pb-2">
          About Our Exhibition
        </h3>
      </div>
      <div className="flex justify-center mt-12 md:mt-24">
        <div className="w-auto  lg:w-4/5 2xl:w-3/5 flex items-center flex-wrap gap-4 md:gap-0">
          <p className="text-base xl:text-xl md:pr-10  xl:pr-[4.5rem] w-full md:w-1/2 leading-relaxed justify-center md:justify-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque mollis dapibus lacus, non venenatis ligula ullamcorper
            in.
          </p>
          <div className=" w-full md:w-1/2 md:border-l-4 border-primary md:pl-12 xl:pl-20 flex items-center justify-center md:justify-start">
            <p className="text-base xl:text-xl">Brought to you by</p>
            <div className="w-36 h-36  ml-5 relative">
              <Image
                alt="251 Communications logo"
                src="/251Logo.svg"
                objectFit="contain"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
