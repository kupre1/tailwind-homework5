import React from "react";
import {
  explore,
  explore1,
  explore2,
  explore3,
  explore4,
  rightPoint,
} from "../assets";

const ExploreBar = () => {
  return (
    <>
      <div>
        <p className="text-[24px] font-bold text-white sm:text-[28px] lg:text-[38px]">
          Explore our wide variety of categories
        </p>
        <p className="text-[14px] font-normal text-secondery sm:text-[16px]">
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new
        </p>
      </div>
      <div className="mt-16 flex w-full justify-center ss:justify-between">
        <div className="h-[342px] max-w-[255px] rounded-lg bg-[#1A1A1A] p-[30px]">
          <img src={explore} alt="explore" />
          <div className="flex justify-between">
            <p className="font-semibold text-white">Action</p>

            <img src={rightPoint} alt="rightPoint" />
          </div>
        </div>
        <div className="kp:block h-[342px] max-w-[255px] rounded-md bg-[#1A1A1A] p-[30px] xs:hidden">
          <img src={explore1} alt="explore" />
          <div className="flex justify-between">
            <p className="font-semibold text-white">Action</p>
            <button>
              <img src={rightPoint} alt="rightPoint" />
            </button>
          </div>
        </div>
        <div className="h-[342px] max-w-[255px] rounded-md bg-[#1A1A1A] p-[30px] xs:hidden lg:block">
          <img src={explore2} alt="explore" />
          <div className="flex justify-between">
            <p className="font-semibold text-white">Action</p>
            <button>
              <img src={rightPoint} alt="rightPoint" />
            </button>
          </div>
        </div>
        <div className="h-[342px] max-w-[255px] rounded-md bg-[#1A1A1A] p-[30px] xs:hidden md:block">
          <img src={explore3} alt="explore" />
          <div className="flex justify-between">
            <p className="font-semibold text-white">Action</p>
            <button>
              <img src={rightPoint} alt="rightPoint" />
            </button>
          </div>
        </div>
        <div className="h-[342px] max-w-[255px] rounded-md bg-[#1A1A1A] p-[30px] xs:hidden ss:block">
          <img src={explore4} alt="explore" />
          <div className="flex justify-between">
            <p className="font-semibold text-white">Action</p>
            <button>
              <img src={rightPoint} alt="rightPoint" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreBar;
