import React from "react";
import LazyImage from "components/shared/LazyImage";
import { getPictureSrcSet } from "lib/image";
import NextLink from "next/link";
import Count from "./Count";

const bannerPic = {
  xs: "/images/banner/banner-low.jpg",
  sm: "/images/banner/banner-1x.jpg",
  md: "/images/banner/banner-2x.jpg",
  lg: "/images/banner/banner-3x.jpg",
};

const Banner = () => {
  return (
    <div className="min-h-screen relative w-full">
      <div
        className="absolute inset-0 min-h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerPic.xs})`,
        }}
      >
        <LazyImage
          src={bannerPic.sm}
          sizes="(min-width: 768px)100vw"
          srcSet={getPictureSrcSet(bannerPic)}
          alt="Sample Image Alt"
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className="absolute min-h-screen inset-0"
        style={{ background: "rgba(16, 24, 32, 0.7)" }}
      ></div>
      <div className="px-10 md:px-24 py-[200px] md:py-[350px] xl:py-[200px] 2xl:py-[225px] relative bg-opacity-0">
        <h1 className="text-2xl md:text-4xl text-center">
          ET REAL-ESTATE HOME EXPO
        </h1>
        <div className="flex w-full justify-center mt-7">
          <div className="w-auto md:w-4/5 lg:w-1/2">
            <h2 className="text-base md:text-lg text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac efficitur diam. In sagittis eros in est convallis,
              at tristique leo condimentum.
            </h2>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Count />
        </div>
        <div className="flex w-full justify-center">
          <div className="flex mt-20 gap-8 flex-wrap justify-center">
            <NextLink href="/visitor-subscription">
              <a>
                <div className="btn cursor-pointer flex-shrink-0">
                  Join As A Visitor
                </div>
              </a>
            </NextLink>
            <NextLink href="/exhibitor-subscription">
              <a>
                <div className="btn-outlined flex-shrink-0 ">
                  Join As An Exhibitor
                </div>
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
