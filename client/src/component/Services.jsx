"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Globe, Database } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Creating responsive and modern web applications using latest technologies.",
  },

  {
    icon: Globe,
    title: "Mern Stack Development",
    description: "End-to-end development from frontend to backend and database design.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing efficient and scalable database architectures.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Services() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto bg-gray-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12" variants={itemVariants}>
          My Services
        </motion.h2>

        <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div className="text-blue-500 mb-4" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <IconComponent size={48} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
