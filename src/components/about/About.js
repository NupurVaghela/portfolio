import React from 'react'

import './about.css';

const About = () => {
  return (
    <div className='about' id='about' >

      <div className='left'>
        <div className='img-container'>
          <img src="assets/mypic.jpg" alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>About Me</h1>
        <br />
        <div className='wrapper'>
          <p> I am Nupur Vaghela currently on my final year of Bachelor Engineering in Computer
            at Government Engineering college modasa. I am trying to learn programming languages like:
            python with djnago and ReactJs, recently i collaborated with two companies, where i had two weeks internship and it was a great experience.
          </p>
        </div>
        <div className='techskill'>
          <u> My Technical Skills :- </u>
          <ul>
            <li className='skill' >Html</li>
            <li className='skill'>Css </li>
            <li className='skill'>JavaScript</li>
            <li className='skill'>React</li>
            <li className='skill'>Android</li>
            <li className='skill'>Python</li>
          </ul>
        </div>
        <div>
        <a href="#work" target="">
          <button className="workbtn">My Work</button>
          </a>
        </div>
      </div>
    </div >
  )
}

export default About
