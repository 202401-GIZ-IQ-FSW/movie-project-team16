import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "flowbite-react";

function SingleMovie(movie) {
  return (
    <div className="relative">
      <div className="gradient-overlay flex absolute  w-full h-full opacity-70">
        {" "}
      </div>

      <div className="background-image flex absolute inset-0">
        <Image
          src="/images/bradpitt.jpg"
          alt="movie background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="body relative gap-12 p-12">
        <div className="movie-details p-12 flex gap-12">
          <div className="movie-image  z-3">
            <Image
              className="rounded-lg flex"
              src="/images/d5NXSklXo0qyIYkgV94XAgMIckC.webp"
              alt="movie poster"
              width="320"
              height="320"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="movie-title font-medium font-heading text-white text-3xl md:text-5xl">
              Dune
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
                <p className="text-white text-[32px]">4.5</p>
              </div>
              <p className="text-sm text-gray-400">2,293,312 ratings</p>
            </div>

            <div className="toasts flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-2 bg-[#c2c1e6]  w-fit px-2 py-1 md:px-4 md:py-2 rounded-md">
                <Image
                  src="./icons/calendar-regular.svg"
                  alt="calendar"
                  width="14"
                  height="14"
                />
                <p className="release-date font-heading text-sm font-light">
                  22.03.2024
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#d0ec2f] px-2 py-1  w-fit md:px-4 md:py-2 rounded-md">
                <Image
                  src="./icons/clock-regular.svg"
                  alt="clock"
                  width="14"
                  height="14"
                />
                <p className="release-date font-heading text-sm font-light">
                  2hr 45min
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#caeeff]  w-fit px-2 py-1 md:px-4 md:py-2 rounded-md">
              <Image
                src="./icons/language-solid.svg"
                alt="calendar"
                width="20"
                height="14"
              />
              <p className="release-date font-heading text-sm font-light">
                English, German, French, Arabic
              </p>
            </div>
            <p className="movie-description text-white font-body font-light text-sm md:text-md max-w-md">
              lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum
              lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum
              lorem impsum lorem impsum lorem impsum lorem impsum
            </p>
            <p className="director-name text-gray-300 font-heading font-light text-sm md:text-md max-w-md">
              Director: Christopher Nolan
            </p>
            <div className="production-company items-center flex-col gap-12 mt-2">
              {" "}
              <div className="flex items-center mb-4 gap-6">
                <Image
                  // className="rounded-md"
                  src="/images/20th-Century-Studios.png"
                  alt="calendar"
                  width="32"
                  height="14"
                />
                <p className="producer-name text-gray-300 font-heading font-light text-sm md:text-md max-w-md">
                  Paramount Pictures
                </p>
              </div>
              <Button className="trailer-button flex w-[200px]">
                Watch Trailer
              </Button>
            </div>
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
