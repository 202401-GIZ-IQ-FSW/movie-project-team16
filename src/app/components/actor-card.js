import React from "react";
import Image from "next/image";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function ActorCard({ actor }) {
  return (
    <div className="actor-card flex">
      <div className="actor-card-container">
        <div className="image-container">
          <Image
            src="/images/keanureeves.webp"
            // src={IMAGE_BASE_URL + actor.profile_path}
            alt="actor poster"
            width="290"
            height="290"
          />
        </div>
        <div className="text-container flex justify-between gap-2">
          <div>
            <h2 className="font-heading">
              Keanu Reeves
              {/* {actor.name.length > 15
                ? actor.name.slice(0, 15) + "..."
                : actor.name} */}
            </h2>
          </div>
          <div className="flex items-center ">
            <div className="flex items-baseline justify-between gap-2  bg-[#c2c1e6] py-[4px] px-[8px]  rounded-md">
              <Image
                src="./icons/star-regular.svg"
                alt="star"
                width="14"
                height="14"
              />
              <p>4.5</p>
              {/* <p>{actor.character}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
