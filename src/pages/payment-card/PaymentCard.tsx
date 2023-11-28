import React from "react";

const PaymentCard = () => {
  return (
    <div className=" flex flex-col min-h-screen py-8 gap-2 items-center w-full">
      <div className=" bg-gray-200 flex py-4 justify-evenly w-full">
        <p>Toyota Camry</p>
        <p>address</p>
        <p>shipping address</p>
      </div>

      <div className=" md:flex md:flex-row flex flex-col   gap-4">
        <div className=" flex flex-col gap-4">
          <h2 className=" font-bold">Payment</h2>
          <p>kindly select your preferred payment channel</p>
          {/* cards */}
          <div className=" flex justify-between">
            <div className=" flex flex-col border-2 rounded-xl p-2 hover:border-orange-300 cursor-pointer">
              <p> Bank Cards</p>

              <img src="" alt="" />
            </div>
            <div className=" flex flex-col border-2 rounded-xl p-2 hover:border-orange-300 cursor-pointer">
              <p> Bank Cards</p>

              <img src="" alt="" />
            </div>
            <div className=" flex flex-col border-2 rounded-xl p-2 hover:border-orange-300 cursor-pointer">
              <p> Bank Cards</p>

              <img src="" alt="" />
            </div>
            <div className=" flex flex-col border-2 rounded-xl p-2 hover:border-orange-300 cursor-pointer">
              <p> Bank Cards</p>

              <img src="" alt="" />
            </div>
          </div>
          {/* Input cred */}
          <div className="border rounded-md p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Card number"
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Account Holder"
                className="border p-2 rounded-md"
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <input
                type="text"
                placeholder="Expiration date"
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Security Code"
                className="border p-2 rounded-md"
              />
              <button className="border px-4 py-2 rounded-full bg-black text-white"> Submit</button>
            </div>
          </div>
        </div>


        <div className=" flex flex-col gap-2 rounded-md bg-gray-200">
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

export default PaymentCard;
