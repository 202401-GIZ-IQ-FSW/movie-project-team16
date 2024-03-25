import React from "react";
import Image from "next/image";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function ActorCard({ actor }) {
  return (
    <div className="card-container ">
      <div className="image-container">
        <Image
          src={actor.profile_path? IMAGE_BASE_URL + actor.profile_path : "/images/placeholderActor.webp"}
          alt="actor poster"
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
            { actor.name.length > 15
                ? actor.name.slice(0, 15) + "..."
                : actor.name
                }
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex gap-3">
            <div className="flex items-baseline justify-between gap-2  bg-[#c2c1e6] py-[4px] px-[8px]  rounded-md">
              <Image
                src="./icons/chalkboard-user-solid.svg"
                alt="star"
                width="14"
                height="14"
              />
              <p>{actor.character}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
