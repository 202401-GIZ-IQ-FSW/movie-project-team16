"use client";
import React, { useEffect, useRef, useState } from "react";

import Card from "./components/card";
import GlobalApi from "./services/globalApi";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getPopMovies();
  }, []);

  const getPopMovies = () => {
    GlobalApi.getTrendingVideos.then(resp=>{
      setMovieList(resp.data.results)
  })
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <>

      <Nav />
      {/* <div>test</div> */}
      <div className=" la flex justify-center items-center flex-wrap  h-screen">
        <div className=" mx-2">
          <Card />
        </div>
        <div className=" mx-2">
          <Card />
        </div>
        <div className=" mx-2">
          <Card />
        </div>
        <div className=" mx-2">
          <Card />
        </div>
        <div className=" mx-2">
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
}
