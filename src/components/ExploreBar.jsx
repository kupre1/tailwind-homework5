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
        <p className="text-[38px] text-white  font-bold">
          Explore our wide variety of categories
        </p>
        <p className="text-[18px] text-secondery font-normal ">
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new
        </p>
      </div>
      <div className="flex w-full justify-between mt-16">
        <div className=" max-w-[255px] h-[342px] bg-[#1A1A1A] rounded-lg p-[30px]  ">
          <img src={explore} alt="explore" />
          <div className="flex justify-between">
            <p className="text-white font-semibold">Action</p>

            <img src={rightPoint} alt="rightPoint" />
          </div>
        </div>
        <div className=" max-w-[255px] h-[342px] bg-[#1A1A1A] rounded-md p-[30px]  ">
          <img src={explore1} alt="explore" />
          <div className="flex justify-between">
            <p className="text-white font-semibold">Action</p>
            <button>
              <img src={rightPoint} alt="rightPoint" />
            </button>
          </div>
        </div>
        <div className=" max-w-[255px] h-[342px] bg-[#1A1A1A] rounded-md p-[30px]  ">
          <img src={explore2} alt="explore" />
          <div className="flex justify-between">
            <p className="text-white font-semibold">Action</p>
            <button>
              <img src={rightPoint} alt="rightPoint" />
            </button>
          </div>
        </div>
        <div className=" max-w-[255px] h-[342px] bg-[#1A1A1A] rounded-md p-[30px]  ">
          <img src={explore3} alt="explore" />
          <div className="flex justify-between">
            <p className="text-white font-semibold">Action</p>
            <button>
              <img src={rightPoint} alt="rightPoint" />
            </button>
          </div>
        </div>
        <div className=" max-w-[255px] h-[342px] bg-[#1A1A1A] rounded-md p-[30px]  ">
          <img src={explore4} alt="explore" />
          <div className="flex justify-between">
            <p className="text-white font-semibold">Action</p>
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
