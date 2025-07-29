import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer className="bg-gray-900 text-white" ref={ref}>
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center space-y-6">

 
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex space-x-8"
          >
            <a
              href="https://github.com/Rawahaahmed23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-12 w-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/rawaha-ahmed-9105732ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-12 w-12" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 text-sm"
          >
            © 2025 All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
