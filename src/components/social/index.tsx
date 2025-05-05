// import icons 
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Social = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container flex items-center justify-between max-sm:justify-center bg-white max-md:my-3 my-5 rounded-full shadow-md shadow-[#00000013] px-10 p-4">
      <div className="flex items-center justify-between max-sm:hidden">
        <p className="font-medium text-gray-800">
          © {year} All rights reserved
        </p>
      </div>
      <div className="flex items-center max-sm:justify-between max-sm:gap-8 gap-4">
        <a href="">
          <FaTelegram size={21} className="text-blue-500"/>
        </a>
        <a href="">
          <FaGithub size={21} className="text-gray-800"/>
        </a>
        <a href="">
          <FaYoutube size={23} className="text-red-500"/>
        </a>
      </div>
    </div>
  )
}

export default Social;