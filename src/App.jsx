import { useState } from "react";
import "../src/input.css";
import Header from "./Header";
import Fotter from "./Fotter";
import Explore from "./Explore";
import VariousDevices from "./VariousDevices";
import FAQsection from "./FAQsection";
import PlanContainer from "./PlanContainer";
import FreeTrial from "./FreeTrial";

function App() {
  return (
    <>
      <Header />
      <Explore />
      <VariousDevices />
      <FAQsection />
      <PlanContainer />
      <FreeTrial />
      <Fotter />
    </>
  );
}

export default App;
