import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Row({ urls, heading, btn1, btn2 }) {
  const [movieData, setMovieData] = useState([]);
  const [showData, setShowData] = useState(urls[0]);
  const [activeBtn, setActiveBtn] = useState(0);
  
 
  
  const navigate = useNavigate();

  const baseImageUrl = "https://image.tmdb.org/t/p/original";

 function handleShowImage(item) {
  navigate(`/movie/${item.id}`, { state: { item } });
}


  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(showData);
        const result = await response.json();
        setMovieData(result.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, [showData]);

  const handleClick = (index) => {
    setActiveBtn(index);
    setShowData(urls[index]);
  };

  function trimContent(content) {
    return content.length > 20 ? content.slice(0, 20) + "..." : content;
  }

  return (
    <section className="px-3 md:px-8 mt-10 mb-10">
      <header className="flex justify-between items-center my-2">
        <h2 className="text-xl text-white font-bold mb-2">{heading}</h2>
        <div className="bg-white  rounded-4xl py-1 px-1 md:px-3">
          <button
            className={` rounded cursor-pointer mr-2  ${
              activeBtn === 0
                ? "bg-gradient-to-r from-orange-400 to-pink-600 shadow-md rounded-4xl px-1 md:px-4 text-white "
                : " "
            }`}
            onClick={() => handleClick(0)}
          >
            {btn1}
          </button>
          <button
            className={` rounded cursor-pointer  ${
              activeBtn === 1
                ? "bg-gradient-to-r from-orange-400 to-pink-600 shadow-md rounded-4xl px-1 md:px-4 text-white"
                : " "
            }`}
            onClick={() => handleClick(1)}
          >
            {btn2}
          </button>
        </div>
      </header>

      <div className="grid grid-flow-col gap-1 overflow-x-scroll   py-2 scrollbar-hide">
        {movieData.length > 0 ? (
          movieData.map((item) => (
            <div key={item.id} className="text-center">
              {item.poster_path && (
                <img
                  onClick={() => handleShowImage(item)} 
                  className="rounded-md mb-2 w-[200px] h-[100px] md:h-[300px] object-cover shadow-[0px_0px_10px_rgba(0,0,0,0.3)] cursor-pointer"
                  src={`${baseImageUrl}${item.poster_path}`}
                  alt={item.title || item.name}
                />
              )}
              <div className="content text-white">
                <h3 className="font-semibold text-[10px] md:text-xl mb-2">
                  {trimContent(item.title || item.name)}
                </h3>
                <p className="text-[7px] md:text-xl">
                  {item.release_date
                    ? new Date(item.release_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                      })
                    : ""}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No Data To Show Yet!</p>
        )}
      </div>
    </section>
  );
}

export default Row;
