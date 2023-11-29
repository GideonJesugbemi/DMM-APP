import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Bentley from "../../assets/images/bentley_continental wallpaper.jpg";
import Bentley from "../../assets/images/bentley_continental.jpg";
import { RxDividerVertical } from "react-icons/rx";
import { FaCarSide } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { LiaPaperPlane } from "react-icons/lia";
import { Button, Card } from "@material-tailwind/react";
import CardWrapper from "../../components/card/Card";
import { topDeals } from "../../assets/jsons/top-deals";
import VehicleType from "../../components/card/VehicleType";
import Altis from "../../assets/images/altis.jpg";
import MobileApp from "../../components/mobileapp/MobileApp";
import Newsletter from "../../components/newsletter/Newsletter";
import TopOffer from "../../components/top-offers/Topoffer";

const data = [
  { id: 1, value: "truck1" },
  { id: 2, value: "truck2" },
  { id: 3, value: "truck3" },
];
const Homepage = () => {
  const [type, setType] = useState<String>(" ");

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  return (
    <div>
      <div className=" container mx-auto ">
        <div
          className="relative mt-18 h-screen flex flex-col justify-center"
          style={{
            backgroundImage: `url(${Bentley})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {/* <img src={Bentley} alt="homepage bg" className="" /> */}
          <div className="relative flex flex-col items-center justify-center gap-4 font-semibold top-0 bottom-0 w-full  border-red-600">
            <h1 className="absolute text-3xl text-white font-semibold bottom-[-150px] left-[110px]">
              Welcome to DMM Marketplace
            </h1>

            <div className="absolute  border-red-500 bottom-[-225px] left-[190px] w-full">
              <ul className="flex p-1 md:p-0 mt-4 font-normal text-lg items-center justify-around md:flex-row md:mt-0 md:border-0">
                <li className="hover:bg-yellow-300  rounded-full px-9 py-2.5">
                  <Link
                    className={
                      "block py-2 pl-1 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 dark:text-white"
                    }
                    to={"/car"}
                  >
                    Car Rental
                    <div className="!text-red-300" />
                  </Link>
                </li>
                <li className="hover:bg-yellow-300  rounded-full px-9 py-2.5">
                  <Link
                    className={
                      "block py-2 pl-1 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 dark:text-white"
                    }
                    to={"/jet"}
                  >
                    Private Jet
                    <div className=" text-black " />
                  </Link>
                </li>
                <li className="hover:bg-yellow-300  rounded-full px-9 py-2.5">
                  <Link
                    className={
                      "block py-2 pl-1 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 dark:text-white"
                    }
                    to={"/boat"}
                  >
                    Boat Charter
                    <div className=" text-black " />
                  </Link>
                </li>
                <li className="hover:bg-yellow-300  rounded-full px-9 py-2.5">
                  <Link
                    className={
                      "block py-2 pl-1 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 dark:text-white"
                    }
                    to={"/driver"}
                  >
                    Hire Drivers
                    <div className=" text-black " />
                  </Link>
                </li>
                <li className="hover:bg-yellow-300  rounded-full px-9 py-2.5">
                  <Link
                    className={
                      "block py-2 pl-1 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 dark:text-white"
                    }
                    to={"/helicopter"}
                  >
                    Helicopter Charter
                    <div className=" text-black " />
                  </Link>
                </li>
                <li className="hover:bg-yellow-300  rounded-full px-9 py-2.5">
                  <Link
                    className={
                      "block py-2 pl-1 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 dark:text-white"
                    }
                    to={"/truck"}
                  >
                    Truck Hire
                    <div className=" text-black " />
                  </Link>
                </li>
              </ul>
            </div>

            {/* ..............................input fields............................ */}

            <div className="absolute flex bg-white items-center justify-center rounded-full bottom-[-300px] left-[210px]  px-2 py-2 ">
              <div className="bg-zinc-100 rounded-full py-1">
                <p className="text-xs">From where?</p>

                <input type="text" placeholder="Enter Address" />
              </div>
              <div className=" border border-red-200 w-fit">
                <p className="text-xs">Service Type</p>
                <select name="" id="">
                  <option value="">Select </option>
                  {data?.map((items, i) => (
                    <option value="">{items?.value} </option>
                  ))}
                </select>
              </div>
              <RxDividerVertical className="h-12 w-12 text-gray-200" />

              <div className=" border border-red-200 w-fit">
                <p className="text-xs">Pick-up & time</p>
                <input type="date" />
              </div>

              <RxDividerVertical className="h-12 w-12 text-gray-200" />
              <div className="">
                <p className="text-xs">Transmission</p>
                <select name="" id="">
                  <option value="">Select </option>
                  {data?.map((items, i) => (
                    <option value="">{items?.value} </option>
                  ))}
                </select>
              </div>
              <div className="">
                <p className="text-xs">Vehicle Brand</p>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    handleTypeChange(e);
                  }}
                >
                  <option value="">Select </option>
                  {data?.map((items, i) => (
                    <option value="">{items?.value} </option>
                  ))}
                </select>
              </div>
              <Button className="rounded-full bg-blue-950 px-10 py-4">
                Request quote
              </Button>
            </div>
          </div>

        </div>

          <div className="bg-gray-100 flex justify-center  items-center p-5">
            <div className="flex justify-between mt-5 space-x-20">
              <div className="flex flex-col items-center justify-center">
                <FaCarSide className="text-yellow-300  h-10 w-10" />
                <h2 className="text-lg font-semibold text-center">
                  Find the Perfect Vehicle
                </h2>
                <p className="text-sm font-light">
                  pick the perfect automobile that<br></br> matches your needs
                  and taste!<br></br> Browse through thousands of amazing{" "}
                  <br></br>
                  vehicles shared by local hosts close to you.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <LiaPaperPlane className="text-yellow-300 text-center h-10 w-10" />
                <h2 className="text-lg font-semibold text-center">
                  Book on DMM
                </h2>
                <p className="text-sm font-light">
                  Book on DMM for peace of mind<br></br> and guaranteed quality
                  cars!<br></br> Free cancellations up to 24 hours before
                  <br></br> your trip
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <GrStatusGood className="text-yellow-300 h-10 w-10" />
                <h2 className="text-lg font-semibold text-center">
                  You're Done!
                </h2>
                <p className="text-sm font-light">
                  Have the vehicle delivered or pick up<br></br>from your host.
                  Check in with DMM,<br></br> grab the keys, get ready<br></br>{" "}
                  and hit the road.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-[1180px] mx-auto">
          <h1>Today's Top Deals</h1>
          <div className="flex items-center justify-center flex-wrap gap-2">
            {topDeals.map((deal) => (
              <CardWrapper
                name={deal.name}
                image={deal.image}
                price={deal.price}
                passenger={deal.passenger}
                luggage={deal.luggage}
                id={deal.id}
              />
            ))}
          </div>
        </div>

        <div>
          <VehicleType />
        </div>
        <div className="relative w- h-40 mb-10 mx-10">
          <img
            src={Altis}
            alt="altis"
            className="object-cover w-full h-full rounded-3xl"
          />
          <div className="absolute text-white top-[30px] left-[70px]">
            <h2 className="text-lg font-medium">List your car</h2>
            <p className="text-sm font-extralight">
              Earn big on your car! Sublease your car and earn while you
              <br></br>rest. We manage and run it on your behalf
            </p>
            <Button className="rounded-full text-black bg-yellow-300 px-10 py-2 mt-4 mb-4">
              POST
            </Button>
          </div>
        </div>
        <MobileApp />
        <Newsletter />
        <TopOffer />
      </div>
    </div>
  );
};

export default Homepage;
