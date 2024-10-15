import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/error_page";
import Home from "./components/home";
import Movies from "./components/movies";
import Movie from "./components/movie";
import Genres from "./components/genres";
import Login from "./components/login";
import EditMovie from "./components/edit_movie";
import GraphQL from "./components/graphql";
import ManageCatalogue from "./components/manage_catalogue";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {index: true, element: <Home/>},
      {
        path: "/movies",
        element: <Movies/>
      },
      {
        path: "/movies/:id",
        element: <Movie/>
      },
      {
        path: "/genres",
        element: <Genres/>
      },
      {
        path: "/admin/movie/0",
        element: <EditMovie/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/graphql",
        element: <GraphQL/>
      },
      {
        path: "/admin",
        element: <ManageCatalogue/>
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
