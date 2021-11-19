import React from "react";

import LazyImage from "components/shared/LazyImage";
import { getPictureSrcSet } from "lib/image";
import NextLink from "next/link";

const furniturePic = {
  xs: "/images/expoGallery/furniture/fr-05/fr-05-low.jpg",
  sm: "/images/expoGallery/furniture/fr-05/fr-05-1x.jpg",
  md: "/images/expoGallery/furniture/fr-05/fr-05-2x.jpg",
  lg: "/images/expoGallery/furniture/fr-05/fr-05-3x.jpg",
};

const villaPic = {
  xs: "/images/expoGallery/villa/v-06/v-06-low.jpg",
  sm: "/images/expoGallery/villa/v-06/v-06-1x.jpg",
  md: "/images/expoGallery/villa/v-06/v-06-2x.jpg",
  lg: "/images/expoGallery/villa/v-06/v-06-3x.jpg",
};

const ExpoMenu = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[65vh] md:min-h-[50vh] xl:min-h-[60vh]">
      <div className="w-full h-full  relative">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${furniturePic.xs})`,
          }}
        >
          <LazyImage
            src={furniturePic.sm}
            sizes="(min-width: 768px)100vw ,(min-width: 1024px) 50vw"
            srcSet={getPictureSrcSet(furniturePic)}
            alt="Sample Image Alt"
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(16, 24, 32, 0.7) 15.65%, rgba(16, 24, 32, 0) 100%)",
          }}
        ></div>
        <div className="grid place-items-center px-10  py-14  md:px-20 lg:px-24 xl:px-36 2xl:px-64 relative min-h-full">
          <div>
            <h4 className="text-center text-xl font-semibold">
              {" "}
              Luxury Furnitures
            </h4>
            <p className="text-sm md:text-base text-center mt-2">
              Looking to spruce up your house or make the finishing details of
              your home,
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${villaPic.xs})`,
          }}
        >
          <LazyImage
            src={villaPic.sm}
            sizes="(min-width: 768px)100vw ,(min-width: 1024px) 50vw"
            srcSet={getPictureSrcSet(villaPic)}
            alt="Sample Image Alt"
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(16, 24, 32, 0.7) 15.65%, rgba(16, 24, 32, 0) 100%)",
          }}
        ></div>
        <div className="grid place-items-center px-10 py-14 md:py-0 md:px-20 lg:px-24 xl:px-36 2xl:px-64 relative min-h-full">
          <div>
            <h4 className="text-center text-xl font-semibold">
              {" "}
              Villas &amp; Apartments
            </h4>
            <p className="text-sm md:text-base text-center mt-2">
              Discover and find your dream house.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpoMenu;
