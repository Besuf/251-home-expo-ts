import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { gallery, GalleryType } from "../galleryData";
import { shuffleArray } from "lib/arrayLib";
import ImageSlice from "./ImageSlice";
import { AnimatePresence, motion } from "framer-motion";
import GalleryModal from "./GalleryModal";

const tabs = ["All", "Apartment", "Villa", "Furniture", "Kitchen", "Other"];

const AllGallery = () => {
  const [currentTab, setCurrentTab] = useState("All");
  const [modalIndex, setModalIndex] = useState<null | number>(null);

  const [galleryState, setGalleryState] = useState<GalleryType[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (router.query.category === "All") {
      setCurrentTab("All");
    } else if (router.query.category === "Apartment") {
      setCurrentTab("Apartment");
    } else if (router.query.category === "Villa") {
      setCurrentTab("Villa");
    } else if (router.query.category === "Furniture") {
      setCurrentTab("Furniture");
    } else if (router.query.category === "Kitchen") {
      setCurrentTab("Kitchen");
    } else if (router.query.category === "Other") {
      setCurrentTab("Other");
    }
  }, [router.query]);
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

    shuffleArray(galleryData);
    setGalleryState(galleryData);
  }, [currentTab]);

  const handleChangeCurrentTab = (tabVal: string) => {
    router.push(`/gallery?category=${tabVal}`);
  };

  const handleModalIndex = (index: number | null) => {
    setModalIndex(index);
  };

  return (
    <div className="py-14 pt-[200px] lg:pt-[250px] xl:pt-[200px] 2xl:pt-[225px] pb-20 bg-[#080808]">
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
        {galleryState.map((gal, index) => (
          <div key={`Gallery-${index}`}>
            <ImageSlice
              img={gal}
              index={index}
              handleModalIndex={handleModalIndex}
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {modalIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed z-20 bg-[#080808] bg-opacity-90 inset-0"
          >
            <GalleryModal
              handleModalIndex={handleModalIndex}
              gallery={galleryState}
              modalIndex={modalIndex as number}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllGallery;
