import React from "react";
import NavBar from "./components/NavBar";
import { play } from "./assets";

const Header = () => {
  return (
    <>
      <div className="bg-main">
        <div className="m-auto h-[860px] max-w-[1920px] bg-[url('../src/assets/SubContainer.png')] bg-center">
          <div className="W-full h-[200px] overflow-hidden">
            <div className="flex items-center justify-center px-6 sm:px-16">
              <div className="w-full max-w-[1480px]">
                <NavBar />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[-70px] flex w-full flex-col items-center">
          <div className="flex h-[296px] max-w-[1096px] flex-col items-center justify-center gap-[20px] text-center">
            <p className="text-[28px] font-bold text-white ss:text-[38px] md:text-[58px]">
              The Best Streaming Experience
            </p>
            <p className="text-[18px] font-normal text-[#999999] xs:hidden md:flex">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
            <p className="min-w-[290px] max-w-[700px] text-[18px] font-normal text-[#999999] md:hidden">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere.
            </p>

            <button className="flex h-12 w-[251px] items-center justify-center gap-[5px] rounded-[7px] bg-[#E50000] text-center text-[18px] font-semibold text-white">
              <img src={play} alt="play" /> Start Watching Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
