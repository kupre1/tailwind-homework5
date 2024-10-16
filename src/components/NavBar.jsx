import { useState } from "react";
import { navLinks } from "../constants";
import { logo, search, bell } from "../assets";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between w-full py-6">
        <img src={logo} alt="hoobank" className="h-[52px] w-[124px]" />

        <div className="w-[520px]  h-[75px] flex items-center justify-center text-center  rounded-md border-2 border-[#2b2828] bg-black">
          <ul className="items-center justify-center flex-1  list-none text-white flex  gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-poppins text-[16px] font-normal ${
                  active === nav.title ? "text-white" : "text-secondery"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5px">
          <button>
            <img src={search} alt="search" />
          </button>
          <button>
            <img src={bell} alt="bell" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
