import React from "react";
import ExploreBar from "./components/ExploreBar";

const Explore = () => {
  return (
    <>
      <div className="  bg-main ">
        <div className="W-full ">
          <div className="flex items-center justify-center px-6 sm:px-16">
            <div className="xl:max-w-[1480px] w-full  flex flex-col mt-[200px] mb-[120px] justify-between">
              <ExploreBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
