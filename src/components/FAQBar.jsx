import React, { useState } from "react";
import { FAQLinks } from "../constants/FAQ";

const FAQBar = () => {
  const [activeId, setActiveId] = useState(null);
  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <nav className="mt-10px flex w-full flex-col items-center lg:h-[576px] lg:flex-wrap">
      {FAQLinks.map((nav, index) => (
        <div
          key={nav.id}
          className={`kp:max-w-[620px] flex h-52 w-full max-w-[500px] items-center justify-between lg:h-36 ${
            index === 3 || index === 7 ? "" : "border-b border-red-600"
          }`}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#1F1F1F] text-xl font-semibold text-white">
            {nav.number}
          </div>
          <div className="w-full max-w-[460px]">
            <p className="text-[18px] font-medium text-white md:text-[20px]">
              {nav.title}
            </p>
            <p
              className={`text-14px w-full max-w-[430px] font-normal text-secondery md:text-[16px] ${
                activeId === nav.id ? "flex" : "hidden"
              }`}
            >
              {nav.content}
            </p>
          </div>
          <div>
            <button onClick={() => handleToggle(nav.id)}>
              <img
                src={nav.poto1}
                alt="plus"
                className={activeId === nav.id ? "hidden" : "block"}
              />
            </button>
            <button onClick={() => handleToggle(nav.id)}>
              <img
                src={nav.poto2}
                alt="minus"
                className={activeId === nav.id ? "block" : "hidden"}
              />
            </button>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default FAQBar;
