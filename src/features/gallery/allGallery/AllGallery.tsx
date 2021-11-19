import React, { useState, useEffect } from "react";
import { gallery, GalleryType } from "../galleryData";
import { shuffleArray } from "lib/arrayLib";
import ImageSlice from "./ImageSlice";
import { AnimatePresence, motion } from "framer-motion";
import GalleryModal from "./GalleryModal";
import ScrollDisable from "components/shared/ScrollDisable";

const AllGallery = () => {
  const [modalIndex, setModalIndex] = useState<null | number>(null);

  const [galleryState, setGalleryState] = useState<GalleryType[]>([]);

  useEffect(() => {
    const galleryData: GalleryType[] = [...gallery];

    shuffleArray(galleryData);
    setGalleryState(galleryData);
  }, []);

  const handleModalIndex = (index: number | null) => {
    setModalIndex(index);
  };

  return (
    <div className="py-14 pt-[120px] lg:pt-[170px] pb-20 bg-black">
      <div className="flex justify-center">
        <h3 className="text-center text-3xl border-b-2 border-primary  pb-2">
          Event Gallery
        </h3>
      </div>

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
            className="fixed z-50 bg-[#080808] bg-opacity-90 inset-0"
          >
            <ScrollDisable />
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
