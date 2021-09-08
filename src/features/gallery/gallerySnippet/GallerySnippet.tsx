import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { gallery, GalleryType } from "../galleryData";
import { shuffleArray } from "lib/arrayLib";
import LazyImage from "components/shared/LazyImage";
import { getPictureSrcSet } from "lib/image";

const tabs = ["All", "Apartment", "Villa", "Furniture", "Kitchen", "Other"];

const GallerySnippet = () => {
  const [currentTab, setCurrentTab] = useState("All");
  const [galleryState, setGalleryState] = useState<GalleryType[]>([]);

  useEffect(() => {
    let galleryData: GalleryType[] = [];
    if (currentTab === "All") {
      galleryData = gallery;
    } else if (currentTab === "Apartment") {
      galleryData = gallery.filter((gal) => gal.category === "Apartment");
    } else if (currentTab === "Villa") {
      galleryData = gallery.filter((gal) => gal.category === "Villa");
    } else if (currentTab === "Furniture") {
      galleryData = gallery.filter((gal) => gal.category === "Furniture");
    } else if (currentTab === "Kitchen") {
      galleryData = gallery.filter((gal) => gal.category === "Kitchen");
    } else if (currentTab === "Other") {
      galleryData = gallery.filter((gal) => gal.category === "Other");
    }
    const newGallery = galleryData.slice(0, 8);
    shuffleArray(newGallery);
    setGalleryState(newGallery);
  }, [currentTab]);

  console.log("Gallery State ", galleryState);
  const handleChangeCurrentTab = (tabVal: string) => {
    setCurrentTab(tabVal);
  };
  return (
    <div className="py-14 pb-20 bg-[#080808]">
      <div className="flex justify-center">
        <h3 className="text-center text-3xl border-b-2 border-primary  pb-2">
          Event Gallery
        </h3>
      </div>

      <ul className="flex justify-start lg:justify-center gap-28 mt-12 pb-4 px-10 md:px-24 w-full overflow-x-auto">
        {tabs.map((tab, index) => (
          <li
            key={`tab-${index}`}
            className={`cursor-pointer text-lg xl:text-xl  hover:text-primary transition duration-200 ease-in ${
              currentTab === tab ? "text-primary" : "text-white"
            } `}
            onClick={() => handleChangeCurrentTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>

      <div className="py-8 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-11">
        {galleryState.map((gal, index) => {
          if (index > 5) {
            return (
              <div
                key={`Gallery-${index}`}
                className="hidden 2xl:block h-56 xl:h-72 relative bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${gal.picture.xs})`,
                }}
              >
                <LazyImage
                  src={gal.picture.sm}
                  sizes="(min-width: 768px)50vw ,(min-width: 1024px) 33vw ,(min-width: 1536px) 25vw, 100vw"
                  srcSet={getPictureSrcSet(gal.picture)}
                  alt="Sample Image Alt"
                  className="object-cover w-full h-full"
                />
              </div>
            );
          } else if (index > 2) {
            return (
              <div
                key={`Gallery-${index}`}
                className="hidden md:block h-56 xl:h-72 relative  bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${gal.picture.xs})`,
                }}
              >
                <LazyImage
                  src={gal.picture.sm}
                  sizes="(min-width: 768px)50vw ,(min-width: 1024px) 33vw ,(min-width: 1536px) 25vw, 100vw"
                  srcSet={getPictureSrcSet(gal.picture)}
                  alt="Sample Image Alt"
                  className="object-cover w-full h-full"
                />
              </div>
            );
          }
          return (
            <div
              key={`Gallery-${index}`}
              className="h-64 md:h-56 xl:h-72 relative  bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${gal.picture.xs})`,
              }}
            >
              <LazyImage
                src={gal.picture.sm}
                sizes="(min-width: 768px)50vw ,(min-width: 1024px) 33vw ,(min-width: 1536px) 25vw, 100vw"
                srcSet={getPictureSrcSet(gal.picture)}
                alt="Sample Image Alt"
                className="object-cover w-full h-full"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
        <NextLink href="/gallery">
          <a>
            <button className="btn-outlined-tp">View Full Gallery</button>
          </a>
        </NextLink>
      </div>
    </div>
  );
};

export default GallerySnippet;
