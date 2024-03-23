import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const actorBaseUrl="https://api.themoviedb.org/3"
const api_key='2ec0d66f5bdf1dd12eefa0723f1479cf'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

const getSingleMovie = axios.get(movieBaseUrl + "/movie/550?api_key="+api_key);
const getMovieCredits = axios.get(movieBaseUrl + "/movie/550/credits?api_key=" + api_key);
const getMovieRecommendations = axios.get(movieBaseUrl + "/movie/550/recommendations?api_key=" + api_key)

const getActor = axios.get(actorBaseUrl  + "/person/287?api_key=" + api_key)

export default{
    getTrendingVideos,
    getMovieByGenreId,
    getSingleMovie,
    getMovieCredits,
    getMovieRecommendations,
    getActor
}