"use client"

import { useTypewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"
import { FaGithub, FaTelegramPlane } from "react-icons/fa" // GitHub va Telegram ikonkalari uchun

export default function Home() {
  const [nameText] = useTypewriter({
    words: ["XAMROKULOV ULFATJON"],
    loop: 1, // Play once
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  })

  const [titleText] = useTypewriter({
    words: ["FULL-STACK DEVELOPER"],
    loop: 1,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2500, // Start after name is typed
  })

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-y-auto h-[90vh] p-6 sm:p-8 md:p-10 font-sans text-black">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide mb-2">
            <span>{nameText}</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600">
            <span className="text-black">{titleText}</span>
          </h2>
        </motion.div>

        {/* About Me */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ delay: 0.5, ...sectionVariants.visible.transition }}
          className="mb-8 pb-6 border-b border-gray-200"
        >
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            I was born in the Samarkand region and currently reside in Tashkent. For over a year, I have been studying
            and gaining experience in both Front-End and Back-End development. My goal is to work in a leading IT
            company, contribute to large-scale projects, and become a highly skilled professional in my field. I am
            driven by a passion for continuous growth and a strong desire to acquire new knowledge.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ delay: 0.7, ...sectionVariants.visible.transition }}
          className="mb-8 pb-6 border-b border-gray-200"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase tracking-wide text-blue-500">Skills</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base text-black">
            {[
              "Html, Css, Javascript, Typescript",
              "React js, Next js, Redux toolkit",
              "Tailwind css, Bootstrap 5, Ant design",
              "Git, Git Hub, Figma, Photoshop",
              "Node js, Express js, Rest api, Web socket",
              "Postgresql, Mongo Db",
            ].map((skill, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              >
                <span className="mr-2 text-blue-500">•</span>
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ delay: 1.5, ...sectionVariants.visible.transition }}
          className="mb-8 pb-6 border-b border-gray-200"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase tracking-wide text-blue-500">Education</h3>
          <div className="grid gap-2 text-base text-black">
            <motion.p
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.6, duration: 0.4 }}
            >
              <span className="font-semibold">Frontend</span> - I studied at Django academy from 2023 to 2024.
            </motion.p>
            <motion.p
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.7, duration: 0.4 }}
            >
              <span className="font-semibold">Backend</span> - I studied at Django academy from 2024.
            </motion.p>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ delay: 1.9, ...sectionVariants.visible.transition }}
          className="mb-8 pb-6 border-b border-gray-200"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase tracking-wide text-blue-500">Projects</h3>
          <h4 className="text-lg sm:text-xl font-semibold mb-3 text-black">FRONT END</h4>
          <ol className="list-decimal list-inside text-base text-black space-y-3">
            {[
              {
                name: "Usat.uz",
                url: "https://usat.uz",
                description:
                  'I started working as a front-end developer at "Team Pro", contributing to both small and large projects. I also developed the USAT.uz website here.',
              },
              {
                name: "Ndinoff group",
                url: "http://ndinoff.uz",
                description:
                  "Participated as an assistant frontend developer in building a website for Ndinoff Group, a pharmaceutical sales company, using React.js.",
              },
              {
                name: "Postline distribution",
                url: "http://www.postline.uz",
                description:
                  "Created a web platform for an online food delivery company where users can select products and submit their phone numbers for admin contact. The frontend was built with Next.js.",
              },
              {
                name: "Doctor Urmonov",
                url: "https://urmonov.com",
                description:
                  "Doctor Urmonov is a website designed for a doctor. Users can learn about services, contact the doctor, or sign up for a free consultation.",
              },
              {
                name: "OXYZ",
                url: "https://oxyz.uz",
                description:
                  "OXYZ is an online platform that helps find suitable trucks for freight transportation across the CIS region. Users can get information about services and choose the best option through a free consultation.",
              },
              {
                name: "Asaka Agrostar",
                url: "https://www.asaka-agrostar.uz/",
                description:
                  "Asaka Agrostar is a website designed for the Asaka agro-industrial company. Users can get information about vegetables and other products.",
              },
              {
                name: "USAT Kutubxona",
                url: "https://usat-library.netlify.app",
                description:
                  "In the USAT Library admin dashboard project, the admin will be able to manage librarians' permissions, view yearly, monthly, weekly, and daily statistics, and add new staff members. A librarian can only approve orders and accept books. (It's in progress)",
              },
            ].map((project, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 2.0 + index * 0.1, duration: 0.4 }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  {project.name}
                </a>{" "}
                - {project.description}
              </motion.li>
            ))}
          </ol>
        </motion.div>

        {/* Contact and Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 2.8, ...sectionVariants.visible.transition }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase tracking-wide text-blue-500">Contact</h3>
            <div className="text-base text-black space-y-2">
              <motion.p
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 2.9, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                <FaGithub className="text-black text-xl" />
                <a
                  href="https://github.com/XamrokulovDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/XamrokulovDev
                </a>
              </motion.p>
              <motion.p
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 3.0, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                <FaTelegramPlane className="text-blue-500 text-xl" />
                <a
                  href="https://t.me/Ulfatjon19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://t.me/Ulfatjon19
                </a>
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 3.1, ...sectionVariants.visible.transition }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase tracking-wide text-blue-500">Languages</h3>
            <div className="text-base text-black space-y-2">
              <motion.p
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 3.2, duration: 0.4 }}
              >
                Uzbek - Fluent
              </motion.p>
              <motion.p
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 3.3, duration: 0.4 }}
              >
                English - Elementary
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
