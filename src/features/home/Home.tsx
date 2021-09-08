import GallerySnippet from "features/gallery/gallerySnippet/GallerySnippet";
import React from "react";
import About from "./About";
import Banner from "./banner/Banner";
import EventLocation from "./EventLocation";
import Exhibitors from "./exhibitors/Exhibitors";
import ExpoMenu from "./ExpoMenu";

const Home = () => {
  return (
    <div className="relative">
      <Banner />
      <About />
      <ExpoMenu />
      <GallerySnippet />
      <Exhibitors />
      <EventLocation />
    </div>
  );
};

export default Home;
