import React from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import OtherVehicles from "../../components/othervehicles/OtherVehicles";
import { seeOtherVehicles } from "../../assets/jsons/see-other-vehicle";

const DateUnavailable = () => {
  return (
    <div className=" flex flex-col min-h-screen py-8 gap-2 items-center w-full">
      <div className=" bg-gray-200 flex p-4 justify-evenly w-full">
        <p>Toyota Camry</p>
        <p>address</p>
        <p>shipping address</p>
      </div>

      <div className=" md:flex md:flex-row flex flex-col mt-10 gap-10">
        <div className=" flex flex-col">
          <h2 className="font-bold flex items-center">
            <FaCircleExclamation className="mr-2 text-lime-500 w-8 h-8" /> Dates
            requested unavailable!
          </h2>
          <p className="text-sm mt-4 mb-4">
            Hi, John Smith, thanks again for booking.<br></br>
            <span className="font-semibold">Toyota Camry by DMM</span> is
            partially available. Check below for more information
          </p>
          <hr />
          {/* details */}
          <div className=" flex flex-col justify-between">
            <div className=" flex  p-3 hover:border-orange-300 cursor-pointer space-x-16">
              <div className="text-sm">
                <p className="">Booking date:</p>
                <p className="font-semibold">Aug 24, 2020 - Aug 31,200</p>
                <p className="mt-2">Driver:</p>
                <p className="font-semibold">Chinedu Okagbare</p>
              </div>
              <div className="text-sm">
                <p className="">Service type:</p>
                <p className="font-semibold">Full day hire</p>
                <p>Status:</p>
                <p className="font-semibold">Partly confirmed</p>
              </div>
              <div className="text-sm">
                <p>Date available:</p>
                <p className="font-semibold">Aug 24, 2020 - Aug29,2020</p>
              </div>
            </div>
            <div className=" flex  p-2 hover:border-orange-300 cursor-pointer gap-4">
              <button
                type="button"
                className="text-amber bg-white-700 border-gray-500 border rounded-full px-10 py-1 hover:shadow-md"
              >
                Proceed to
              </button>
              <button
                type="button"
                className="text-amber bg-white-700 border-gray-500 border rounded-full px-10 py-1 hover:shadow-md"
              >
                Reschedule
              </button>
              <button
                type="button"
                className="text-red-600 bg-white-700 hover:shadow-md"
              >
                Cancel booking
              </button>
            </div>
            <p className="text-xs mb-3">
              .By proceeding to payment, you agree to the date available
            </p>

            <hr />
          </div>
        </div>

        <div className=" flex flex-col gap-2 rounded-md bg-gray-200 w-[40%]">
          <div className="  p-2 border-b-2 border-b-white">
            <p className="  font-semibold">Order Summary</p>
          </div>
          <div className="  p-2 border-b-2 border-b-white">
            <p className="  font-semibold">User Details</p>
            <p>name</p>
            <p>email</p>
            <p>phone</p>
          </div>
          <div className="  p-2 ">
            <p className="  font-semibold">Transaction Details</p>
            <div className="  flex justify-between">
              <p>name</p>
              <p>N 0000000</p>
            </div>
            <div className="  flex justify-between">
              <p>name</p>
              <p>N 0000000</p>
            </div>
            <div className="  flex justify-between">
              <p>name</p>
              <p>N 0000000</p>
            </div>
            <div className="  flex justify-between font-medium mt-4">
              <p>Subtotal</p>
              <p>N 0000000</p>
            </div>
            <div className="  flex justify-between gap-4">
              <p>WAT(7.5%)</p>
              <p>N 0000000</p>
            </div>
            <div className="  flex justify-between font-medium mt-4">
              <p>Total</p>
              <p>N 0000000</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col min-h-screen py-8 gap-2 items-center w-full">
        <div className="w-[70%]">
          <h2 className="font-bold">See other Vehicles</h2>
          {seeOtherVehicles.map((vehicle) => (
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
        </div>
      </div>
    </div>
  );
};

export default DateUnavailable;
