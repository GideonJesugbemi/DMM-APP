import React from "react";
import { RxDividerVertical } from "react-icons/rx";
import { Button } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import { IoIosArrowUp } from "react-icons/io";
import Kia from "../../assets/images/kia.jpg";
import Honda from "../../assets/images/topdeals/HondaAccord.jpg";
import { availableCars } from "../../assets/jsons/available-cars";
import AvailableCars from "../../components/availablecars/AvailableCars";
import { Slider } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";

export interface CarRentalProps {
  label: string;
  crossOrigin: string;
}



const CarRental = () => {
  return (
    <div>
      <div className="relative bg-gray-100 p-6">
        <div className="absolute flex bg-white items-center justify-center rounded-full bottom-[10px] left-[170px] px-5 py-2 space-x-6">
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
        <Button className="absolut rounded-full bg-blue-950 px-10 py-3 ">
          Edit
        </Button>
      </div>

      <div className="container px-5 py-24 mx-32">
        <div className="flex sm:flex-nowrap flex-wrap justify-center space-x-10">
          <div className="w-[%] mt-">
            <h3 className="bg-blue-950 text-white border p-2">Filter</h3>
            <div className="bg-stone-100 p-3">
              <div className="flex items-center justify-between mb-2">
                <p>Price</p>
                <IoIosArrowUp />
              </div>
              <div className="relative">
                <div className="w-80">
                  <Slider defaultValue={50} />
                </div>
                <div className="absolute flex justify-between items-center mt-5">
                  <p>N00, 00</p>
                  <p>N00, 00</p>
                </div>
              </div>
              <div className="mt-10">
                <Checkbox label="Negotiable" crossOrigin className="w-4 rounded-full" />
              </div>
              <hr></hr>
              <div>
                <div className="flex items-center justify-between mb-2 mt-3">
                  <p>Category</p>
                  <IoIosArrowUp />
                </div>
                <div className="flex flex-col text-center">
                  <Checkbox label="Sedans" crossOrigin className="w-4 rounded-full mt-2 text-center" />
                  <Checkbox label="Convertibles" crossOrigin className="w-4 rounded-full mt-2" />
                  <Checkbox label="Luxury" crossOrigin className="w-4 rounded-full mt-2" />
                  <Checkbox label="Sport" crossOrigin className="w-4 rounded-full mt-2" />
                  <Checkbox label="SUVs" crossOrigin className="w-4 rounded-full mt-2" />
                  <Checkbox label="Truck" crossOrigin className="w-4 rounded-full mt-2" />
                  <Checkbox label="Classics" crossOrigin className="w-4 rounded-full mt-2" />
                  <Checkbox label="Vans & Buses" crossOrigin className="w-4 rounded-full mt-2" />
                </div>
              </div>
              <hr></hr>
              <div>
                <div className="flex items-center justify-between mb-2 mt-3">
                  <p>Model year</p>
                  <IoIosArrowUp />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-">
            <h2 className="font-bold">99+ cars available</h2>

            <div className="">
              {availableCars.map((car) => (
                <AvailableCars
                  name={car.name}
                  image={car.image}
                  price={car.price}
                  passenger={car.passenger}
                  luggage={car.luggage}
                  id={car.id}
                  door={car.door}
                  transmission={car.transmission}
                  location={car.location}
                  host={car.host}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRental;
