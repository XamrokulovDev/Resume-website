// import animation libraries
import { useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Home = () => {
  const [text] = useTypewriter({
    words: ['Hello, I\'m Ulfatjon'],
  })

  return (
    <div className="w-full h-full container bg-white rounded-2xl overflow-y-auto shadow-md shadow-[#00000013] md:p-10 p-5">
      <h1 title={text} className="font-extrabold max-sm:text-xl text-2xl text-gray-800 text-center">
        <span className="text-gray-800">{text}</span>
      </h1>
      <motion.p 
        className='text-gray-600 max-sm:text-sm leading-7 max-sm:leading-6 mt-5' 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro sapiente voluptate excepturi accusantium quaerat soluta aliquam quia illo reiciendis molestias quos quibusdam ipsum expedita ea iste beatae, fuga maiores numquam. Aut atque officiis sunt nemo debitis, doloribus fugit tempore beatae ratione? Temporibus sunt omnis voluptate illum corporis. Nesciunt incidunt nobis explicabo tenetur unde obcaecati ut fugit ullam inventore vel distinctio rem voluptate ratione labore natus hic iure mollitia in, dicta sed asperiores. Similique hic minima odio nemo, quae ipsa reprehenderit delectus repellat quidem ipsum laudantium, architecto quaerat dignissimos tempora consectetur alias rem deserunt ullam, totam fuga ratione incidunt aspernatur.
      </motion.p>
    </div>
  )
}

export default Home;