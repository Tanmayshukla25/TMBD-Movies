import { useLocation } from "react-router-dom";

const baseImageUrl = "https://image.tmdb.org/t/p/original";

function Movie() {
  const { state } = useLocation();
  const { item } = state || {};
  console.log(item);
  

  if (!item) {
    return <p className="text-white">No movie data found.</p>;
  }

  return (
 <>
 <div  className="w-full h-[100vh] bg-center bg-no-repeat bg-cover opacity-8 relative"
          style={{
            backgroundImage: `url(${baseImageUrl}${item.backdrop_path})`,
            
          }}>
   
 </div>
   <div className=" absolute top-3 left-[200px]">
    <div className="p-4 text-white flex justify-center items-center my-2  gap-[150px] h-[100vh]">
     <div>
       <img
        src={`${baseImageUrl}${item.poster_path}`}
        alt={item.title || item.name}
        className="w-[350px] h-auto rounded-2xl shadow"
      />
     </div>
     <div>
       <h1 className="text-2xl font-bold mt-4">{item.title || item.name}</h1>
       <p>{item.subtitle}</p>
      <p className="mt-2  w-[500px] py-4"><span className="text-4xl font-bold pb-[20px]">OverView</span> <br />{item.overview}</p>
    <span className="text-xl font-bold">Release Date :- <span className="text-gray-500 text-[15px] font-medium"> {item.release_date}</span></span>
     </div>
    </div></div></>
  );
}

export default Movie;
