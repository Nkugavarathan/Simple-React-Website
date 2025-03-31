import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Order from "./components/Order"
import About from "./components/About"
import Contact from "./components/Contact"
export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="order" element={<Order />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
