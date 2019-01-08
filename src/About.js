import React from 'react';
import './App.css';

const About = ({visibility, handleAboutClick}) => {
  return (
    <div
      className="About"
      style={ visibility ? {display: 'flex'} : {display: 'none'}}
      onClick={ handleAboutClick }>
        <h1>Star Wars App</h1>
        <h3>A project for ZeroToMastery course</h3>
        <hr/>
        <p>
          As part of <strong>Andrei Neagoie</strong>'s course, I built this simple page App, using <strong>ReactJS</strong> and <strong>SWAPI</strong>. Basic functionality at the moment. Hope to enhance it eventually...
        </p>
        <footer>
          <h4>Follow me:</h4>
          <div className="links">
            <a href="https://twitter.com/wbkpablo" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://github.com/pablowbk" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://codepen.io/pablowbk/" target="_blank" rel="noopener noreferrer">CodePen</a>
          </div>
        </footer>
        <button>click to close</button>
    </div>
  )
}

export default About;
