import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarList } from "../../../data/data";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container bg-white max-md:my-3 my-5 rounded-full shadow-md shadow-[#00000013] relative px-10 max-md:px-5 py-4">
      
      {/* Desktop Navbar */}
      <div className="flex items-center justify-between max-md:hidden">
        <NavLink to="/" className="logo">
          <h1 title="logo" className="font-extrabold font-mono text-gray-800 text-xl">
            <span className="text-blue-500">{`<`}</span>
            Ulfatjon
            <span className="text-blue-500">{`/>`}</span>
          </h1>
        </NavLink>
        <ul className="flex items-center gap-10">
          {
            NavbarList.map((item) => (
              <li key={item.id} className="font-medium text-gray-800 hover:text-amber-400 transition-colors duration-300">
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            ))
          }
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between md:hidden">
        <NavLink to="/" className="logo">
          <h1 title="logo" className="font-extrabold font-mono text-gray-800 text-xl">
            <span className="text-blue-500">{`<`}</span>
            Ulfatjon
            <span className="text-blue-500">{`/>`}</span>
          </h1>
        </NavLink>

        {/* Toggle Icon */}
        {
          isOpen
            ? <IoClose className="text-3xl text-gray-800 cursor-pointer z-50" onClick={() => setIsOpen(false)} />
            : <LuMenu className="text-3xl text-gray-800 cursor-pointer z-50" onClick={() => setIsOpen(true)} />
        }
      </div>

      {/* Mobile Menu Panel */}
      <ul className={`md:hidden absolute top-0 left-0 w-full bg-white shadow-md shadow-[#00000013] rounded-b-3xl rounded-t-xl pt-12 pb-6 flex flex-col items-center gap-6 transition-all duration-500 ease-in-out z-40 ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        {
          NavbarList.map(item => (
            <li key={item.id} className="font-medium text-gray-800 hover:text-amber-400 transition-all duration-300">
              <NavLink to={item.link} onClick={() => setIsOpen(false)}>{item.title}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Navbar;