import React, { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import contactImage from "../../public/assets/images/contact.jpg" // Correct Import
import { gsap } from "gsap" // GSAP for animations
import { motion } from "framer-motion" // For motion animations

export default function Contact() {
  const [validated, setValidated] = useState(false) // Form validation state

  // GSAP Scroll animation for image section (Image Section comes from left)
  React.useEffect(() => {
    gsap.fromTo(
      ".contact-image",
      { opacity: 0, x: -200 }, // Start from left
      {
        opacity: 1,
        x: 0, // End at normal position
        duration: 1.5,
        ease: "power4.out",
      }
    )
  }, [])

  // Framer Motion animation for form section (Form Section comes from right)
  const formMotion = {
    initial: { x: 200, opacity: 0 }, // Start from right
    animate: { x: 0, opacity: 1 }, // End at normal position
    transition: { duration: 1.5 }, // Smooth transition
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      // You can handle form submission logic here
      alert("Form submitted successfully!")
    }
    setValidated(true)
  }

  return (
    <>
      <Navbar />
      <div className="container contact-section">
        <div className="row">
          <h2 className="text-center text-primary mb-4">Contact Us</h2>
        </div>

        <div className="row mt-5">
          {/* Image Section (GSAP animation - Image comes from the left) */}
          <div className="col-md-6 contact-image">
            <img
              src={contactImage}
              alt="contactimage"
              className="img-fluid"
              style={{
                width: "100%",
                height: "80%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          {/* Form Section (Framer Motion - Form comes from the right) */}
          <motion.div
            className="col-md-6 col-sm-12"
            initial={formMotion.initial}
            animate={formMotion.animate}
            transition={formMotion.transition}
          >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Name" />
                <Form.Control.Feedback type="invalid">
                  Please enter your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Enter your message</Form.Label>
                <Form.Control as="textarea" rows={3} required />
                <Form.Control.Feedback type="invalid">
                  Please enter a message.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-2">
                Submit
              </Button>
            </Form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  )
}
