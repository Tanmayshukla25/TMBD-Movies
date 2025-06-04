
import Row from "./Row";
import { urls } from "./data";
import "./App.css"

import Header from "./Header.jsx"
import MainHeader from "./MainHeader";

function App() {
  return (
    <>
    
     <Header />

      <Row
        heading="Trending Movies"
        btn1="Day"
        btn2="Week"
        urls={[urls.trendingByDay, urls.trendingByWeek]}
      />
      <Row
        heading="Popular Movies"
        btn1="Movies"
        btn2="TV Shows"
        urls={[urls.popularMovies, urls.popularTVShows]}
      />
      <Row
        heading="Top Rated Movies"
        btn1="Movies"
        btn2="TV Shows"
        urls={[urls.topRatedMovies, urls.topRatedTVShows]}
      />
    </>
  );
}

export default App;
