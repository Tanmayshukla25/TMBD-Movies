import moviesLogo from "./images/movix-logo.svg";
import { IoSearchSharp } from "react-icons/io5";
function MainHeader() {
  return (
    <>
      <div className="relative">
        <header className="flex flex-wrap items-center z-10  bg-cyan-950/80 p-2 text-xl justify-around gap-[10%] text-white fixed top-0 right-0 left-0">
          <div>
            <img src={moviesLogo} alt="MoviesLogo" className="w-[180px]" />
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
      </div>
    </>
  );
}
export default MainHeader;
