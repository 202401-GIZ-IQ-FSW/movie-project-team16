"use client";
import React, { useEffect, useRef, useState } from "react";

import HomeSlider from "./components/home-slider";
import GlobalApi from "./services/globalApi";
import Hero from "./components/hero";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
 
  useEffect(() => {
    getPopMovies();
  }, []);

  const getPopMovies = () => {
    GlobalApi.getTrendingVideos.then(resp=>{
      setMovieList(resp.data.results)
  })
  };

  return (
    <>

      <Hero/>
      <HomeSlider movieList={movieList} title={"Latest Movies"} background={"gradient-blue"}/>
      {/* <div>test</div> */}
     
    </>
  );
}
