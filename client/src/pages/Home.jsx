import Services from "../component/Services"
import { motion } from "framer-motion";

import Skills from "../component/skills"
import Portifolio from '../component/Portifolio'

import Footer from "../component/Footer"
import { Link } from "react-router-dom";
import Contact from "../component/Contact"


function Home() {

    const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
    return (
        <>
           <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container flex w-full items-center mt-8 sm:mt-12 md:mt-16 lg:mt-23"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="box flex flex-col justify-between gap-8 w-full md:flex-row md:items-center md:gap-12 lg:gap-16">
          
          {/* Image Section */}
          <motion.div
            className="image flex justify-center md:justify-start md:flex-1"
            variants={imageVariants}
          >
            <motion.img
              src="/DEKU.jpg"
              alt="Rawaha Ahmed"
              className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] object-cover rounded-lg"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="content flex flex-col justify-center items-center md:items-start md:flex-1 gap-4 md:gap-6 lg:gap-8 py-8 md:py-12"
            variants={containerVariants}
          >
            {/* Header */}
            <motion.div className="header text-center md:text-left leading-normal" variants={itemVariants}>
              <motion.h1
                className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-normal"
                variants={itemVariants}
              >
                Hi,
              </motion.h1>
              <motion.h1
                className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-normal"
                variants={itemVariants}
              >
                I am <span className="text-blue-500">Rawaha Ahmed</span>
              </motion.h1>
              <motion.h1
                className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[43px] mt-2 leading-normal"
                variants={itemVariants}
              >
                Mern stack developer
              </motion.h1>
            </motion.div>

            {/* Welcome Message */}
            <motion.h2
              className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-[26px] text-center md:text-left text-gray-700"
              variants={itemVariants}
            >
              Welcome to our website
            </motion.h2>

            {/* Button */}
            <motion.div
              className="button mt-4 md:mt-6 lg:mt-7"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
  <Link to="/Resume.pdf" target="_blank" download>
  <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 px-6 py-3 sm:px-8 sm:py-4 lg:p-5 text-white font-bold text-lg sm:text-xl lg:text-2xl rounded-xl">
    Download CV
  </button>
</Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </main>
            
            <Skills />
            <Services />
          <Portifolio />
            <Contact />
            <Footer />
        </>
    )
}

export default Home