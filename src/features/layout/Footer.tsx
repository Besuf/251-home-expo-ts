import CopyRightIcon from "components/icons/CopyRightIcon";
import FacebookIcon from "components/icons/FacebookIcon";
import InstgramIcon from "components/icons/InstgramIcon";
import MailIcon from "components/icons/MailIcon";
import PhoneIcon from "components/icons/PhoneIcon";
import TwitterIcon from "components/icons/TwitterIcon";
import NextLink from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-10 px-10 md:px-24">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-12 md:gap-48">
        <div className="flex justify-start md:justify-end">
          <div>
            <h4 className="text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-2 pt-6 text-sm text-gray-400 ">
              <li>
                <NextLink href="/">
                  <a className="pb-1 border-b border-transparent hover:border-primary transition duration-200 ease-in">
                    Home
                  </a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/gallery">
                  <a className="pb-1 border-b border-transparent hover:border-primary transition duration-200 ease-in">
                    Gallery
                  </a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/visitor-subscription">
                  <a className="pb-1 border-b border-transparent hover:border-primary transition duration-200 ease-in">
                    User Registration
                  </a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/exhibitor-subscription">
                  <a className="pb-1 border-b border-transparent hover:border-primary transition duration-200 ease-in">
                    Exhibitor Registration
                  </a>
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-start">
          <div>
            <h4 className="text-lg">Contact</h4>
            <ul className="flex flex-col gap-2 pt-6 text-sm text-gray-400 ">
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <span>+251-911-78-90-12</span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <span>251home_expo@mail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center gap-10">
        <span>
          <FacebookIcon />
        </span>
        <span>
          <TwitterIcon />
        </span>
        <span>
          <InstgramIcon />
        </span>
      </div>

      <div className="mt-24 text-sm text-gray-400 flex justify-center ">
        <div className="flex flex-col gap-2">
          <h6 className="text-center">Powered By M.A.D Technologies</h6>
          <div className="flex items-center gap-1">
            <CopyRightIcon />
            <span>Addis Ababa, Ethiopia, 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
