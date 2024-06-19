"use client";
import { useState, useEffect } from "react";
import globalApi from "../../services/globalApi";
import Card from "@/app/components/cards/card";

export default function Page({ params }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    onSearch(params.term);
  }, []);

  const onSearch = (term) => {
    globalApi.searchMoviesByName(term).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  return (
    <div className="bg-black">
      <div className="actor-hero  flex items-center h-[500px] p-12">
        <h1 className="font-body  text-white text-[62px] font-light py-10">
          You used the
          <p className="font-bod text-[110px] text-cente font-bold p-0 text-[#8784e8] opacity-95">
            Search Bar
          </p>
          And this is what you get
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
