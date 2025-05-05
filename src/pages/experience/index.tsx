// import animation libraries
import { useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Experience = () => {
  const [text] = useTypewriter({
    words: ['Experience'],
  })
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 1 }} 
      className="w-full h-full container bg-white rounded-2xl overflow-y-auto shadow-md shadow-[#00000013] md:p-10 p-5"
    >
      <h1 title="Experience" className="font-extrabold max-sm:text-xl text-2xl text-gray-800 text-center">{text}</h1>
      <div className="flex flex-col gap-3 mt-5">
        <h1 title="Frontend Developer" className="font-bold max-sm:text-lg sm:text-2xl text-xl text-gray-800 mb-2">Frontend Developer:</h1>
        <div className="flex flex-col gap-1">
          <li className="font-semibold sm:text-lg">USAT University Official Website:</li>
          <p className="max-sm:text-sm">Developed the official website for USAT University, allowing users to leave contact details, view tuition fees, and access general information. Built using React.js.</p>
        </div>
        <div className="flex flex-col gap-1">
          <li className="font-semibold sm:text-lg">Django Academy Admin Panel:</li>
          <p className="max-sm:text-sm">Developed an admin panel for Django Academy to help manage students. Admins can search for students by name and surname. Built using React.js.</p>
        </div>
        <div className="flex flex-col gap-1">
          <li className="font-semibold sm:text-lg">Ndinoff Group Pharmaceutical Website:</li>
          <p className="max-sm:text-sm">Participated as an assistant frontend developer in building a website for Ndinoff Group, a company specializing in online pharmaceutical sales. Utilized React.js for development.</p>
        </div>
        <div className="flex flex-col gap-1">
          <li className="font-semibold sm:text-lg">Postline Distribution Website:</li>
          <p className="max-sm:text-sm">Created a web platform for an online food delivery company. Users can select products and submit their phone numbers for admin contact. The frontend was built with Next.js.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <h1 title="Frontend Developer" className="font-bold max-sm:text-lg sm:text-2xl text-xl text-gray-800 mb-2">Backend Developer:</h1>
        <div className="flex flex-col gap-1">
          <li className="font-semibold sm:text-lg">Postline Distribution Project:</li>
          <p className="max-sm:text-sm">Developed the backend for an online food delivery platform using Node.js and Express.js. Users can select products and submit contact information, which is then forwarded to the admin. RESTful APIs were used for data management.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <h1 title="Frontend Developer" className="font-bold max-sm:text-lg sm:text-2xl text-xl text-gray-800 mb-2">Telegram Bot Developer:</h1>
        <div className="flex flex-col gap-1">
          <li className="font-semibold sm:text-lg">Kitchen Complaint Bot:</li>
          <p className="max-sm:text-sm">Created a Telegram bot for a kitchen team that allows users to register and submit complaints about staff. Complaints are automatically sent to the admin through the bot.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience;