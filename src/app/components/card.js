import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import localFont from "next/font/local";

export default function Card() {
  return (
    <div className="card-container ">
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
      <div className="text-container flex flex-col gap-2">
        <div>
          <h2 className="font-heading">Movie Title</h2>
        </div>
        <div className="flex items-center">
          <div className="flex gap-3">
            <div className="flex items-center justify-between gap-2 bg-[#c4f34e] py-[4px] px-[8px] rounded-md">
              <Image
                src="./icons/clock-regular.svg"
                alt="clock"
                width="14"
                height="14"
              />
              <p>2hr 45min</p>
            </div>
            <div className="flex items-center justify-between gap-2  bg-[#c2c1e6] py-[4px] px-[8px]  rounded-md">
              <Image
                src="./icons/star-regular.svg"
                alt="star"
                width="14"
                height="14"
              />
              <p>4.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
