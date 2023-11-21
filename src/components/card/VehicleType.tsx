import React from "react";
import Bus from "../../assets/images/hiace.jpg";
import Bentley from "../../assets/images/bentley.jpg";
import Kia from "../../assets/images/kia.jpg";
import Corolla from "../../assets/images/Corolla.png";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const VehicleType = () => {
  return (
    <div className="">
      <h2 className="text-lg font-medium ml-10 mt-7">Browse by vehicle type</h2>
      <div className="flex justify-between items-center space-x-2 mt-5 mb-10">
        <IoIosArrowDropleftCircle className="w-8 h-8"/>
        <img src={Kia} alt="kia" className="rounded-3xl w-[21%] h-[21%]" />
        <img
          src={Corolla}
          alt="corolla"
          className="rounded-3xl w-[21%] h-[21%]"
        />
        <img
          src={Bentley}
          alt="bentley"
          className="rounded-3xl w-[22%] h-[22%]"
        />
        <img 
            src={Bus} 
            alt="bus" 
            className="rounded-3xl w-[22%] h-[22%]" 
        />
        <IoIosArrowDroprightCircle className="w-8 h-8"/>
      </div>
    </div>
  );
};

export default VehicleType;
