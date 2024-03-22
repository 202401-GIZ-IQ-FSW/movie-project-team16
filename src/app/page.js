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
   
      {/* <div>test</div> */}
      <div className="la">
      <h1 className="pl-20 pt-12 font-body text-[96px]">Latest Movies</h1>
      <div className="relative">
        <IoChevronBackOutline
          onClick={() => slideLeft(elementRef.current)}
          className="text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute top-1/2"
        />
        <div
         ref={elementRef}
          className=" la flex overflow-x-auto gap-4
         scrollbar-none scroll-smooth pt-4 px-20 pb-4"
        >
          {movieList.map((movie) => (
            <div>
              <Card movie={movie}/>
            </div>
          ))}
        </div>
        <IoChevronForwardOutline
          onClick={() => slideRight(elementRef.current)}
          className="text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 
            absolute right-0 top-1/2"
        />
      </div>
      </div>
    </>
  );
}
