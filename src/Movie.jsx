import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { IoLogoYoutube } from "react-icons/io";
import "./App.css";

const baseImageUrl = "https://image.tmdb.org/t/p/original";


function Movie() {
  const { state } = useLocation();
  const { item } = state || {};

  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);

  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMovieDetails = async () => {
      if (item?.id) {
        try {
          const type = item.media_type === "tv" ? "tv" : "movie";

          const response = await fetch(
            `https://api.themoviedb.org/3/${type}/${item.id}?api_key=e951cf8f86b17a2c5ce148dcdbb62020&append_to_response=videos,credits`
          );
          const data = await response.json();
          setGenres(data.genres || []);

          const youtubeTrailer = data.videos?.results?.find(
            (video) => video.site === "YouTube" && video.type === "Trailer"
          );
          if (youtubeTrailer?.key) {
            setVideoId(youtubeTrailer.key);
          }

          setCast(data.credits?.cast);
        } catch (error) {
          console.error("Error fetching movie details:", error);
        }
      }
    };

    fetchMovieDetails();
  }, [item]);

  if (!item) {
    return <p className="text-white">No movie data found.</p>;
  }

  return (
    <>
      <div
        className="w-full h-[80vh] md:h-[100vh] bg-center bg-no-repeat bg-cover opacity-8 relative"
        style={{
          backgroundImage: `url(${baseImageUrl}${item.backdrop_path})`,
        }}
      ></div>

      <div className="absolute top-[-60px] md:top-3 left-0.5 md:left-[200px]">
        <div className="p-4 text-white flex justify-center items-center my-2 gap-[20px] md:gap-[150px] h-[100vh]">
          <div>
            <img
              src={`${baseImageUrl}${item.poster_path}`}
              alt={item.title || item.name}
              className="w-[350px] h-auto rounded-2xl shadow cursor-pointer mt-4"
            />
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
              <span className="text-gray-500 text-[10px] ml-2 md:text-[15px] font-medium mr-6">
                {item.release_date
                  ? new Date(item.release_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    })
                  : "N/A"}
              </span>
            </span>

            <span className="md:text-xl text-[10px] font-bold ml-4">
              Rating :-
              <span className="text-gray-500 text-[10px] md:text-[15px] ml-2 font-medium">
                {item.vote_average + " / 10"}
              </span>
            </span>
            <hr className="text-gray-500 mt-2.5 mb-2.5" />
            <span className="text-xl font-bold">
              Popularity:-{" "}
              <span className="text-[15px] text-gray-500">
                {item.popularity}
              </span>
            </span>
          
            <hr className="text-gray-500 mt-2.5 mb-2.5" />
            {genres.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 md:text-xl text-[10px] font-bold">
                Genre:-{" "}
                {genres.map((genre) => (
                  
                  <span className="text-xl font-bold"key={genre.id} >
                    <span className="text-[15px]  text-gray-500">
                   {genre.name} ,
                    </span>
                  </span>
                ))}
              </div>
            )}

            {videoId && (
              <a
                target="_blank"
                href={`https://www.youtube.com/watch?v=${videoId}`}
              >
                <IoLogoYoutube className="text-5xl mt-3 text-red-500  bg-white backdrop-blur-md rounded-full px-1" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="px-3  mt-10 mb-10">
        <div className="flex flex-wrap  items-center justify-center ">
          {cast.length > 0 && (
            <div className=" py-8 px-4  overflow-x-scroll scrollbar-hide ">
              <h2 className="text-white text-3xl font-semibold mb-5">
                Top Cast
              </h2>
              <div className="flex  gap-6 ">
                {cast.map((member) => (
                  <div key={member.id} className="text-center min-w-[100px] ">
                    <img
                      src={
                        member.profile_path
                          ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                          : "https://via.placeholder.com/100x100?text=No+Image"
                      }
                      alt={member.name}
                      className="w-28 h-28 object-cover rounded-full mx-auto"
                    />
                    <p className="text-white mt-2 text-sm font-semibold">
                      {member.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Movie;
