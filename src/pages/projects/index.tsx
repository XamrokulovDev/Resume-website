// import animation libraries
import { useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
// import data
import { ProjectList } from '../../../data/data';

const Project = () => {
  const [text] = useTypewriter({
      words: ['Projects'],
  });
  return (
    <div className="w-full h-full container bg-white rounded-2xl overflow-y-auto shadow-md shadow-[#00000013] md:p-10 p-5">
      <h1 title='Projects' className='font-extrabold max-sm:text-xl text-2xl text-gray-800 text-center'>{text}</h1>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-8 mt-10"
      >
        {
          ProjectList?.map((item)=>(
            <a href={item.link} target='_blank' key={item.id} className='w-60 h-36 relative flex flex-col items-center justify-center rounded-xl overflow-hidden'>
              <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
              <div className="bg-blue-300 w-full h-full flex items-center justify-center absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all duration-300">
                <h1 className='font-medium text-white'>Visit Website</h1>
              </div>
            </a>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Project;