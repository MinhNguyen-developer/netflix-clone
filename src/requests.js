/** @format */

const API_KEY = "cae0fd0c655835b18622dd42558d6ed9";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&with_genres=28`,
  fetchActionMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/movie/top_rated?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
