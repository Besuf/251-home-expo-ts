import React from "react";
import BackIcon from "components/icons/BackIcon";
import NextIcon from "components/icons/NextIcon";
// import { exihibitors } from "./exhibitors";
import Image from "next/image";
import Slider from "react-slick";

function Next(props: any) {
  const { className, onClick } = props;
  return <NextIcon className={className} onClick={onClick} />;
}

function Back(props: any) {
  const { className, onClick } = props;
  return <BackIcon className={className} onClick={onClick} />;
}

const ExihibitorCarousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    pauseOnHover: true,
    nextArrow: <Next />,
    prevArrow: <Back />,
  };

  return (
    <div className="w-full h-full relative bg-black px-9 ">
      <Slider className="h-full w-full" {...settings}>
        <div className="w-full h-96  md:h-72  px-3">
          <div className="h-full  grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="h-full relative bg-black">
              <Image
                src="/images/partners/AyatLogo.svg"
                layout="fill"
                objectFit="contain"
                alt="Ayat RealEstate Logo"
              />
            </div>
            <div className="h-full relative bg-black">
              <Image
                src="/images/partners/FlintLogo.svg"
                layout="fill"
                objectFit="contain"
                alt="Flintstone Homes RealEstate Logo"
              />
            </div>
            <div className="h-full relative bg-black">
              <Image
                src="/images/partners/MetroLogo.svg"
                layout="fill"
                objectFit="contain"
                alt="Metropolitian RealEstate Logo"
              />
            </div>
            <div className="h-full relative bg-black">
              <Image
                src="/images/partners/AyatLogo.svg"
                layout="fill"
                objectFit="contain"
                alt="Ayat RealEstate Logo"
              />
            </div>
          </div>
        </div>
        <div className="w-full  h-96  md:h-72  px-3">
          <div className="h-full  grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="h-full relative bg-black">
              <Image
                src="/images/partners/MetroLogo.svg"
                layout="fill"
                objectFit="contain"
                alt="Metropolitian RealEstate Logo"
              />
            </div>
            <div className="h-full relative bg-black">
              <Image
                src="/images/partners/AyatLogo.svg"
                layout="fill"
                objectFit="contain"
                alt="Ayat RealEstate Logo"
              />
            </div>
            <div className="h-full relative bg-black">
              <Image
                src="/images/partners/FlintLogo.svg"
                layout="fill"
                objectFit="contain"
                alt="Flintstone Homes RealEstate Logo"
              />
            </div>
            <div className="h-full relative bg-black">
              <Image
                src="/images/partners/AyatLogo.svg"
                layout="fill"
                objectFit="contain"
                alt="Ayat RealEstate Logo"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ExihibitorCarousel;
