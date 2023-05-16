import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi fugit in rem placeat. Laboriosam, cupiditate amet? Natus.',
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi fugit in rem placeat. Laboriosam, cupiditate.',
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi fugit in rem placeat. Laboriosam.',
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quod culpa itaque, ducimus, dignissimos unde consectetur sit nemo voluptate reiciendis tempore et nostrum! Molestias voluptate tenetur aliquid distinctio.',
  },
];

const Features = () => {
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features;
