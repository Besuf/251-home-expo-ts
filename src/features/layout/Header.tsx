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
import { useRouter } from "next/router";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

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

  return (
    <div
      className="fixed top-0 left-0 right-0 h-auto z-20 "
      id="navbar"
      style={{ transition: "top 0.3s" }}
    >
      <div className="flex justify-between px-10 md:px-24 lg:px-28 xl:px-32 py-4 items-center bg-black h-[44px] xl:[60px]">
        <div className=" absolute w-20 h-20 md:w-28 md:h-28  top-0 cursor-pointer ">
          <NextLink href="/">
            <a>
              <Image
                src="/expoLogo.svg"
                alt="251 Home Expo Logo"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </a>
          </NextLink>
        </div>
        <div
          className="absolute right-10 block xl:hidden cursor-pointer w-auto lg:w-40 "
          onClick={toggleMenu}
        >
          <MenuIcon />
        </div>
        <div className="flex items-center  relative">
          <ul className="hidden xl:flex items-center ml-[200px] text-sm uppercase  text-gray-200 tracking-wider">
            <li
              className={`cursor-pointer border-b ${
                router.pathname === "/" ? "border-primary" : "border-black"
              } hover:border-primary`}
            >
              <NextLink href="/">
                <a>Home</a>
              </NextLink>
            </li>
            <li
              className={`ml-10 cursor-pointer border-b ${
                router.pathname === "/gallery"
                  ? "border-primary"
                  : "border-black"
              } hover:border-primary`}
            >
              <NextLink href="/gallery">
                <a>Gallery</a>
              </NextLink>
            </li>
            <li
              className={`ml-10 cursor-pointer border-b ${
                router.pathname === "/visitor-subscription"
                  ? "border-primary"
                  : "border-black"
              } hover:border-primary`}
            >
              <NextLink href="/visitor-subscription">
                User Registration
              </NextLink>
            </li>
            <li
              className={`ml-10 cursor-pointer border-b ${
                router.pathname === "/exhibitor-subscription"
                  ? "border-primary"
                  : "border-black"
              } hover:border-primary`}
            >
              <NextLink href="/exhibitor-subscription">
                <a>Exhibitor Registration</a>
              </NextLink>
            </li>
          </ul>
        </div>

        <div className="hidden xl:flex items-center gap-12 w-40 order-3">
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
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: 1000 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-y-0 bg-primary bg-opacity-90  w-full md:w-[400px] md:right-0    text-textPrimary p-8"
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
