import React, { useState } from "react";
import { GalleryType } from "../galleryData";
import LazyImage from "components/shared/LazyImage";
import { getPictureSrcSet } from "lib/image";
import ZoomIcon from "components/icons/ZoomIcon";
import { AnimatePresence, motion } from "framer-motion";

type ImageSliceProps = {
  img: GalleryType;
  index: number;
  handleModalIndex: (index: number) => void;
};

const ImageSlice: React.FC<ImageSliceProps> = (props) => {
  const { img, index, handleModalIndex } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => handleModalIndex(index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-64 md:h-56 xl:h-72 relative  bg-no-repeat bg-cover cursor-pointer"
      style={{
        backgroundImage: `url(${img.picture.xs})`,
      }}
    >
      <LazyImage
        src={img.picture.sm}
        sizes="(min-width: 768px)50vw ,(min-width: 1024px) 33vw ,(min-width: 1536px) 25vw, 100vw"
        srcSet={getPictureSrcSet(img.picture)}
        alt="Sample Image Alt"
        className="object-cover w-full h-full"
      />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-black bg-opacity-70 grid place-items-center"
          >
            <span>
              <ZoomIcon />
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlice;
