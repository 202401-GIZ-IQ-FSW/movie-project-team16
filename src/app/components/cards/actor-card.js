import React from "react";
import Image from "next/image";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import Link from "next/link";
export default function ActorCard({ actor }) {
  return (
    <Link href={`/actors/${actor.id}`} >
    <div className="actor-card flex">
      <div className="actor-card-container relative ">
        <div>
          <div className="image-container">
            <Image
              // src="/images/keanureeves.webp"
              src={IMAGE_BASE_URL + actor.profile_path}
              alt="actor poster"
              width="290"
              height="290"
            />
          </div>
          <div className="text-container flex justify-between gap-2 flex-col">
            <div>
              <h2 className="font-heading whitespace-nowrap mt-2">
                {actor.name?.length > 15
                  ? actor.name.slice(0, 15) + "..."
                  : actor.name}
              </h2>
            </div>
            <div className="flex items-center ">
              <div className="flex items-baseline justify-between gap-2  bg-[#c2c1e6] py-[4px] px-[8px]  rounded-md">
                <Image
                  src="./../icons/star-regular.svg"
                  alt="star"
                  width="10"
                  height="10"
                />
                <p>{actor.popularity}</p>
                {/* <p>{actor.character}</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden-content absolute">
          <div className="toasts flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-2 bg-[#d0ec2f] px-2 py-1  w-fit md:px-4 md:py-2 rounded-md">
              <Image
                src="./../icons/venus-mars-solid.svg"
                alt="gender"
                width="10"
                height="10"
              />
              <p className="release-date font-heading text-sm font-light">
                {actor.gender === 1 ? "Female" : "Male"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2  w-fit mt-2 px-2 py-1 md:px-4 md:py-2 rounded-md">
            <Image
              src="./../icons/location-dot-solid.svg"
              alt="calendar"
              width="10"
              height="10"
            />
            <p className="release-date font-heading text-sm font-light whitespace-nowrap ">
              {actor.place_of_birth}
            </p>
          </div>
          <h1 className=" font-bold text-lg"> Known for</h1>
          <div className="w-fit">
            {actor.known_for.slice(0, 2).map((movie) => (
              <div className="bg-white p-2  mb-2 " key={movie.id}>
                <h1 className=" font-bold">
                  
                  {movie.original_title
                    ? movie.original_title.length > 15
                      ? movie.original_title.slice(0, 15) + "..."
                      : movie.original_title
                    : movie.original_name > 15
                    ? movie.original_name.slice(0, 15)
                    : movie.original_name}
                </h1>
                <p className="movie-description mt-1font-body font-light text-sm md:text-md h-fit">
                  {movie.overview.length > 200? movie.overview.slice(0,200) + "..." : movie.overview}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
