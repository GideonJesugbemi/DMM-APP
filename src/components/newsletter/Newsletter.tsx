import React from "react";
import { Button, Card } from "@material-tailwind/react";

const Newsletter = () => {
  return (
    <div className="bg-zinc-100 rounded-3xl mx-10 p-5 border-4 max-w-[1180px] mx-auto">
      <div className="p-4 ">

        <div className="md:flex md:flex-row flex flex-col mb-6 justify-between gap-2">

          <div className="">
            <h2 className="text-lg font-semibold">
              Be the first to get the latest offers
            </h2>
            <p className="text-sm">
              Enter your email and we'll send them your way
            </p>
          </div>

          
            <div className=" flex bg-white items-center justify-between rounded-full  p-2 flex-grow">
              <input type="text" className=" rounded-full p-2 " />
              <Button className="rounded-full bg-blue-950 px-8 py-3 text-center">
                Subscribe
              </Button>
            </div>
          

        </div>

        <hr />

        <p className="text-sm mt-4">
          Your privacy is important to us, so we'll never spam you or share your
          info with third parties. Take a look at our{" "}
          <span className="font-semibold">privacy policy.</span>
          <br></br>You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
