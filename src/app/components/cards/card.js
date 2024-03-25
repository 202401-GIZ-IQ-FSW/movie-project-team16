import React from "react";
import Image from "next/image";
import Link from "next/link";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


export default function({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`} >
    <div className="card-container ">
      <div className="image-container">
        <Image
          src={IMAGE_BASE_URL + movie.poster_path}
          alt="movie poster"
          width="290"
          height="290"
        />
        <div className="overlay">
          {/* <img src="./images/icon-view.svg" alt="view" /> */}
        </div>
      </div>
      <div className="text-container flex flex-col gap-2">
        <div>
          <h2 className="font-heading whitespace-nowrap">
            {movie.original_title
              ? movie.original_title.length > 15
                ? movie.original_title.slice(0, 15) + "..."
                : movie.original_title
              : movie.original_name > 15
              ? movie.original_name.slice(0, 15)
              : movie.original_name}
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex gap-3">
            <div className="flex items-center justify-between gap-2 bg-[#c4f34e] py-[4px] px-[8px] rounded-md">
              <Image
                src="./../icons/calendar-regular.svg"
                alt="calendar"
                width="14"
                height="14"
              />
              <p>{movie.release_date}</p>
            </div>
            <div className="flex items-center justify-between gap-2  bg-[#c2c1e6] py-[4px] px-[8px]  rounded-md">
              <Image
                src="./../icons/star-regular.svg"
                alt="star"
                width="14"
                height="14"
              />
              <p>{movie.vote_average}</p>
            </div>

         
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
