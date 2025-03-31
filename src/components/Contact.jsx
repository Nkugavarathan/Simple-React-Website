import React, { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import contactImage from "../../public/assets/images/contact.jpg" // Correct Import
import { gsap } from "gsap" // GSAP for animations
import ScrollTrigger from "gsap/ScrollTrigger" // ScrollTrigger plugin

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [validated, setValidated] = useState(false) // Form validation state

  // GSAP Scroll animation for contact section
  React.useEffect(() => {
    gsap.fromTo(
      ".contact-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    )
  }, [])

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
          <h2 className="text-center text-primary  mb-4">Contact Us</h2>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
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

          <div className="col-md-6 col-sm-12">
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
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
