import React from 'react';
import './Skills.css'

const Skills = () => {
  return (
    <div className='skills-container'>
      <div className="app">
        <header>
          <h1>Infinite Scroll Animation</h1>
          {/* <p>CSS only, content independent, bi-directional, customizable</p> */}
          {/* <p>This is the React-less version of <a href="https://codepen.io/ykadosh/pen/KKezJzz">this pen</a></p> */}
        </header>
        <div className="tag-list">
          <div className="loop-slider" style={{ "--duration": "15951ms", "--direction": "normal" }}>
            <div className="inner">
              <div className="tag"><span>#</span> JavaScript</div>
              <div className="tag"><span>#</span> webdev</div>
              <div className="tag"><span>#</span> Typescript</div>
              <div className="tag"><span>#</span> Next.js</div>
              <div className="tag"><span>#</span> UI/UX</div>
            </div>
          </div>
          <div className="loop-slider" style={{ "--duration": "19260ms", "--direction": "reverse" }}>
            <div className="inner">
              <div className="tag"><span>#</span> webdev</div>
              <div className="tag"><span>#</span> Gatsby</div>
              <div className="tag"><span>#</span> JavaScript</div>
              <div className="tag"><span>#</span> Tailwind</div>
              <div className="tag"><span>#</span> Typescript</div>
            </div>
          </div>
          <div className="loop-slider" style={{ "--duration": "10449ms", "--direction": "normal" }}>
            <div className="inner">
              <div className="tag"><span>#</span> animation</div>
              <div className="tag"><span>#</span> Tailwind</div>
              <div className="tag"><span>#</span> React</div>
              <div className="tag"><span>#</span> SVG</div>
              <div className="tag"><span>#</span> HTML</div>
            </div>
          </div>
          <div className="loop-slider" style={{ "--duration": "16638ms", "--direction": "reverse" }}>
            <div className="inner">
              <div className="tag"><span>#</span> Gatsby</div>
              <div className="tag"><span>#</span> HTML</div>
              <div className="tag"><span>#</span> CSS</div>
              <div className="tag"><span>#</span> React</div>
              <div className="tag"><span>#</span> Next.js</div>
            </div>
          </div>
          <div className="loop-slider" style={{ "--duration": "15936ms", "--direction": "normal" }}>
            <div className="inner">
              <div className="tag"><span>#</span> Next.js</div>
              <div className="tag"><span>#</span> React</div>
              <div className="tag"><span>#</span> webdev</div>
              <div className="tag"><span>#</span> Typescript</div>
              <div className="tag"><span>#</span> Gatsby</div>
            </div>
          </div>
          <div className="fade"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
