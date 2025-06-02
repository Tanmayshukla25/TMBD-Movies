import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = "3fb4c3ddfc88192745a5708f0de70cba";
const BASE_URL = "https://api.themoviedb.org/3/tv/popular";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const SearchTvShows = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); 

  const navigate = useNavigate();

  const fetchMovies = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&page=${pageNumber}`);
      const data = await response.json();
      setMovies((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const handleShowImage = (item) => {
    navigate(`/movie/${item.id}`, { state: { item } });
  };

  return (
    <div className="p-4 mt-[80px]">
      <div className="flex flex-wrap items-center justify-center gap-10">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="text-white shadow-md h-[380px] rounded w-[250px] overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE}${movie.poster_path}`}
                alt={movie.title || movie.name}
                onClick={() => handleShowImage(movie)}
                className="w-[250px] h-[300px] rounded object-cover cursor-pointer"
              />
            ) : (
              <div className="h-[400px] flex items-center justify-center bg-gray-200 text-gray-600">
                No Image Available
              </div>
            )}
            <h3 className="font-semibold text-[14px] md:text-lg text-center mt-2 px-2">
              {movie.title || movie.name}
            </h3>
          </div>
        ))}
      </div>
      {loading && (
        <div className="text-center mt-4">
          <span className="text-white text-2xl">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default SearchTvShows;
