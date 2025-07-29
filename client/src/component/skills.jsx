import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { src: "/html.png", alt: "HTML", name: "HTML" },
    { src: "/css.png", alt: "CSS", name: "CSS" },
    { src: "/react.png", alt: "React", name: "React" },
    { src: "/node1.png", alt: "Node.js", name: "Node.js" },
    { src: "/express.png", alt: "Express", name: "Express" },
    { src: "/mongodb.png", alt: "MongoDB", name: "MongoDB" },
    { src: "/java.png", alt: "JavaScript", name: "JavaScript" },
    { src: "/next-js.svg", alt: "Next.js", name: "Next" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headerVariants = {
    hidden: { 
      y: -30, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    }
  };

  const underlineVariants = {
    hidden: { 
      width: 0 
    },
    visible: {
      width: "5rem",
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <div className="main min-h-[32rem] w-full py-10">
        <div>
          <motion.header 
            className="flex justify-center items-center flex-col mt-10"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 uppercase tracking-wide text-center">
              Skills
              <motion.div 
                className="h-1 bg-blue-500 mx-auto mt-2"
                variants={underlineVariants}
                initial="hidden"
                animate="visible"
              />
            </h1>
          </motion.header>
                
          <div className="flex justify-center items-center flex-col mt-10">
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-x-32 lg:gap-y-24 justify-center content-center mt-10 px-4 sm:px-6 lg:px-0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-200 cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    y: -10,
                    transition: { 
                      type: "spring", 
                      stiffness: 300,
                      damping: 10
                    }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                >
                  <motion.img 
                    src={skill.src} 
                    alt={skill.alt} 
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  />
                  <motion.p 
                    className="mt-2 text-gray-700 font-medium text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {skill.name}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;