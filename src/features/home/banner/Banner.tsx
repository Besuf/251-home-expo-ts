import React from "react";
import LazyImage from "components/shared/LazyImage";
import { getPictureSrcSet } from "lib/image";
import NextLink from "next/link";
import Count from "./Count";
import Image from "next/image";

const bannerPic = {
  xs: "/images/banner/home-low.jpg",
  sm: "/images/banner/home-1x.jpg",
  md: "/images/banner/home-2x.jpg",
  lg: "/images/banner/home-3x.jpg",
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
        style={{ background: "rgba(0, 0, 0, 0.6)" }}
      ></div>
      <div className="px-10 md:px-24 py-[200px] md:py-[350px] xl:py-[100px] relative bg-opacity-0 ">
        <div className="flex justify-center">
          <div className="w-[250px] h-[150px] md:w-[400px] md:h-[200px]  relative">
            <Image
              src="/images/fourth.png"
              alt="fourth logo illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl text-center">
          ET REAL-ESTATE HOME EXPO
        </h1>
        <div className="flex w-full justify-center mt-7">
          <div className="w-auto md:w-4/5 lg:w-1/2">
            <h2
              className="text-base md:text-lg text-center "
              style={{ lineHeight: "28px" }}
            >
              Your one-stop destination to fulfill your housing and furnishing
              needs. Bringing the biggest real estate and home-accessories
              companies in the country under one roof.
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
