import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";


const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
export default function Card({movie}) {
  console.log(movie)
  return (
    <div className="card-container bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 ">
      <div className="image-container">
        <Image
          src={IMAGE_BASE_URL+movie.poster_path} 
          alt="cube image"
          width="290"
          height="290"
        />
      </div>
      <div className="px-5">
        <h2 className="text-xl">{movie.original_title}</h2>
        <p className="text-s">Sci-Fi.Action.Drama</p>
        <div class="my-2 select-none flex">
          <button className=" px-4 shadow-md no-underline rounded-full bg-slate-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">
            PG-13
          </button>
          <button className=" px-4 shadow-md no-underline rounded-full bg-slate-600 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2">
            Alert
          </button>
          <button className=" px-4 shadow-md no-underline rounded-full bg-slate-600 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
