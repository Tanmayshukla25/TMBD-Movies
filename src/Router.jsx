import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import First from "./first";
import Movie from "./Movie";
import SearchMovie from "./SearchMovie";
import SearchTvShows from "./SearchTvShows";


const router = createBrowserRouter([
  {
    path: "/",
    element: <First/>,
     children: [
      { index: true, element: <App /> },
      { path: "/movie/:id", element:<Movie/> },
      { path: "/SearchMovie", element:<SearchMovie/> },
      { path: "/SearchTvShows", element:<SearchTvShows/> },
  
    ],
  },
]);


function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
