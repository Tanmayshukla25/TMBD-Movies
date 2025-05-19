import { useEffect, useState } from "react";

function Row({ urls, heading, btn1, btn2 }) {
  const [movieData, setMovieData] = useState([]);
  const [showData, setShowData] = useState(urls[0]);

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

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

  return (
    <section>
      <header>
        <h2 className="text-xl font-bold mb-4">{heading}</h2>
        <div className="mb-4">
          <button
            className="  px-4 py-2 mr-2 rounded"
            onClick={() => setShowData(urls[0])}
          >
            {btn1}
          </button>
          <button
            className=" px-4 py-2 rounded"
            onClick={() => setShowData(urls[1])}
          >
            {btn2}
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-5 p-6">
          {movieData.length > 0 ? (
            movieData.map((item) => (
              <div key={item.id} className="text-center w-[100px]">
             
                {item.poster_path && (
                  <img
                    className="rounded-md mb-2 w-[100px] h-[300px] object-cover shadow-[0px_0px_10px_rgba(0,0,0,0.3)]"
                    src={`${baseImageUrl}${item.poster_path}`}
                    alt={item.title || item.name}
                  />
                )}
              </div>
            ))
          ) : (
            <p>No Data To Show Yet!</p>
          )}
        </div>
      </header>
    </section>
  );
}

export default Row;
