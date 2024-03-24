"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/services/globalApi";
import Card from "../../components/cards/card";

export default function Movies({ params }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    console.log(params.type);
    getPopMovies();
  }, []);

  const getPopMovies = () => {
    GlobalApi.getMoviesByType(params.type).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  return (
    <div className="bg-black">
      <div className="actor-hero  flex items-center h-[500px] p-12">
        <h1 className="font-body  text-white text-[62px] font-light py-10">
          Behold the
          <p className="font-bod text-[110px] text-cente font-bold p-0 text-[#8784e8] opacity-95">
            magic-makers
          </p>
          behind our adored characters!
        </h1>
      </div>
      <div className="flex w-screen h-fit flex-wrap p-10 pb-20 gap-6">
        {movieList.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
