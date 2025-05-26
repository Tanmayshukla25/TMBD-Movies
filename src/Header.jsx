import { useEffect, useState } from "react";
import { urls } from "./data";



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
    <div className="">
  

      {randomBackdrop && (
        
        <div
         className="w-full h-[50vh] md:h-[100vh] bg-center bg-no-repeat bg-cover  "
          style={{
            backgroundImage: `url(${baseImageUrl}${randomBackdrop.backdrop_path})`,
            
          }}
          
        >
         
         <div className="">
           <div className="grid place-content-center h-screen">
            <h1 className="text-white text-center text-3xl md:text-7xl font-extrabold">Welcome.</h1>
            <p className="text-white text-[12px] md:text-2xl m-2 md:m-5 text-center">Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className="flex items-center justify-center">
              <input type="text "className="bg-white w-[270px] md:w-[580px] rounded-l-[30px] px-[10px] py-[5px]  md:py-[18px] " placeholder="Search for a movie or tv Show...." />
            <button className="px-[20px] py-[5px] md:py-[18px] w-[100px] md:w-[150px] text-white rounded-r-[30px] bg-gradient-to-r from-orange-400 to-pink-600 shadow-md">Search</button>
        </div>
          </div>
         </div>
        </div>
      )}
    </div>
  );
}

export default Header;
