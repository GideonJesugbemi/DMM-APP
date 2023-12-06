import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Slider } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import OtherVehicles from "../../components/othervehicles/OtherVehicles";
import { backToCar } from "../../assets/jsons/back-to-cars";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { Rating } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { RxDividerVertical } from "react-icons/rx";


const BackToCar = () => {
  return (
    <div className="container px-5 py-24 mx-32">
      <div className="flex sm:flex-nowrap flex-wrap justify-center gap-8">
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
              <Checkbox
                label="Negotiable"
                crossOrigin
                className="w-4 rounded-full"
              />
            </div>
            <hr></hr>
            <div>
              <div className="flex items-center justify-between mb-2 mt-3">
                <p>Category</p>
                <IoIosArrowUp />
              </div>
              <div className="flex flex-col text-center">
                <Checkbox
                  label="Sedans"
                  crossOrigin
                  className="w-4 rounded-full mt-2 text-center"
                />
                <Checkbox
                  label="Convertibles"
                  crossOrigin
                  className="w-4 rounded-full mt-2"
                />
                <Checkbox
                  label="Luxury"
                  crossOrigin
                  className="w-4 rounded-full mt-2"
                />
                <Checkbox
                  label="Sport"
                  crossOrigin
                  className="w-4 rounded-full mt-2"
                />
                <Checkbox
                  label="SUVs"
                  crossOrigin
                  className="w-4 rounded-full mt-2"
                />
                <Checkbox
                  label="Truck"
                  crossOrigin
                  className="w-4 rounded-full mt-2"
                />
                <Checkbox
                  label="Classics"
                  crossOrigin
                  className="w-4 rounded-full mt-2"
                />
                <Checkbox
                  label="Vans & Buses"
                  crossOrigin
                  className="w-4 rounded-full mt-2"
                />
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
        {/* <h2 className="font-semibold">Honda Accord 2016</h2> */}
        <div className="border w-[60%]">
          {/* <div className="w-[]"> */}
            {backToCar.map((vehicle) => (
              <OtherVehicles
                name={vehicle.name}
                image={vehicle.image}
                price={vehicle.price}
                passenger={vehicle.passenger}
                luggage={vehicle.luggage}
                id={vehicle.id}
                door={vehicle.door}
                transmission={vehicle.transmission}
                location={vehicle.location}
                host={vehicle.host}
              />
            ))}
          {/* </div> */}
          <div className="">
            <div>
              <h3 className="font-semibold">Details</h3>
              <p className="text-xs mb-5 mt-2">
                Arrive at your destination in style with this air-conditioned
                automatic. With room for 4 passengers and 2 piece<br></br> of
                luggage, it's ideal for small groups looking to get from A to B
                in comfort. Price can change at any moment so<br></br> book now
                to avoid disappointment
              </p>
            </div>
            <hr className="w-3/4" />
            <div className="mt-3 mb-5">
              <h3 className="font-semibold">Features</h3>
              <div className="flex text-xs space-x-28 mt-3">
                <div>
                  <p className="mb-2">Airbag</p>
                  <p>USB input</p>
                </div>
                <div>
                  <p className="mb-2">Heated seat</p>
                  <p>Power windows</p>
                </div>
                <div>
                  <p className="mb-2">GPS</p>
                  <p>ABS</p>
                </div>
                <div>
                  <p className="mb-2">Panoramic roof</p>
                  <p>DVD system</p>
                </div>
              </div>
            </div>
            <hr className="w-3/4" />
            <div className="flex space-x-12 mt-3 mb-3">
              <div className="flex items-center space-x-1">
                <IoIosCheckmarkCircleOutline className="text-green-400" />
                <p className="text-xs">Free Cancellation</p>
              </div>
              <div className="flex items-center space-x-1">
                <ImCancelCircle className="text-red-600" />
                <p className="text-xs">Book Instantly</p>
              </div>
              <div className="flex items-center space-x-1">
                <IoIosCheckmarkCircleOutline className="text-green-600" />
                <p>Unlimited mileage</p>
              </div>
              <div className="flex items-center space-x-1">
                <IoIosCheckmarkCircleOutline className="text-green-600" />
                <p>Great condition</p>
              </div>
            </div>
            <hr className="w-3/4" />
            <div className="mt-3 mb-5">
              <h3 className="font-semibold">Reviews</h3>
              <h4 className="font-semibold mt-2 mb-2">Excellent service</h4>
              <p className="text-xs">
                The car is well-maintained and the personalized service exceeded
                my expectations. I highly recommend both this<br></br>{" "}
                exceptional car host for an enjoyable rental experience
              </p>
              <div className="text-xs flex items-center mt-2 mb-2 space-x-3">
                <Rating value={5} readonly className="text-amber-300 text-xs" />
                <p className="text-xs">Aug 18, 2023 by James</p>
              </div>
            </div>
            <hr className="w-3/4" />
            <div className="mb-3">
              <h4 className="font-semibold mt-2 mb-2">Excellent service</h4>
              <p className="text-xs">
                {" "}
                Exceptional car host! Seamless rental, friendly service. Highly
                recommend!
              </p>
              <div className="text-xs flex items-center mt-2 mb-2 space-x-3">
                <Rating value={5} readonly className="text-amber-300 text-xs" />
                <p className="text-xs">Aug 18, 2023 by James</p>
              </div>
            </div>
            <hr className="w-3/4" />
            <div className="mb-3">
              <h4 className="font-semibold mt-2 mb-2">Excellent service</h4>
              <p className="text-xs">
                {" "}
                Exceptional car host! Seamless rental, friendly service. Highly
                recommend!
              </p>
              <div className="text-xs flex items-center mt-2 mb-2 space-x-3">
                <Rating value={5} readonly className="text-amber-300 text-xs" />
                <p className="text-xs">Aug 18, 2023 by James</p>
              </div>
            </div>
            <hr className="w-3/4" />
            <div className="flex mt-3">
              <div>
                <p className="text-xs">Report suspicious listing</p>
              </div>
              <div className="flex">
                <RxDividerVertical className="h-12 w-12 text-gray-200" />
                <div>
                  <p>N00,00</p>
                  <p className="text-xs">per day</p>
                </div>
                <Button className="text-sm text-black font-semibold rounded-full bg-amber-300 px-10 py-1 ">
                  BOOK
                </Button>
                <Button className="text-sm text-amber-200 font-semibold rounded-full bg-blue-950 px-6 py- ">
                  MAKE OFFER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackToCar;
