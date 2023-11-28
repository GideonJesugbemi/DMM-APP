import React, { useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

const TakeMeHome = () => {

  const [minValue, setMinValue] = useState(25);
	const [maxValue, setMaxValue] = useState(75);


  return (
    <div className=" flex flex-col min-h-screen pb-8 gap-2 items-center w-full">
      {/* ............top bar............... */}
      <div className=" bg-gray-200 flex py-4 justify-evenly w-full ">
        <div className=" w-full rounded-full flex items-center justify-between bg-white max-w-[1180px] mx-auto p-4">
          <p>Intercontinental, VI</p>
          <p>Oba Akran, Ikeja</p>
          <p>15/09/2021 02:00</p>
          <p>Take-Me-Home</p>
          <p>Honda Accord</p>
        </div>
        <button className=" px-6 rounded-full border-2 border-black">
          Edit
        </button>
      </div>

      <div className=" md:flex md:flex-row flex flex-col gap-4 pt-8">
        {/* ........left component............ */}
        <div className=" flex flex-col gap-2 rounded-2xl bg-gray-200 h-fit md:min-w-[20rem]">
          <div className=" border-b-2 border-b-white bg-indigo-950 text-white rounded-t-2xl p-4">
            <p className="  font-semibold">Filter</p>
          </div>

          <div className=" p-4 border-b-2 border-b-white">
            <p className="  font-semibold">Price</p>
            <MultiRangeSlider
            style={{border:'none', boxShadow:'none', padding:'15px 10px'}}
					min={0}
					max={100}
					step={5}
          label={'false'}
          ruler={'false'}
          barInnerColor="#126fc7"
					minValue={minValue}
					maxValue={maxValue}
					onInput={(e: ChangeResult) => {
						setMinValue(e.minValue);
						setMaxValue(e.maxValue);
					}}
				></MultiRangeSlider>
            <div className="font-normal text-sm flex justify-between">
              <p>N00,000</p>
              <p>N00,000</p>
            </div>
          </div>
          <div className="  p-2 ">
            <p className="  font-semibold">Transmission</p>
            <div className="gap-2 flex">
              <input type="checkbox" name="automatic" placeholder="Automatic" />
              <label htmlFor="automatic">Automatic</label>
            </div>
            <div className="gap-2 flex">
              <input type="checkbox" name="manual" placeholder="manual" />
              <label htmlFor="manual">Manual</label>
            </div>

            <div className="gap-2 flex">
              <input
                type="checkbox"
                name="automatic & manual"
                placeholder="automatic & manual"
              />
              <label htmlFor="automatic & manual">Automatic & Manual</label>
            </div>
          </div>
        </div>

        {/* ........right component.......... */}
        <div className=" md:min-w-[40rem]">
          <h2 className="font-bold pb-4 text-xl">
      
            Take-Me-Home, Victoria Island to ikeja
          </h2>
          <div className=" flex flex-col gap-4 rounded-xl bg-white border border-gray-200 ">
        {/* ..........top side........ */}
            <div className=" flex items-center justify-between px-4 w-full">
              <p>Depart V.I.</p>
              <p className="max-w-[10rem]">Intercontinental Hotel. 108,kofo Abayomi,</p>
              <p className=" max-w-[10rem] ">Mon, September 24,2021 03:00pm</p>
            </div>
            <hr />
            <div className=" flex items-center justify-between px-4 w-full">
              <p>Arrive Ikeja</p>
              <p className=" max-w-[10rem] "> 108,kofo Abayomi Lagos,</p>
            </div>
            
            <div className=" flex items-center justify-between font-bold bg-gray-300 p-2">
              Details
            </div>
            {/*.............bottom side....... */}
            <div className=" flex items-center justify-between px-4">
              <div className=" max-w-[10rem] grow">
                <p>Service type:</p>
                <p> Take me Home</p>
              </div>
              <div className=" max-w-[10rem] grow">
                <p>Duration:</p>
                <p>6 hours</p>
              </div>
              <div className=" max-w-[10rem] grow">
                <p>Car:</p>
                <p>Honda Accord.</p>
              </div>
            </div>
            <div className=" flex items-center justify-between px-4">
              <div className=" max-w-[10rem] grow">
                <p>Car Transmision</p>
                <p> Automatic</p>
              </div>
              <div className=" max-w-[10rem] grow">
                <p>Insurance:</p>
                <p> Comprehensive</p>
              </div>
              <div className=" max-w-[10rem] grow">
                <p>Request:</p>
                <p> Yoruba Proficiency</p>
              </div>
            </div>

            <div className=" flex  items-center justify-between px-4 bg-indigo-950 rounded-b-xl py-4 text-white">
              <div>
                <input type="checkbox" name="policy" />
                <label htmlFor="policy"> Agree to Cancellation Policy</label>
              </div>

              <div className="flex justify-between flex-grow max-w-[10rem] items-center">
                <p>N00,00 </p>
                <button className=" bg-yellow-400 rounded-full px-4 py-2">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeMeHome;
