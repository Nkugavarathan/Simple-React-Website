import React from "react"
import { motion } from "framer-motion"
import { FaPizzaSlice, FaStar, FaHeart, FaLeaf } from "react-icons/fa"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import { useNavigate } from "react-router-dom"

const About = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "Best pizza in the city! Absolutely loved it! 🍕",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      name: "Jane Smith",
      text: "Authentic taste with fresh ingredients. 10/10!",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Michael Lee",
      text: "A true masterpiece of flavors. Highly recommended!",
      img: "https://randomuser.me/api/portraits/men/20.jpg",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const navigate = useNavigate()

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="hero-section text-center py-5 bg-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="display-4 font-weight-bold">
          Welcome to Pizza Paradise
        </h1>
        <p className="lead">
          Experience the perfect blend of flavors, handcrafted with love.
        </p>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="container my-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <p className="text-center text-muted">
          At Pizza Paradise, we are passionate about crafting the most delicious
          pizzas with the freshest ingredients and traditional recipes. Here’s
          what sets us apart:
        </p>
        <div className="row text-center">
          <div className="col-md-3">
            <motion.div whileHover={{ scale: 1.1 }} className="p-4">
              <FaPizzaSlice size={50} className="text-danger" />
              <h4>Authentic Recipes</h4>
              <p>
                Enjoy the rich taste of handcrafted pizzas made with time-tested
                recipes.
              </p>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div whileHover={{ scale: 1.1 }} className="p-4">
              <FaLeaf size={50} className="text-success" />
              <h4>Fresh Ingredients</h4>
              <p>
                We use only the freshest, highest-quality ingredients for every
                pizza.
              </p>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div whileHover={{ scale: 1.1 }} className="p-4">
              <FaStar size={50} className="text-warning" />
              <h4>5-Star Quality</h4>
              <p>
                Our commitment to excellence ensures a premium taste in every
                bite.
              </p>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div whileHover={{ scale: 1.1 }} className="p-4">
              <FaHeart size={50} className="text-primary" />
              <h4>Customer Love</h4>
              <p>
                We prioritize customer satisfaction and strive for the best
                dining experience.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="container my-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="d-flex justify-content-center flex-column align-items-center p-4"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="rounded-circle mb-3"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <p className="lead">"{testimonial.text}"</p>
              <h5>- {testimonial.name}</h5>
            </div>
          ))}
        </Slider>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="text-center py-5 bg-dark text-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Order Your Pizza Now!</h2>
        <p>
          Craving a delicious slice? Place your order now and enjoy the best
          pizza in town.
        </p>
        <button
          className="btn btn-danger btn-lg mt-3"
          onClick={() => navigate("/order")}
        >
          Order Now
        </button>
      </motion.section>
    </>
  )
}

export default About
