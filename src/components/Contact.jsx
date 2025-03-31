import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import contactImage from "../../public/assets/images/contact.jpg" // Correct Import

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <h2 className="text-center text-primary mt-3">Contact Us</h2>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              src={contactImage}
              alt="contactimage"
              className="img-fluid"
              style={{ width: "100%", height: "80%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6 col-sm-12 ">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Enter your message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
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
