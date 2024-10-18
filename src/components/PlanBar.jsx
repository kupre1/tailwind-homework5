import react from "react";
import { planLinks } from "../constants/planContainer";
const PlanBar = () => {
  return (
    <>
      <nav className="mr-auto mt-20 flex w-full max-w-[1480px] flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        {planLinks.map((nav) => (
          <div
            key={nav.id}
            className="flex h-[425px] w-full max-w-[318px] flex-col justify-between rounded-md border-2 border-[#262626] bg-[#1F1F1F] p-8 md:max-w-[30%]"
          >
            <div className="md:[text-20px] mt-10 text-[18px] font-bold text-white">
              {nav.title}
            </div>
            <div className="text-14px font-normal text-secondery md:text-[16px]">
              {nav.content}
            </div>
            <div>
              <p className="text-4xl text-white">
                {nav.price}
                <span className="text-lg font-medium text-secondery">
                  {nav.month}
                </span>
              </p>
            </div>
            <div className="flex gap-3">
              <button className="h-[63px] w-48 rounded-md border-2 border-[#262626] bg-black text-lg font-semibold text-white">
                {nav.Trial}
              </button>
              <button className="h-[63px] w-48 rounded-md border-2 border-[#262626] bg-colorbutton text-lg font-semibold text-white">
                {nav.Choose}
              </button>
            </div>
          </div>
        ))}
      </nav>
    </>
  );
};

export default PlanBar;
