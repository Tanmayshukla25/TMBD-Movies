import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Row from "./Row";
import First from "./first";


const router = createBrowserRouter([
  {
    path: "/",
    element: <First/>,
     children: [
      { index: true, element: <App /> },
  
      { path: "/tv", element: <App /> },
    ],
  },
]);


function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
