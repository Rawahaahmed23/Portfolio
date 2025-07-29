import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ""
  });

  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
      });
      if (response.ok) {
        setContact({ username: "", email: "", message: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Refs for scroll trigger
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isFormInView = useInView(formRef, { once: true });

  return (
    <main className="py-32 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">

          {/* Scroll Triggered Header */}
          <motion.header
            ref={headerRef}
            initial={{ opacity: 0, y: -50 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
              Contact Us
            </h1>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
          </motion.header>

          {/* Scroll Triggered Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="flex flex-row w-[80%] h-[43rem] bg-white rounded-lg shadow-lg"
          >
            {/* Image Section */}
            <div className="hidden md:block w-1/2 pr-6">
              <img
                src="/contact2.jpg"
                alt="Contact"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Form Section */}
            <div className="w-full md:w-1/2 p-10 mt-10">
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  value={contact.username}
                  onChange={handle}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
                />
                <input
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={handle}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  name="message"
                  value={contact.message}
                  onChange={handle}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
                ></textarea>

                <div className="flex space-x-4 mt-5">
                  <a
                    href="https://github.com/Rawahaahmed23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 w-1/2"
                  >
                    <FaGithub className="mx-2 text-2xl" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rawaha-ahmed-9105732ba/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-1/2"
                  >
                    <FaLinkedin className="mx-2 text-2xl" />
                    LinkedIn
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handelSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md mt-5"
                >
                  Send Message
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
