import React from "react";
import FotBar from "./components/FotBar";

const Fotter = () => {
  return (
    <div className="  bg-main ">
      <div className="W-full overflow-hidden h-[200px]  opacity-[0.8] bg-black ">
        <div className="flex items-center justify-center px-6 ">
          <div className="max-w-[1280px]  w-full">
            <FotBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
