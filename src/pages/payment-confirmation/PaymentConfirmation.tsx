import React from "react";

const PaymentConfirmation = () => {
  return (
    <div className=" flex flex-col min-h-screen py-8 gap-2 items-center w-full">
      <div className=" bg-gray-200 flex py-4 justify-evenly w-full">
        <p>Toyota Camry</p>
        <p>address</p>
        <p>shipping address</p>
      </div>

      <div className=" md:flex md:flex-row flex flex-col   gap-4">
        <div className=" flex flex-col gap-4">
          <h2 className=" font-bold">Thank you for riding with us!</h2>
          <p>your car is on its way. We have sent a mail to johnsmith@gmail.com with your recipt.</p>
          <p className="font-semibold">Check out other services</p>
          {/* cards */}
          <div className=" flex flex-col justify-between gap-4">
            <div className=" flex border-2 rounded-xl p-2 hover:border-orange-300 cursor-pointer gap-4 shadow-md">

              <img src="" alt="" />
              <div>
              <p className="font-medium"> Bank Cards</p>
              <p> Travel in comfort and styles with shared premium private travel options</p>

              </div>
            </div>
            <div className=" flex border-2 rounded-xl p-2 hover:border-orange-300 cursor-pointer gap-4 shadow-md">

            <img src="" alt="" />
              <div>
              <p className="font-medium"> Bank Cards</p>
              <p> Travel in comfort and styles with shared premium private travel options</p>

              </div>
            </div>
          
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
            <div className="  flex justify-between font-medium mt-4" >
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
    </div>
  );
};

export default PaymentConfirmation;
