"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/services/globalApi";
import Card from "../../components/cards/card";
import GenresList from "@/app/constants/GenresList";

export default function Movies({ params }) {
  const [movieList, setMovieList] = useState([]);
  const genreName = params.type.replace(/%20/g, " ")
  const genreId = GenresList.genere.find(
    (genre) => genre.name === genreName
  )?.id;
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
        <h1 className="font-body  text-white text-[62px] font-light py-6">
          It's time for some
          <p
            className={`${genreName} font-bod text-[110px] text-cente font-bold p-0 opacity-95`}
          >
            {genreName}!
          </p>
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
