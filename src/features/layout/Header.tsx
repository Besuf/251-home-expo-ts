import React, { useState, useEffect } from "react";
import MenuIcon from "components/icons/MenuIcon";
import Image from "next/image";
import NextLink from "next/link";
import FacebookIcon from "components/icons/FacebookIcon";
import InstgramIcon from "components/icons/InstgramIcon";
import TwitterIcon from "components/icons/TwitterIcon";
import DarkCloseIcon from "components/icons/DarkCloseIcon";
import DarkFacebook from "components/icons/DarkFacebook";
import DarkTwitter from "components/icons/DarkTwitter";
import DarkInstagram from "components/icons/DarkInstagram";
import ScrollDisable from "components/shared/ScrollDisable";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        const navEl = document.getElementById("navbar");
        if (
          (prevScrollpos > currentScrollPos || currentScrollPos === 0) &&
          navEl
        ) {
          if (currentScrollPos === 0) {
            navEl.style.background =
              "linear-gradient(180deg, rgba(0, 0, 0, 0.385) 23.96%, rgba(0, 0, 0, 0.014) 100%)";
          } else {
            navEl.style.background = "#101820";
          }
          navEl.style.top = "0";
        } else if (navEl) {
          navEl.style.top = "-200px";
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  let mediaMatch = false;
  if (typeof window !== undefined)
    mediaMatch = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-auto z-20 "
      id="navbar"
      style={{ transition: "top 0.3s" }}
    >
      <div
        className="flex justify-between px-10 md:px-24 lg:px-28 xl:px-32 py-4 items-center "
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.385) 23.96%, rgba(0, 0, 0, 0.014) 100%)",
          transition: "background 0.3s",
        }}
      >
        <div
          className="cursor-pointer w-auto lg:w-40 order-2 lg:order-1"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </div>

        <div className="w-20 h-20 md:w-28 md:h-28 relative cursor-pointer order-1 lg:order-2">
          <NextLink href="/">
            <a>
              <Image
                src="/expoLogo.svg"
                alt="251 Home Expo Logo"
                className="lg:w-28 lg:h-28 2xl:w-32 2xl:h-32"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </a>
          </NextLink>
        </div>
        <div className="hidden lg:flex items-center gap-12 w-40 order-3">
          <span className="cursor-pointer">
            <FacebookIcon />
          </span>
          <span className="cursor-pointer">
            <TwitterIcon />
          </span>
          <span className="cursor-pointer">
            <InstgramIcon />
          </span>
        </div>
      </div>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-textPrimary bg-opacity-50"
          >
            <ScrollDisable />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: mediaMatch ? -1000 : 1000 }}
            animate={{ x: 0 }}
            exit={{ x: mediaMatch ? -1000 : 1000 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-y-0 bg-primary bg-opacity-90  w-full md:w-[400px] md:right-0  lg:left-0  text-textPrimary p-8"
          >
            <div className="flex justify-end">
              <span className="cursor-pointer">
                <DarkCloseIcon onClick={toggleMenu} className="h-10 w-10" />
              </span>
            </div>
            <ul className="flex flex-col gap-4 text-2xl">
              <li>
                <NextLink href="/">
                  <a className="pb-1 border-b border-transparent hover:border-textPrimary transition duration-200 ease-in">
                    Home
                  </a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/gallery">
                  <a className="pb-1 border-b border-transparent hover:border-textPrimary transition duration-200 ease-in">
                    Gallery
                  </a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/visitor-subscription">
                  <a className="pb-1 border-b border-transparent hover:border-textPrimary transition duration-200 ease-in">
                    User Registration
                  </a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/exhibitor-subscription">
                  <a className="pb-1 border-b border-transparent hover:border-textPrimary transition duration-200 ease-in">
                    Exhibitor Registration
                  </a>
                </NextLink>
              </li>
            </ul>

            <div className="flex mt-10 gap-7">
              <span className="cursor-pointer">
                <DarkFacebook className="h-8 w-8" />
              </span>
              <span className="cursor-pointer">
                <DarkTwitter className="h-8 w-8" />
              </span>
              <span className="cursor-pointer">
                <DarkInstagram className="h-8 w-8" />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
