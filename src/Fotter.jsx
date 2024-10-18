import React from "react";
import FotBar from "./components/FotBar";

const Fotter = () => {
  return (
    <div className="bg-main">
      <div className="W-full bg-black">
        <div className="flex flex-col items-center justify-center p-28">
          <div className="w-full max-w-[1480px]">
            <FotBar />
          </div>
          <div className="border-[gray ] flex h-[51px] w-full max-w-[1480px] flex-col items-center justify-between border-t md:flex-row md:items-end">
            <p className="text-secondery">
              @2023 streamvib, All Rights Reserved
            </p>
            <p className="flex w-full max-w-[411px] justify-between text-secondery">
              <span>Terms of Use</span> <span>Privacy Policy </span>
              <span>Cookie Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
