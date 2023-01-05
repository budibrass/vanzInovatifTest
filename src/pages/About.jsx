import React from 'react';
import Navbar from '../components/navbar';
import './css/about/main.css';

const About = () => {
  return (
    <>
      <div className='w-100 about' style={{ minHeigth: '100vh', backgroundColor: '#f9ede0' }}>
        <Navbar />
        <section id="home">
            <div className="text-home">
              <p>Hello</p>
              <h1 className="title">I am <font color="#BF9270">Budi Santoso</font></h1>
              <p className="details">Fullstack Javascript Developer. Can use programming languages including JavaScript, Typescript, PHP, CSS, MySQL, Postgres. I also can editing multimedia, example Photo and Video with Adobe
              </p>	
            <a href='https://drive.google.com/file/d/1hM_IROyRQevGz_6zrUODf2zTTIqslXmO/view?usp=share_link' target='_blank' rel="noreferrer">
              <button className='btn btn-dark'>
                You can download my CV here
              </button>
            </a>
            </div>
        </section>
      </div>
    </>
  )
}

export default About