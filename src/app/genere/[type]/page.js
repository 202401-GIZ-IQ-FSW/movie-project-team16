"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/services/globalApi";
import Card from "../../components/cards/card";
import GenresList from "@/app/constants/GenresList";

export default function Movies({ params }) {
  const [movieList, setMovieList] = useState([]);
  const genreId = GenresList.genere.find(
    (genre) => genre.name === params.type
  )?.id;
  console.log(genreId);
  useEffect(() => {
    getPopMovies();
  }, []);

  const getPopMovies = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  return (
    <div className="bg-black">
      <div className="actor-hero  flex items-center h-[400px] px-12 py-6">
        <h1 className="font-body  text-white text-[38px] lg:text-[62px] font-light py-6">
          It's time for some
          <p
            className={`${params.type} font-bod text-[56px] lg:text-[110px] text-cente font-bold p-0 opacity-95`}
          >
            {params.type}!
          </p>
        </h1>
      </div>
      <div className="flex w-screen h-fit flex-wrap p-10 justify-center pb-20 gap-6">
        {movieList.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
