"use client";
import React, {useEffect, useState} from "react";
import GlobalApi from "../services/globalApi";
import ActorCard from "../components/cards/actor-card";
import Link from "next/link";
function Actors() {

  const [actors, setActors] = useState([]);
 
  useEffect(() => {
    getPopMovies();
  }, []);

  const getPopMovies = () => {
    GlobalApi.getActors.then(resp=>{
      setActors(resp.data.results)
  })
  };
  return (
    <div className="bg-black">
      <div className="actor-hero  flex items-center h-[500px] p-12">
        <h1 className="font-body  text-white text-[62px] font-light py-10">
          Behold the{" "}
          <p className="font-bod text-[110px] text-cente font-bold p-0 text-[#8784e8] opacity-95">
            {" "}
            magic-makers
          </p>{" "}
          behind our adored characters!
        </h1>
      </div>{" "}
      <div className="flex w-screen h-fit flex-wrap p-10 pb-20 gap-6">{" "}
        {
          actors.map((actor)=>(
           
             <ActorCard actor={actor} key={actor.id}/>

          ))
        }
       
      </div>{" "}
    </div>
  );
}

export default Actors;
