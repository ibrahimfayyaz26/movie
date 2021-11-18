import axios from 'axios';

const url = "https://api.themoviedb.org/3";
const key = "d8d293e2494faf7063c034a04330cacb";

// Popular Movies
export const popularMovies = async () => {
  const res = await axios.get(`${url}/movie/popular?api_key=${key}`)
  return res.data.results
}

// Upcoming Movies
export const upcomingMovies = async () => {
    const res = await axios.get(`${url}/movie/upcoming?api_key=${key}`)
    return res.data.results
}

// Popular Tv
export const popularTv = async () => {
    const res = await axios.get(`${url}/tv/popular?api_key=${key}`)
    return res.data.results
  }