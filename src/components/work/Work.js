import "./Work.css";
import React from 'react';

const Work = () => {
  return (
    
  
      <div className='cards' id='work'>
        <div>
        <h1>My Work</h1>
      </div>
        <div className='card'>
          <img src='assets/coviddata.jpg' alt="" className='card__img' />
          <div className='card__info'>
            <span className='card__category'>COVID DATA</span>
            <p className='card__text'>This is small project created using REACTJS ,which includes statewise covid cases . It also shows active cases , confirm cases , Deaths because of corona etc , I used API to display this data." </p>
            <a href="https://github.com/NupurVaghela/covidproj" target="_blank">
              <button>View Source code</button>
            </a>
          </div>
        </div>

        <div className='card'>
          <img src='assets/netflix.png' alt="" className='card__img' />
          <div className='card__info'>
            <span className='card__category'>NETFLIX KOREAN-DRAMA</span>
            <p className='card__text'>This is the small project which i created  using REACTJS ,which is used to open korean dramas using apis.</p>
            <a href="https://github.com/NupurVaghela/netflixproj" target="">
              <button >View Source code</button>
            </a>
          </div>
        </div>

        <div className='card'>
          <img src='assets/counterr.jpg' alt="" className='card__img' />
          <div className='card__info'>
            <span className='card__category'>COUNTER</span>
            <p className='card__text'>In this small project i have created increment decrement counter.in whick  whenever zero limit reached, it will show you alert message.</p>
            <a href="https://github.com/NupurVaghela/counter" target="_blank">
              <button>View Source code</button>
            </a>
          </div>
        </div>
      </div>
  
  )
}

export default Work