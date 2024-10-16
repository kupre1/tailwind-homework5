import React from "react";
import { footerLinks } from "../constants/fotter";
const FotBar = () => {
  return (
    <>
      <footer className="h-[505px] flex justify-between  ">
        {footerLinks.map((nav) => (
          <>
            <div key={nav.id} className="max-w-[241px] flex-col  h-[204px] ">
              <h4 className="text-[20px] font-semibold text-white">
                {nav.title}
              </h4>
              {nav.links.map((link) => (
                <p key={link.name} className="text-secondery">
                  {link.name}
                </p>
              ))}
            </div>

            <div className="max-w-[241px] flex-col  h-[204px] ">
              <div></div>
            </div>
          </>
        ))}
      </footer>
    </>
  );
};

export default FotBar;
