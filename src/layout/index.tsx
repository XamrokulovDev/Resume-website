// import Outlet from "react-router-dom";
import { Outlet } from "react-router-dom";

const Routerlayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center max-md:px-3">
        <Outlet />
    </div>
  )
}

export default Routerlayout;