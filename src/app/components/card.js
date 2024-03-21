import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";

export default function Card() {
  return (
    <div className="card-container bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 ">
      <div className="image-container">
        <Image
          src="/image-equilibrium.jpg"
          alt="cube image"
          width="290"
          height="290"
        />
        {/* <div className="overlay">
          <img src="./images/icon-view.svg" alt="view" />
        </div> */}
      </div>
      <div className="px-5">
        <h2 className="text-xl">Equilibrium #3429</h2>
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
