import react, { useState } from "react";
import PlanBar from "./components/PlanBar";

const PlanContainer = () => {
  const [activeTab, setActiveTab] = useState(false);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-main">
      <div className="W-full">
        <div className="flex items-center justify-center px-6">
          <div className="mx-[50px] mt-36 flex w-full flex-col xl:max-w-[1480px]">
            <div className="flex w-full flex-row items-end justify-between">
              <div className="h-24">
                <p className="text-3xl font-bold leading-[57px] text-white">
                  Choose the plan that's right for you
                </p>
                <p className="text-base font-normal leading-7 text-secondery">
                  Join StreamVibe and select from our flexible subscription
                  options tailored to suit your viewing preferences. Get ready
                  for non-stop entertainment!
                </p>
              </div>
              <ul className="flex h-[61px] w-48 flex-row items-center justify-center gap-5 rounded-md bg-[#1F1F1F]">
                <li
                  className={`flex h-10 w-[70px] cursor-pointer items-center justify-center rounded-md text-sm font-medium text-white ${
                    activeTab === "monthly" ? "bg-black" : "bg-transparent"
                  }`}
                  onClick={() => handleClick("monthly")}
                >
                  Monthly
                </li>
                <li
                  className={`flex h-10 w-[70px] cursor-pointer items-center justify-center rounded-md text-sm font-medium text-white ${
                    activeTab === "yearly" ? "bg-black" : "bg-transparent"
                  }`}
                  onClick={() => handleClick("yearly")}
                >
                  Yearly
                </li>
              </ul>
            </div>
            <div>
              <PlanBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanContainer;
