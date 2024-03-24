import axios from "axios";


const movieBaseUrl = "https://api.themoviedb.org/3";
const actorBaseUrl = "https://api.themoviedb.org/3";
const api_key = "2ec0d66f5bdf1dd12eefa0723f1479cf";


const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

const getSingleMovie = (id) =>axios.get(`${movieBaseUrl}/movie/${id}?api_key=${api_key}`);
const getMovieCredits = (id) =>axios.get(`${movieBaseUrl}/movie/${id}/credits?api_key=${api_key}`);
const getMovieRecommendations = (id) =>axios.get(`${movieBaseUrl}/movie/${id}/recommendations?api_key=${api_key}`)
const getMoviesByType = (type) => axios.get(`${movieBaseUrl}/movie/${type}?api_key=${api_key}`)

const getActor = (id)=> axios.get(`${actorBaseUrl}/person/${id}?api_key=${api_key}`)
const getActors = axios.get(`${actorBaseUrl}/person/popular?api_key=${api_key}`)

export default{
    getTrendingVideos,
    getMovieByGenreId,
    getSingleMovie,
    getMovieCredits,
    getMovieRecommendations,
    getMoviesByType,
    getActor,
    getActors
}