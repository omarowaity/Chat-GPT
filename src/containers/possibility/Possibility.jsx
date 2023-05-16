import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'
 
const Possibility = () => {
  return (
    <div className="possibility section__padding" id="possibility">
      <div className="possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque minus, molestias placeat doloremque quis sapiente consequatur illum praesentium odit rerum dolor nisi consectetur ad.</p>
      </div>
    </div>
  )
}

export default Possibility