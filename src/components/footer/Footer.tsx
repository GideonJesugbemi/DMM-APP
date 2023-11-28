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
        <div className="container mx-auto flex flex-col justify-between p-6 ">
          
          {/* .......top section............ */}
          <div className="md:flex md:flex-row flex flex-col gap-4 items-center justify-between text-white ">
            <div className="flex justify-between  w-full max-w-[600px]">
              <p>Privacy</p>
              <p>Legal Notice</p>
              <p>Terms & Condition</p>
            </div>

            <div className=" flex items-center justify-between w-full md:max-w-[400px]">
              <div className="text-white flex space-x-2">
                <PiFacebookLogoBold className="w-6 h-6" />
                <PiInstagramLogoBold className="w-6 h-6" />
                <PiTwitterLogoBold className="w-6 h-6" />
                <PiYoutubeLogoBold className="w-6 h-6" />
              </div>
              <div className="">
                <Button className="flex items-center rounded-full outline text-white bg-indigo-950 px-7 py-1">
                  Back to top
                  <IoIosArrowUp className="w-6 h-6 bottom-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* .............bottom section.......... */}
          <div className="text-xs text-white flex mt-3  w-full">
            <div className="flex items-center ">
              <MdCopyright />
              <p>DMM 2023.</p>
            </div>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
