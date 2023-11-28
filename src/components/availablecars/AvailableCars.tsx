import React from 'react'
import { Button } from "@material-tailwind/react";
import Honda from "../../assets/images/topdeals/HondaAccord.jpg";
import { Rating } from "@material-tailwind/react";
import { AvailableCarsProps } from "../../assets/jsons/available-cars";

const AvailableCars: React.FC<AvailableCarsProps> = ({ ...carItems }) => {
  return (
    <div>
        <div className="flex w-[70%] mt-8 mb-8">
              <div className="w-[50%]">
                <img src={Honda} alt="" className="w-full h-full rounded-l-[30px]" />
              </div>
              <div className="flex flex-col border border-gray-100  w-full p-2">
                <div className="flex items-center">
                  <p className="font-semibold md:text-xl text-base">{carItems.name}</p>
                  <Rating value={5} readonly className="text-amber-300" />
                </div>
                <div className="flex text-xs mt-2 mb-2 space-x-3">
                  <p>{carItems.host}</p>
                  <p className="bg-blue-950">DMM rating 90%</p>
                </div>
                <p className="text-xs">Location: {carItems.location}</p>
                <p className="mt-3 text-xs">{carItems.transmission}</p>
                <p className='text-xs'>{carItems.passenger} passenger</p>
                <p className='text-xs'>{carItems.door} door</p>
                <p className='text-xs'>{carItems.luggage} luggages</p>
              </div>
              <div className="bg-gray-100 border w-[40%]  flex flex-col items-center justify-center rounded-r-[30px]">
                <p className="font-bold">{carItems.price}</p>
                <p className="text-xs mb-3">per day</p>
                <Button className="text-black font-semibold rounded-full bg-amber-200 px-10 py-3 ">
                  VIEW
                </Button>
              </div>
            </div>
    </div>
  )
}

export default AvailableCars;