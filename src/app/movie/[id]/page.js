"use client";
import React, {useState, useEffect, useRef} from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import GlobalApi from "../../services/globalApi"
import ActorCard from "../../components/cards/movie-actors-card";
import HomeSlider from "../../components/home-slider";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function getDuration(durationInMinutes) {
  var hours = Math.floor(durationInMinutes / 60);
  var minutes = durationInMinutes % 60;
  
  return hours + "h " + minutes + "m";
}
function SingleMovie({params}) {  
  const elementRef = useRef(null);
  const [movie, setMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  const [director, setDirector] = useState([]);
  const [recommendations, setRecommendations] = useState([])


  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = () => {
    GlobalApi.getSingleMovie(params.id).then(resp=>{
      setMovie(resp.data)
      console.log(resp.data)
  })
  GlobalApi.getMovieCredits(params.id).then(resp=>{
    setCredits(resp.data.cast)
    setDirector(resp.data.crew.filter(({job})=> job ==='Director')[0].name)

})

GlobalApi.getMovieRecommendations(params.id).then(resp=>{
  setRecommendations(resp.data.results)
})
  };
  return (
    <>
    <div className="relative">
      <div className="gradient-overlay flex absolute  w-full h-full opacity-70">
        {""}
      </div>

      <div className="background-image flex absolute inset-0">
        <Image
          src={IMAGE_BASE_URL + movie.backdrop_path}
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
              src={IMAGE_BASE_URL + movie.poster_path}
              alt="movie poster"
              width="320"
              height="320"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="movie-title font-medium font-heading text-white text-3xl md:text-5xl">
              {movie.original_title? movie.original_title : movie.original_name}
            </h1>

            <div className="flex flex-col">
              {" "}
              <div className="movie-rating flex items-center gap-2">
                <Image
                  src="./../icons/star-solid.svg"
                  alt="star"
                  width="32"
                  height="32"
                />
                <p className="text-white text-[32px]">{movie.vote_average}</p>
              </div>
              <p className="text-sm text-gray-400"> {movie.vote_count} ratings</p>
            </div>

            <div className="toasts flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-2 bg-[#c2c1e6]  w-fit px-2 py-1 md:px-4 md:py-2 rounded-md">
                <Image
                  src="./../icons/calendar-regular.svg"
                  alt="calendar"
                  width="14"
                  height="14"
                />
                <p className="release-date font-heading text-sm font-light">
                  {movie.release_date}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#d0ec2f] px-2 py-1  w-fit md:px-4 md:py-2 rounded-md">
                <Image
                  src="./../icons/clock-regular.svg"
                  alt="clock"
                  width="14"
                  height="14"
                />
                <p className="release-date font-heading text-sm font-light">
                  {getDuration(movie.runtime)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#caeeff]  w-fit px-2 py-1 md:px-4 md:py-2 rounded-md">
              <Image
                src="./../icons/language-solid.svg"
                alt="calendar"
                width="20"
                height="14"
              />
              <p className="release-date font-heading text-sm font-light">
                {movie.original_language}
              </p>
            </div>
            <p className="movie-description text-white font-body font-light text-sm md:text-md max-w-md">
              {movie.overview}
            </p>
            <p className="director-name text-gray-300 font-heading font-light text-sm md:text-md max-w-md">
              Director: {director}
            </p>
            <h1 className="text-white font-semibold  mt-2">Production Compaines</h1>
            <div className="items-center flex  flex-wrap gap-4">
              {/* {movie.production_companies[0]} */}
              {movie.production_companies?.map((production)=>(
                <div key={production.id} className="flex items-center mb-4 gap-6">
                    <Image
                    key={production.id}
                  // className="rounded-md"
                  src={IMAGE_BASE_URL + production.logo_path}
                  alt="calendar"
                  width="32"
                  height="14"
                />
                <p className="producer-name text-gray-300 font-heading font-light text-sm md:text-md max-w-md">
                 {production.name}
                </p>
                
              </div>
              ))}
            
            </div>
            <Button className="trailer-button flex w-[200px]">
                Watch Trailer
              </Button>
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
    <div className="gradient-blue pb-20">
    <h1 className="pl-20 pt-12 font-body text-[96px] ">Credits</h1>
      <div className="relative">
        <IoChevronBackOutline
          onClick={() => slideLeft(elementRef.current)}
          className="text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute top-1/2"
        />
        <div
         ref={elementRef}
          className=" la flex overflow-x-auto gap-4
         scrollbar-none scroll-smooth pt-4 px-20 pb-4"
        >
          {credits.map((actor) => (
            <div>
              <ActorCard key={actor.id} actor={actor}/>
            </div>
          ))}
        </div>
        <IoChevronForwardOutline
          onClick={() => slideRight(elementRef.current)}
          className="text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 
            absolute right-0 top-1/2"
        />
      </div>

      <HomeSlider title="Watch next" movieList={recommendations} background="" textBackground=""/>
      </div>
    </>
  );
}

export default SingleMovie;
