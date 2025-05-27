import { useState } from "react";
import moviesLogo from "./images/movix-logo.svg";
import { IoSearchSharp } from "react-icons/io5";
function MainHeader() {

  const[ToggleBtn,SetToggle]=useState(false);

  function ToggleData() {
    if(!ToggleBtn){
      SetToggle(true);
    }else{
      SetToggle(false)
    }
    
  }
  return (
    <>
      <div className="relative">
        <header className="flex flex-wrap items-center z-10  bg-cyan-950/80 p-2 text-xl justify-around gap-[10%] text-white fixed top-0 right-0 left-0">
          <div>
         <a href="">   <img
              src={moviesLogo}
              alt="MoviesLogo"
              className="w-[100px] md:w-[180px] cursor-pointer"
            /></a>
          </div>

          <div className="flex-wrap items-center justify-around gap-10 hidden md:flex">
            <div className="flex flex-wrap items-center justify-around gap-10">
              <button className="hover:text-pink-800 cursor-pointer">
                Movies
              </button>
              <button className="hover:text-pink-800 cursor-pointer">
                TV Shows
              </button>
            </div>

            <span className="hover:text-pink-800 cursor-pointer hidden md:block">
              <IoSearchSharp />
            </span>
           
          </div>
           <div className="md:hidden text-4xl">
              <a href="#" onClick={ToggleData}>&#8801;</a>
            </div>

            
           {ToggleBtn&&(<div className="bg-white p-2 w-full  text-black  md:hidden absolute top-13  text-center">
              <ul>
                <li className="text-[18px] mb-1 p-1 rounded ">Movies</li>
                <hr  className="text-gray-200"/>
                <li className="text-[18px] mb-1 p-1 rounded ">Tv Shows</li>
              </ul>
            </div>)}
        </header>
      </div>
    </>
  );
}
export default MainHeader;
