import { useState } from "react";
import moviesLogo from "./images/movix-logo.svg";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

function MainHeader({ IconsSearch, setIconsSearch, handleSearch }) {
  const [ToggleBtn, setToggle] = useState(false);
  const [activeBtn, setActiveBtn] = useState();

  function ToggleData() {
    if (!ToggleBtn) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }
  const handleClick = (index) => {
    setActiveBtn(index);
  };

  function handleToggle() {
    setToggle(false);
  }
  return (
    <>
      <div className="relative">
        <header className="flex flex-wrap items-center z-10  bg-cyan-950/80 p-2 text-xl justify-around gap-[10%] text-white fixed top-0 right-0 left-0">
          <div>
            <Link to="/">
              <img src={moviesLogo} alt="Movix Logo" onClick={handleToggle} />
            </Link>
          </div>

          <div className="flex-wrap items-center justify-around gap-10 hidden md:flex">
            <div className="flex flex-wrap items-center justify-around gap-10">
              <Link
                to="/SearchMovie"
                className={` cursor-pointer ${
                  activeBtn === 0 ? " bg-gray-500 p-2 rounded" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Movies
              </Link>
              <Link
                to="/SearchTvShows"
                className={` cursor-pointer ${
                  activeBtn === 1 ? " bg-gray-500 p-2 rounded" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                TvShows
              </Link>
            </div>

            <span className="hover:text-pink-800 cursor-pointer hidden md:block">
              <IoSearchSharp onClick={ToggleData} />
            </span>
          </div>
          <div className="md:hidden text-4xl">
            <a href="#" onClick={ToggleData}>
              &#8801;
            </a>
          </div>

          {ToggleBtn && (
            <div className="bg-white p-2 w-full  text-black  md:hidden absolute top-13  text-center">
              <ul>
                <li className="text-[18px] mb-1 p-1 rounded ">
                  {" "}
                  <Link
                    to="/SearchMovie"
                    className={` cursor-pointer `}
                    onClick={() => handleClick(0)}
                  >
                    Movies
                  </Link>
                </li>
                <hr className="text-gray-200" />
                <li className="text-[18px] mb-1 p-1 rounded ">
                  {" "}
                  <Link
                    to="/SearchTvShows"
                    className={` cursor-pointer `}
                    onClick={() => handleClick(1)}
                  >
                    TvShows
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {ToggleBtn && (
            <div className="bg-white md:flex hidden items-center justify-center w-full absolute gap-[10px] top-15 text-black">
              <input
                type="text"
                placeholder="Search for a movie or TV show..."
                className="text-2xl w-[65%] m-1 p-2"
                value={IconsSearch} 
                onChange={(e) => setIconsSearch(e.target.value)}
              />
              <button
                className="bg-blue-600 p-2 text-white rounded-xl"
                onClick={handleSearch}
              >
                Submit
              </button>
              <RxCross1 onClick={ToggleData} />
            </div>
          )}
        </header>
      </div>
    </>
  );
}
export default MainHeader;
