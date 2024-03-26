"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "flowbite-react";
import GlobalApi from "../../services/globalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function SingleMovie({ params }) {
  const [actor, setActor] = useState([]);
  useEffect(() => {
    
    const getActor = () => {
      GlobalApi.getActor(params.id).then((res) => {
        setActor(res.data);
      });
    };

    getActor();
  }, []);
  return (
    <div className="relative bg-slate-100">
      <div className="body relative gap-12 p-12">
        <div className="movie-details p-12 flex gap-12">
          <div className="movie-image  z-3">
            <Image
              className="rounded-lg flex"
              src={IMAGE_BASE_URL + actor.profile_path}
              alt="movie poster"
              width="320"
              height="320"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h1 className="movie-title font-medium font-heading  text-3xl md:text-5xl">
              {actor.name}
            </h1>

            <div className="flex flex-col">
              {" "}
              <div className="movie-rating flex items-center gap-2">
                <Image
                  src="./icons/star-solid.svg"
                  alt="star"
                  width="32"
                  height="32"
                />
                <p className=" text-[32px]">{actor.popularity}</p>
              </div>
            </div>

            <div className="toasts flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-2 bg-[#c2c1e6]  w-fit px-2 py-1 md:px-4 md:py-2 rounded-md">
                <Image
                  src="./icons/cake-candles-solid.svg"
                  alt="calendar"
                  width="14"
                  height="14"
                />
                <p className="release-date font-heading text-sm font-light">
                  {actor.birthday}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#d0ec2f] px-2 py-1  w-fit md:px-4 md:py-2 rounded-md">
                <Image
                  src="./icons/venus-mars-solid.svg"
                  alt="clock"
                  width="14"
                  height="14"
                />
                <p className="release-date font-heading text-sm font-light">
                  {actor.gender === 1 ? "Female" : "Male"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#caeeff]  w-fit px-2 py-1 md:px-4 md:py-2 rounded-md">
              <Image
                src="./icons/location-dot-solid.svg"
                alt="calendar"
                width="20"
                height="14"
              />
              <p className="release-date font-heading text-sm font-light">
                {actor.place_of_birth}
              </p>
            </div>
            <p className="movie-description  font-body fon{actor.popularity}ight text-sm md:text-md w-full">
              {actor.biography}
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex w-[1300px] mx-24">
        <Image
          className="rounded-lg"
          src="/images/2.webp"
          alt="calendar"
          width="1300"
          height="1300"
        />
      </div> */}
    </div>
  );
}

export default SingleMovie;
