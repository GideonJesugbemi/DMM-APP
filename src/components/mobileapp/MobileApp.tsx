import React from "react";
import Playstore from "../../assets/images/playstore.png";
import Scan from "../../assets/images/scan.png";
import Appstore from "../../assets/images/appstore.jpg"
import Mobilephone from "../../assets/images/mobile phone.png";

const MobileApp = () => {
  return (
    <div className="bg-cyan-100 rounded-3xl mt-32 mb-10 mx-10 p-3">
      <div className="relative flex">
        <img src={Mobilephone} alt="phone" className="absolute bottom-[-5px]"/>
        <div className="ml-60 mt-10 ">
          <h2 className="text-lg font-semibold">Get an amazing mobile app experience</h2>
          <p className="text-xs font-normal">
            Download our Mobile App free today to book your private charters,
            rides, boat cruises and more <br></br> and get amazing deals on the
            app
          </p>
          <div className="flex mt-10 mb-10 space-x-1">
            <img src={Appstore} alt="playstore" className="w-16 h-12 rounded"/>
            <img src={Scan} alt="scan" className="w-12 h-12"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
