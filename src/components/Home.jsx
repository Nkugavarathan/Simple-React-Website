import React from "react"
import Navbar from "./Navbar"

import Footer from "./Footer"
import homeImage from "../../public/assets/images/home.jpg"
import { useNavigate } from "react-router-dom"
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"
export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div
        className="container-fluid p-0 d-flex align-items-center justify-content-center"
        style={{
          height: "100vh", // Full viewport height
          // overflow: "hidden", // Prevent scrolling
        }}
      >
        <div className="row w-100 h-100 align-items-center p-4">
          {/* Text Section */}
          <div className="col-md-6 col-sm-12 text-center text-md-start">
            <motion.h1
              className="text-center fw-bold display-3"
              style={{
                background: "linear-gradient(to right, red, yellow)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typewriter
                options={{
                  strings: ["Welcome to Jiro Pizza"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </motion.h1>
            <p className="lead text-muted">
              Indulge in the finest pizzas made with fresh ingredients, rich
              flavors, and a passion for perfection. Whether you're craving a
              classic Margherita or a loaded Meat Feast, we've got something to
              satisfy every taste.
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary btn-lg mt-3"
                onClick={() => {
                  navigate("/order")
                }}
              >
                Order Now
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="col-md-6 col-sm-12 mt-4 mt-md-0 ">
            <img
              src={homeImage}
              alt="Delicious pizza"
              className="img-fluid rounded-3 shadow-lg mb-4"
              style={{
                maxWidth: "100vw", // Ensures the image doesn't take full width
                height: "80vh", // Reduce image height to fit without scrolling
                objectFit: "cover", // Keeps the image clear
                borderRadius: "10px", // Optional rounded corners
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
