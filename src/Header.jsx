import React from "react";
import NavBar from "./components/NavBar";
import { play } from "./assets";

const Header = () => {
  return (
    <>
      <div className="  bg-main  ">
        <div className="bg-[url('../src/assets/SubContainer.png')]  m-auto bg-center h-[860px]  max-w-[1920px]">
          <div className="W-full overflow-hidden h-[200px] ">
            <div className="flex items-center justify-center px-6 sm:px-16">
              <div className="max-w-[1480px] w-full">
                <NavBar />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  flex items-center mt-[-70px] flex-col ">
          <div className="max-w-[1096px]  h-[296px] gap-[20px] flex items-center flex-col text-center justify-center ">
            <p className="text-white text-[58px] font-bold">
              The Best Streaming Experience
            </p>
            <p className="text-[#999999] text-[18px] font-normal ">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>

            <button className="text-white  w-[251px] h-12 bg-[#E50000] rounded-[7px] text-[18px] flex text-center items-center justify-center gap-[5px] font-semibold">
              <img src={play} alt="play" /> Start Watching Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
