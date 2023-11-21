import React from "react";
import { Button } from "@material-tailwind/react";
import { MdCopyright } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { PiFacebookLogoBold } from "react-icons/pi";
import { PiInstagramLogoBold } from "react-icons/pi";
import { PiTwitterLogoBold } from "react-icons/pi";
import { PiYoutubeLogoBold } from "react-icons/pi";


const Footer = () => {
  return (
    <div>
      <div className="bg-indigo-950 overflow">
        <div className="container mx-auto flex justify-between space-x-10 p-6">
          <div className="text-white ">
            <div className="flex justify-between space-x-8">
              <p>Privacy</p>
              <p>Legal Notice</p>
              <p>Terms & Condition</p>
            </div>
            <div className="text-xs flex space-x-4 mt-3">
              <div className="flex items-center space-x-1">
              <MdCopyright />
              <p>DMM 2023.</p>
              </div>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="text-white flex space-x-2">
            <PiFacebookLogoBold className="w-6 h-6"/>
            <PiInstagramLogoBold className="w-6 h-6"/>
            <PiTwitterLogoBold className="w-6 h-6"/>
            <PiYoutubeLogoBold className="w-6 h-6"/>
          </div>
          <div className="">
            <Button className="flex items-center rounded-full outline text-white bg-indigo-950 px-7 py-1 mt-4">
              Back to top 
              <IoIosArrowUp className="w-6 h-6 bottom-2"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
