import React from "react";
// import createBrowserRouter and RouterProvider from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import layout 
const Routerlayout = React.lazy(()=> import("./layout"));
// import pages 
const Home = React.lazy(()=> import("./pages"));
const Experience = React.lazy(()=> import("./pages/experience"));
const Skill = React.lazy(()=> import("./pages/skills"));
const Project = React.lazy(()=> import("./pages/projects"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routerlayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/experience",
          element: <Experience />
        },
        {
          path: "/skill",
          element: <Skill />
        },
        {
          path: "/project",
          element: <Project />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App;