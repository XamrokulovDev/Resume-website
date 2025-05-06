// import animation libraries
import { useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
// import data 
import { SkillList } from '../../../data/data'

const Skill = () => {
  const [text] = useTypewriter({
      words: ['Skills'],
  });

  const frontendSkills = SkillList.filter(item => item.category === "Frontend");
  const backendSkills = SkillList.filter(item => item.category === "Backend");
  const databaseSkills = SkillList.filter(item => item.category === "Database");
  const toolsSkills = SkillList.filter(item => item.category === "Tools");

  return (
    <div className="w-full h-full container bg-white rounded-2xl overflow-y-auto shadow-md shadow-[#00000013] md:p-10 p-5">
      <h1 title="Skills" className="font-extrabold max-sm:text-xl text-2xl text-gray-800 text-center">{text}</h1>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1 }}
        className="flex flex-col gap-1 mt-5"
      >
        {
          frontendSkills.map((item) => (
            <div key={item.id}>
              <li className='font-semibold'>{item.skill}</li>
            </div>
          ))
        }
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1 }}
        className="flex flex-col gap-1 mt-5"
      >
        {
          backendSkills.map((item) => (
            <div key={item.id}>
              <li className='font-semibold'>{item.skill}</li>
            </div>
          ))
        }
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1 }}
        className="flex flex-col gap-1 mt-5"
      >
        {
          databaseSkills.map((item) => (
            <div key={item.id}>
              <li className='font-semibold'>{item.skill}</li>
            </div>
          ))
        }
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1 }}
        className="flex flex-col gap-1 mt-5"
      >
        {
          toolsSkills.map((item) => (
            <div key={item.id}>
              <li className='font-semibold'>{item.skill}</li>
            </div>
          ))
        }
      </motion.div>
    </div>
  );
};

export default Skill;