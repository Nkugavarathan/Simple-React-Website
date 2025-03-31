import React, { useEffect } from "react"
import data from "../data/index.json"

import { gsap } from "gsap" // GSAP library for animations
import ScrollTrigger from "gsap/ScrollTrigger" // ScrollTrigger plugin

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger)

export default function Order() {
  useEffect(() => {
    // Scroll animation using GSAP and ScrollTrigger for all cards
    gsap.utils.toArray(".card").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 100, // Start from 100px below (bottom to top)
          opacity: 0, // Start from 0 opacity
        },
        {
          y: 0, // End at normal position
          opacity: 1, // End with full opacity
          duration: 1.5, // Animation duration (longer for smooth transition)
          ease: "power4.out", // Smooth ease effect
          delay: index * 0.2, // Staggered delay for each card
          scrollTrigger: {
            trigger: card, // Each card is the trigger
            start: "top bottom", // Start when the top of the card hits the bottom of the viewport
            end: "bottom top", // End when the bottom of the card leaves the top of the viewport
            scrub: true, // Sync with the scroll position
            toggleActions: "play none none none", // Control the animation actions
          },
        }
      )
    })

    // Parallax effect for background
    gsap.to(".container-fluid", {
      backgroundPosition: "0% 50%", // Parallax effect for background
      scrollTrigger: {
        trigger: ".container-fluid",
        start: "top bottom", // Start the animation as soon as the container is in view
        end: "bottom top", // End when the container leaves the viewport
        scrub: true, // Sync with scroll
        ease: "none", // Ensures smooth movement without any easing
      },
    })
  }, [])

  return (
    <>
      <div
        className="container-fluid p-5"
        style={{
          background: "linear-gradient(to right, #ff9a9e, #fad0c4)", // 🎨 Gradient Colors
          minHeight: "100vh", // Full height
          padding: "20px 0",
        }}
      >
        <div className="row justify-content-center g-4">
          {data?.pizza?.map((item) => (
            <div className="col-md-4 col-lg-3 col-sm-6" key={item.id}>
              <div className="card" style={{ width: "100%" }}>
                <img src={item.src} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
