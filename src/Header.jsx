import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MainHeader from "./MainHeader";

function Header() {
  const [movieData, setMovieData] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [IconsSearch, setIconsSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [randomBackdrop, setRandomBackdrop] = useState(null);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=3fb4c3ddfc88192745a5708f0de70cba&query=";
  const UPCOMING_API =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=3fb4c3ddfc88192745a5708f0de70cba&language=en-US&page=1";
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(UPCOMING_API);
        const result = await response.json();
        const validMovies = result.results.filter(
          (movie) => movie.backdrop_path
        );
        setMovieData(validMovies);

        if (validMovies.length > 0) {
          const randomIndex = Math.floor(Math.random() * validMovies.length);
          setRandomBackdrop(validMovies[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    }
    fetchMovies();
  }, []);

  const navigate = useNavigate();
  function handleShowImage(item) {
    navigate(`/movie/${item.id}`, { state: { item } });
  }

  const handleSearch = async () => {
    if (!IconsSearch.trim()) {
      alert("Please enter a valid search query!");
      return;
    }

    try {
      const response = await fetch(`${SEARCH_API}${IconsSearch}`);
      const result = await response.json();
      setSearchResults(result.results || []);
      setSearchItems("");
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  return (
    <div>
      {randomBackdrop && (
        <div
          className="w-full h-[100vh] bg-center bg-cover relative"
          style={{
            backgroundImage: `url(${IMAGE_BASE_URL}${randomBackdrop.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60 grid place-content-center">
            <h1 className="text-white text-4xl md:text-7xl font-extrabold text-center">
              Welcome.
            </h1>
            <p className="text-white text-lg md:text-2xl text-center my-4">
              Millions of movies, TV shows, and people to discover. Explore now.
            </p>
            <div className="flex justify-center mt-4">
              <input
                type="text"
                placeholder="Search for a movie..."
                value={searchItems}
                onChange={(e) => setSearchItems(e.target.value)}
                className="w-[250px] md:w-[650px] px-4 md:py-4 py-2 rounded-l-full bg-white"
              />
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-2 rounded-r-full hover:opacity-90"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
      <MainHeader setIconsSearch={setIconsSearch} handleSearch={handleSearch} />

      {searchResults.length > 0 && (
        <div className="">
          <h2 className="text-white text-2xl mb-4 text-center">
            Search Results
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {searchResults.map((movie) => (
              <div key={movie.id} className="text-white">
                {movie.poster_path ? (
                  <img
                    onClick={() => handleShowImage(movie)}
                    className="rounded-md mb-2 w-[200px] h-[100px] md:h-[300px] object-cover shadow-[0px_0px_10px_rgba(0,0,0,0.3)] cursor-pointer"
                    src={`${baseImageUrl}${movie.poster_path}`}
                    alt={movie.title || movie.name}
                  />
                ) : (
                  <div className="w-[200px] h-[300px] flex items-center justify-center bg-gray-700 rounded-xl">
                    <span>No Image</span>
                  </div>
                )}
                <p className="mt-2 text-center">{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
