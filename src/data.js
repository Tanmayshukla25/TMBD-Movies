const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "e951cf8f86b17a2c5ce148dcdbb62020";

export const urls = {
   upcoming :`${BASE_URL}movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`,

  trendingByDay: `${BASE_URL}trending/movie/day?language=en-US&api_key=${API_KEY}`,
  trendingByWeek: `${BASE_URL}trending/movie/week?language=en-US&api_key=${API_KEY}`,
  popularMovies: `${BASE_URL}movie/popular?language=en-US&api_key=${API_KEY}`,
  popularTVShows: `${BASE_URL}tv/popular?language=en-US&api_key=${API_KEY}`,
  topRatedMovies: `${BASE_URL}movie/top_rated?language=en-US&api_key=${API_KEY}`,
  topRatedTVShows: `${BASE_URL}tv/top_rated?language=en-US&api_key=${API_KEY}`,
};
