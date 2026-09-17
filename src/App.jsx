import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    Component : MainLayout,
    children : [
      {
        index : true,
        element : <Home/>
      },{
        path : "/movies",
        element : <Movie/>
      }
    ]
  },
]);


function Router() {
  return (
   <RouterProvider router={router} />
  )
}

export default Router
