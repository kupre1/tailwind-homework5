import React, { useState } from "react";
import { FAQLinks } from "../constants/FAQ";

const FAQBar = () => {
  const [activeId, setActiveId] = useState(null);
  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
    console.log(id);
  };

  return (
    <nav className="flex h-[576px] flex-col flex-wrap content-between">
      {FAQLinks.map((nav, index) => (
        <div
          key={index}
          className={`flex h-36 min-w-[620px] items-center justify-between ${
            index === 3 || index === 7 ? "" : "border-b border-red-600"
          }`}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#1F1F1F] text-xl font-semibold text-white">
            {nav.number}
          </div>
          <div>
            <p className="min-w-[470px] text-lg font-medium text-white">
              {nav.title}
            </p>
            <p
              className={`w-[430px] text-base font-normal text-secondery ${
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
