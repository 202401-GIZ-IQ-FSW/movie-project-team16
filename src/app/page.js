"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";
import GlobalApi from "./services/globalApi";
import PopularMovieList from "./components/popularMovieList";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getPopMovies();
  }, []);

  const getPopMovies = () => {
    GlobalApi.getTrendingVideos.then(resp=>{
      console.log(resp.data.results);
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
      <div className="relative">
        <IoChevronBackOutline
          onClick={() => slideLeft(elementRef.current)}
          className="text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute"
        />
        <div
          className=" la flex overflow-x-auto gap-8
         scrollbar-none scroll-smooth pt-4 px-3 pb-4"
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
           p-2 cursor-pointer z-10 top-0
            absolute right-0"
        />
      </div>
      <PopularMovieList/>
      <Footer />
      <div className="blob"></div>
      <div className="blob1"></div>
    </>
  );
}
