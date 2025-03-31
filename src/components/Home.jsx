import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import homeImage from "../../public/assets/images/home.jpg"
import { useNavigate } from "react-router-dom"
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
            <h2 className="display-4 fw-bold text-dark">
              Welcome to Jiro Pizza
            </h2>
            <p className="lead text-muted">
              Indulge in the finest pizzas made with fresh ingredients, rich
              flavors, and a passion for perfection. Whether you're craving a
              classic Margherita or a loaded Meat Feast, we've got something to
              satisfy every taste.
            </p>
            <button
              className="btn btn-primary btn-lg mt-3"
              onClick={() => {
                navigate("/order")
              }}
            >
              Order Now
            </button>
          </div>
          {/* Image Section */}
          <div className="col-md-6 col-sm-12 mt-4 mt-md-0 ">
            <img
              src={homeImage}
              alt="Delicious pizza"
              className="img-fluid rounded-3 shadow-lg mb-4"
              style={{
                maxWidth: "100vw", // Ensures the image doesn't take full width
                height: "100vh", // Reduce image height to fit without scrolling
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
