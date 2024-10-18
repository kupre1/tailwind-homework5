import React from "react";
import { footerLinks } from "../constants/fotter";
import { socialMedia } from "../constants/fotter";
const FotBar = () => {
  return (
    <div className="flex w-full max-w-[1480px]">
      <footer className="flex flex-[6] flex-wrap justify-between gap-3 md:h-[204px] md:gap-0">
        {footerLinks.map((nav) => (
          <>
            <div
              key={nav.id}
              className="flex w-full max-w-[150px] flex-col gap-2 md:h-[204px]"
            >
              <h4 className="text-[20px] font-semibold text-white">
                {nav.title}
              </h4>
              {nav.links.map((link) => (
                <p key={link.name} className="text-secondery">
                  {link.name}
                </p>
              ))}
            </div>
          </>
        ))}
      </footer>
      <div className="flex flex-1 justify-end">
        {socialMedia.map((nav) => (
          <div key={nav.id}>
            <p className="text-[20px] font-semibold text-white">{nav.title}</p>

            <div className="flex items-center justify-between">
              {nav.links.map((link) => (
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-lg border-[1px] border-[#262626] bg-[#1A1A1A]">
                  <img
                    key={link.icon}
                    src={link.icon}
                    alt="icon"
                    className="flex h-6 w-6 items-center justify-center"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FotBar;
