"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/services/globalApi";
import Card from "../../components/cards/card";

export default function Movies({ params }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getPopMovies();
  }, []);

  const getPopMovies = () => {
    GlobalApi.getMoviesByType(params.type).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  return (
    <div className="gradient-purple flex flex-col">
      <div className="actor-hero w-fit flex items-center h-[500px] p-12">
        <h1 className="font-body text-black leading-tight text-center text-[56px] lg:text-[96px] font-regular py-6">
          Where every scene is a story, every frame an adventure!
        </h1>
      </div>
      <div className="flex w-screen h-fit flex-wrap p-10 pl-12 pb-20 gap-6 items-center justify-center ">
        {movieList.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
