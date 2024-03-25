"use client";
import React, { useEffect, useRef, useState } from "react";

import HomeSlider from "./components/home-slider";
import Hero from "./components/hero";

export default function Home() {
 

  return (
    <>

      <Hero/>
      <HomeSlider type={"top_rated"} title={"Top Rated"} background={"gradient-blue"}/>
      <HomeSlider type={"popular"} title={"Popular"} background={"gradient-blue"}/>
      <HomeSlider type={"now_playing"} title={"Now Playing"} background={"gradient-blue"}/>
      <HomeSlider type={"upcoming"} title={"Upcoming"} background={"gradient-blue"}/>
      {/* <div>test</div> */}
     
    </>
  );
}
