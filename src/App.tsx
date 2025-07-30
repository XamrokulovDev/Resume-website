import React from "react";
// import createBrowserRouter and RouterProvider from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import layout 
const Routerlayout = React.lazy(()=> import("./layout"));
// import pages 
const Home = React.lazy(()=> import("./pages"));

// particles 
const ParticlesBg = React.lazy(()=> import("particles-bg"))

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routerlayout />,
      children: [
        {
          path:"*",
          element: <Home />
        },
        {
          index: true,
          element: <Home />
        },

      ]
    }
  ]);
  return (
    <>
      <ParticlesBg type="cobweb" bg={true} num={150} color="#3B82F6" />
      <RouterProvider router={router} />
    </>
  )
}

export default App;