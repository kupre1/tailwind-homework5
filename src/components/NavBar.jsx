import { useState } from "react";
import { navLinks } from "../constants";
import { search, bell, burgerMenu } from "../assets";
import { logo } from "../assets";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="flex w-full items-center justify-between py-6">
        <img src={logo} alt="hoobank" className="h-[52px] w-[124px]" />

        <div className="flex h-12 w-12 items-center justify-center rounded-md border-[1px] border-[#262626] bg-[#1A1A1A] md:hidden">
          <img src={burgerMenu} alt="menu" />
        </div>

        <div className="flex h-[75px] w-[520px] items-center justify-center rounded-md border-2 border-[#2b2828] bg-black text-center xs:hidden md:flex">
          <ul className="flex flex-1 list-none items-center justify-center gap-10 text-white">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins cursor-pointer text-[16px] font-normal ${
                  active === nav.title ? "text-white" : "text-secondery"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-[30px] xs:hidden md:flex">
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
