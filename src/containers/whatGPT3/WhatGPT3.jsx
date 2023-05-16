import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="whatgpt3 section__margin" id="wgpt3">
      <div className="whatgpt3-feature">
        <Feature title="What is GPT-3" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eaque repudiandae voluptatibus repellendus enim nesciunt optio corporis facilis fuga amet reprehenderit est, quod ad unde ducimus incidunt placeat sed voluptatem!" />
      </div>
      <div className="whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>

      <div className="whatgpt3-container">
        <Feature title="Chatbots" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eaque repudiandae voluptatibus" />
        <Feature title="Knowledgebase" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eaque repudiandae voluptatibus repellendus enim nesciunt optio corporis facilis fuga amet reprehenderit est" />
        <Feature title="Education" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eaque repudiandae voluptatibus repellendus enim nesciunt optio corporis facilis" />
      </div>
    </div>
  )
}

export default WhatGPT3
