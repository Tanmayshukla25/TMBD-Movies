import { useEffect, useState } from "react";
import { urls } from "./data";
import { IoSearchSharp } from "react-icons/io5";
import moviesLogo from "./images/movix-logo.svg";

function Header() {
  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  const [randomBackdrop, setRandomBackdrop] = useState(null);

  useEffect(() => {
    backdrop();
  }, []);

  async function backdrop() {
    try {
      const response = await fetch(urls.upcoming);
      const result = await response.json();

      if (result.results && result.results.length > 0) {
        const backDropMovies = result.results.filter(
          (item) => item.backdrop_path
        );
        const randomIndex = Math.floor(Math.random() * backDropMovies.length);
        setRandomBackdrop(backDropMovies[randomIndex]);
        
        
      } else {
        console.error("No valid movies with backdrops.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  return (
    <div className="relative">
      <header className="flex flex-wrap items-center z-10  bg-cyan-950/80 p-2 text-xl justify-around gap-[10%] text-white fixed top-0 right-0 left-0">
        <div >
          <img src={moviesLogo} alt="MoviesLogo" className="w-[180px]"/>
        </div>

        <div className="flex flex-wrap items-center justify-around gap-10">
          <div className="flex flex-wrap items-center justify-around gap-10">
            <button className="hover:text-pink-800">Movies</button>
            <button className="hover:text-pink-800">TV Shows</button>
          </div>

          <span className="hover:text-pink-800">
            <IoSearchSharp />
          </span>
        </div>
      </header>

      {randomBackdrop && (
        
        <div
         className="w-full h-[100vh] bg-center bg-no-repeat bg-cover  "
          style={{
            backgroundImage: `url(${baseImageUrl}${randomBackdrop.backdrop_path})`,
            
          }}
          
        >
         
         <div className="absolute top-[35%] left-[28%]">
           <div >
            <h1 className="text-white text-center text-7xl font-extrabold">Welcome.</h1>
            <p className="text-white text-2xl m-5">Millions of movies, TV shows and people to discover. Explore now.</p>
            <input type="text "className="bg-white w-[580px] rounded-l-[30px] px-[20px] py-[18px]" placeholder="Search for a movie or tv Show...." />
            <button className="px-[20px] py-[18px] w-[150px] text-white rounded-r-[30px] bg-gradient-to-r from-orange-400 to-pink-600 shadow-md">Search</button>
          </div>
         </div>
        </div>
      )}
    </div>
  );
}

export default Header;
