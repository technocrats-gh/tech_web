import React from 'react'
import "./main.css";


const Services = () => {
  return (
    <div>
      <div className="rectangle-parent1">
        <div className="group-child6" />
        <div className="repair-and-maintenance">Repair and maintenance</div>
        <b className="services-for-you">Services for you</b>
      </div>

      <div className="rectangle-group">
        {/* <div className="rectangle-div" /> */}{" "}
        {/* doesn't seem to be useful */}

        <div className="parent-container">
          <div className="ellipse-parent">
            <div className="group-inner" />
            <div className="lorem-ipsum-is1">
              <p>We create websites and web applications that are accessible via the internet to solve everyday problems facing various industries and personal needs</p>
            </div>
            <b className="diagnosis-and-adjustment">
              1. Web & App Development
            </b>
            <img className="ellipse-icon" alt="" src="/ellipse-4@2x.png" />
          </div>

          <div className="ellipse-group">
            <div className="group-inner" />
            <div className="lorem-ipsum-is1">
              <p> We use several iterative phases, including identifying the business question, collecting raw data sets, cleaning the data, analyzing the data, and interpreting the results of the analysis</p>
            </div>
            <b className="diagnosis-and-adjustment">
              2. Data Analysis & Machine Learning
            </b>
            <img className="ellipse-icon" alt="" src="/ellipse-41@2x.png" />
          </div>

          <div className="ellipse-container">
            <div className="group-inner" />
            <div className="lorem-ipsum-is1">
              <p> we implore  a combination of robotics, computer science, telecommunications, systems, control, and product engineering to help create solutions for our customers </p>
            </div>
            <b className="diagnosis-and-adjustment">
              3. Mechatronics
            </b>
            <img className="ellipse-icon" alt="" src="/ellipse-5@2x.png" />
          </div>
        </div>



        <div className="rectangle-container">
          <div className="group-item" />
          <b className="get-discount-10">Get discount 10%</b>
        </div>
      </div>
    </div>
  )
}

export default Services