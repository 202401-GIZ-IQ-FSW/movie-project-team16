"use client";
import React, { useEffect, useRef, useState } from "react";

import HomeSlider from "./components/slider/home-slider";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSlider
        type={"top_rated"}
        title={"Top Rated"}
        background={"gradient-blue pb-12"}
      />
      <HomeSlider
        type={"popular"}
        title={"Popular"}
        textBackground={"text-white"}
        background={"pb-12"}
      />
      <HomeSlider
        type={"now_playing"}
        title={"Now Playing"}
        textBackground={"text-white"}
        background={"pb-12"}
      />
      <HomeSlider
        type={"upcoming"}
        title={"Upcoming"}
        textBackground={"text-white"}
        background={"bg-black pb-12"}
      />
      {/* <div>test</div> */}
    </>
  );
}
