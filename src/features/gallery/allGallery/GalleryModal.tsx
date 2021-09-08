import BackIcon from "components/icons/BackIcon";
import CloseIcon from "components/icons/CloseIcon";
import NextIcon from "components/icons/NextIcon";
import React from "react";
import { GalleryType } from "../galleryData";
import LazyImage from "components/shared/LazyImage";
import { getPictureSrcSet } from "lib/image";

type GalleryModalProps = {
  modalIndex: number;
  handleModalIndex: (index: number | null) => void;
  gallery: GalleryType[];
};

const GalleryModal: React.FC<GalleryModalProps> = (props) => {
  const { handleModalIndex, gallery, modalIndex } = props;

  const handleNext = () => {
    if (gallery.length - 1 > modalIndex) {
      handleModalIndex(modalIndex + 1);
    } else {
      handleModalIndex(0);
    }
  };

  const handleBack = () => {
    if (modalIndex > 0) {
      handleModalIndex(modalIndex - 1);
    } else {
      handleModalIndex(gallery.length - 1);
    }
  };

  return (
    <div className="absolute inset-0">
      <div className="absolute top-6 w-full flex justify-center">
        <span className="cursor-pointer">
          <CloseIcon
            className="h-12 w-12"
            onClick={() => handleModalIndex(null)}
          />
        </span>
      </div>
      <div className="absolute left-2 xl:left-8 h-full flex items-center z-10">
        <span className="cursor-pointer rounded-full h-16 w-16 flex justify-center items-center bg-textPrimary bg-opacity-50">
          <BackIcon className="h-8 w-8" onClick={handleBack} />
        </span>
      </div>
      <div className="absolute right-2 xl:right-8 h-full flex items-center z-10">
        <span className="cursor-pointer rounded-full h-16 w-16 flex justify-center items-center bg-textPrimary bg-opacity-50">
          <NextIcon className="h-8 w-8" onClick={handleNext} />
        </span>
      </div>
      <div
        className="absolute inset-y-20 inset-x-0 xl:inset-x-32 bg-center  xl:bg-cover bg-no-repeat select-none"
        style={{
          backgroundImage: `url(${gallery[modalIndex].picture.xs})`,
        }}
      >
        <LazyImage
          src={gallery[modalIndex].picture.sm}
          sizes="(min-width: 768px)50vw"
          srcSet={getPictureSrcSet(gallery[modalIndex].picture)}
          alt="Sample Image Alt"
          className="object-contain xl:object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default GalleryModal;
