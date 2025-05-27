import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const baseImageUrl = "https://image.tmdb.org/t/p/original";

function Movie() {
  const { state } = useLocation();
  const { item } = state || {};

  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const fetchYouTubeVideoId = async () => {
      if (item?.id) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=e951cf8f86b17a2c5ce148dcdbb62020`
          );
          const data = await response.json();
          const youtubeTrailer = data.results.find(
            (video) => video.site === "YouTube" && video.type === "Trailer"
          );
          if (youtubeTrailer?.key) {
            setVideoId(youtubeTrailer.key);
          }
        } catch (error) {
          console.error("Error fetching video:", error);
        }
      }
    };

    fetchYouTubeVideoId();
  }, [item]);

  if (!item) {
    return <p className="text-white">No movie data found.</p>;
  }

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div
        className="w-full h-[80vh] md:h-[100vh] bg-center bg-no-repeat bg-cover opacity-8 relative"
        style={{
          backgroundImage: `url(${baseImageUrl}${item.backdrop_path})`,
        }}
      ></div>

      <div className="absolute top-0 md:top-3 left-0.5 md:left-[200px]">
        <div className="p-4 text-white flex justify-center items-center my-2 gap-[20px] md:gap-[150px] h-[100vh]">
          <div>
            {!videoId && <YouTube videoId={videoId} opts={opts} />}

            {videoId && (
              <a href={`https://www.youtube.com/watch?v=${videoId}`}>
                <img
                  src={`${baseImageUrl}${item.poster_path}`}
                  alt={item.title || item.name}
                  className="w-[350px] h-auto rounded-2xl shadow cursor-pointer mt-4"
                />
              </a>
            )}
          </div>

          <div>
            <h1 className="text-[10px] md:text-2xl font-bold mt-2 md:mt-4">
              {item.title || item.name}
            </h1>
            <p>{item.subtitle}</p>
            <p className="md:mt-2 text-[10px] md:text-xl w-[200px] md:w-[500px] py-4">
              <span className="text-[10px] md:text-4xl font-bold pb-[20px]">
                OverView :-
              </span>
              <br />
              {item.overview}
            </p>
            <span className="md:text-xl text-[10px] font-bold">
              Release Date :-
              <span className="text-gray-500 text-[10px] md:text-[15px] font-medium mr-6">
                {item.release_date}
              </span>
            </span>
            <span className="md:text-xl text-[10px] font-bold ml-4">
              Rating :-
              <span className="text-gray-500 text-[10px] md:text-[15px] font-medium">
                {item.vote_average}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
