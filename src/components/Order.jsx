import React from "react"
import data from "../data/index.json"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Order() {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid p-5"
        style={{
          background: "linear-gradient(to right, #ff9a9e, #fad0c4)", // 🎨 Gradient Colors
          minHeight: "100vh", // Full height
          padding: "20px 0",
        }}
      >
        <div className="row justify-content-center g-4 ">
          {data?.pizza?.map((item, index) => (
            <div className="col-md-4 col-lg-3 col-sm-6 " key={index}>
              <div className="card" style={{ width: "100%" }}>
                <img src={item.src} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
