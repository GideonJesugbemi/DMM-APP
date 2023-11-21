import React from "react";
import { Button, Card } from "@material-tailwind/react";

const Newsletter = () => {
  return (
    <div className="bg-zinc-100 rounded-3xl mx-10 p-5">
      <div className="p-4 space-x-10">
        <div className="flex  mb-6">
          <div>
            <h2 className="text-lg font-semibold">
              Be the first to get the latest offers
            </h2>
            <p className="text-sm">
              Enter your email and we'll send them your way
            </p>
          </div>
          <div>
            <div className="absolute flex bg-white items-center justify-end rounded-full  right-[] w-[45%] px-12 py-2 space-x-6">
              <Button className="rounded-full bg-blue-950 px-10 py-3 right-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <p>
          Your privacy is important to us, so we'll never spam you or share your
          info with third parties. Take a look at our{" "}
          <span>privacy policy.</span>
          <br></br>You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
