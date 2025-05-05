import React from "react";
// import Outlet from "react-router-dom";
import { Outlet } from "react-router-dom";
// import Navbar and Social components 
const Navbar = React.lazy(() => import("../components/navbar"));
const Social = React.lazy(() => import("../components/social"));

const Routerlayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center max-md:px-3">
        <Navbar />
        <Outlet />
        <Social />
    </div>
  )
}

export default Routerlayout;