import React from "react";
import { RxDividerVertical } from "react-icons/rx";
import { Button } from "@material-tailwind/react";

const CarRental = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="absolute flex bg-white items-center justify-center rounded-full bottom-[50px] left-[170px] px-5 py-2 space-x-6">
          <div className="bg-gray-100 rounded-full px-4 py-1">
            <p className="text-xs">Ojodu Berger</p>
          </div>
          <div className="">
            <p className="text-xs">Lagos Island</p>
          </div>
          <RxDividerVertical className="h-12 w-12 text-gray-200" />
          <div className="">
            <p className="text-xs">Charter drop</p>
          </div>
          <RxDividerVertical className="h-12 w-12 text-gray-200" />
          <div className="">
            <p className="text-xs">19/09/2023 02:00</p>
          </div>
          <div className="">
            <p className="text-xs">19/09/2023 02:00</p>
          </div>
        </div>
        <Button className="rounded-full bg-blue-950 px-10 py-3 right-3 ">
            Edit
        </Button>
      </div>
    </div>
  );
};

export default CarRental;
