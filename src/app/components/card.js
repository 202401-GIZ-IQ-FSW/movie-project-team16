import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";

export default function Card() {
  return (
    <div className="card-container bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 ">
      <div className="image-container">
        <Image
          src="/images/d5NXSklXo0qyIYkgV94XAgMIckC.webp"
          alt="movie poster"
          width="290"
          height="290"
        />
        <div className="overlay">
          {/* <img src="./images/icon-view.svg" alt="view" /> */}
        </div>
      </div>
      <div className="text-container">
        <h2 className=" text-2xl">Movie Title</h2>
        <div className="small-container flex justify-between">
          <div className="flex items-center justify-between gap-2">
            <Image
              src="./icons/clock-regular.svg"
              alt="clock"
              width="20"
              height="20"
            />
            <p>2hr 45min</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Image
              src="./icons/star-regular.svg"
              alt="star"
              width="20"
              height="20"
            />
            <p>4.5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
