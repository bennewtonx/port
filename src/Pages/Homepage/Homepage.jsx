import React, { useState, useEffect } from 'react';
import loadable from '@loadable/component';
import './Homepage.css';
import Header from '../../Components/Header/Header';
import { motion, useScroll } from 'framer-motion';
import CustomScrollbar from '../../Components/CustomScrollbar/CustomScrollbar';
import { AiOutlineArrowRight} from 'react-icons/ai';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import { Link, animateScroll as scroll } from 'react-scroll'; // Import Link and scroll

const LoadableSpline = loadable(() => import('@splinetool/react-spline'));

function Homepage() {
  const { scrollY, scrollYProgress } = useScroll(); // Track scroll position and progress

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const projects = [
    {
      title: 'UniLife',
      imageSrc: '/Untitled design (1).png',
      projectUrl: 'https://strong-hamster-02ed1c.netlify.app/',
      description: 'A one-stop destination for students to find their accommodation for the next learning term using interactive filters and a regularly updated API.',
    },
    {
      title: 'Cinetrail',
      imageSrc: '/Untitled design (5).png',
      projectUrl: 'https://main--inquisitive-lokum-9fb67c.netlify.app/',
      description: 'A dynamic cinema website which shows Upcoming, Best-Selling and Most Popular movies. This will give you an in-depth review to help you book your next cinema trip!',
    },
    {
      title: 'Rick and Morty',
      imageSrc: '/Untitled design (6).png',
      projectUrl: 'https://main--teal-smakager-e827d8.netlify.app/',
      description: 'Using API this application allows users to search for all Rick and Morty characters using several filters including the ability to search the cast per episode. Features real-time updates.',
    },
    // Add more projects as needed
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const showNextProject = () => {
    // Increment the project index to show the next project
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const showPreviousProject = () => {
    // Decrement the project index to show the previous project
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <CustomScrollbar scrollYProgress={scrollYProgress} />
      <div className='homepage-container'>
        <div className='spline-container'>
          {/* This is a single line comment */}
           {/*<LoadableSpline
            className='spline'
            scene="https://prod.spline.design/W8q3kqA0LoquIU0X/scene.splinecode"
      />*/}
        </div>
        <div className='intro-text-container'>
          <h1 className='typewriter-text show'>
            Hey! My name's <span className='typewriter-text-unique'>Ben.</span> Welcome to my website!
          </h1>
        </div>
      </div>
      <div className='about-me-container'>
        <div className='about-me-text-container'>
          <h1>{"<About>"}</h1>
          <p>
            I'm a Front-End Developer from Newcastle {"(the birthplace of Greggs and Ant and Dec)."} 
            I've always had a passion for Web Design and I covered it loosely in College during 
            my Video Game Development Course! If Front-End Development has taught me anything 
            it would be that I am ridiculously addicted to Iced Coffee - I go through about 5 per day😅. 
            Aside from my caffiene addiction, I am a huge dog person, a Star Wars nerd and I'm obsessed 
            with photography - {"although I'm not a pro at it yet!"}
          </p>
          <h1>{"</About>"}</h1>
        </div>
        <div className='about-me-image-container'>
          <h3 className='about-me-text'>A snapshot into my life 📸</h3>
          <div className='about-me-image-box'>
            <img className='about-me-image-1' src='\Screenshot_20230916-184257.png' />
            <img className='about-me-image-2' src='\PXL_20220814_152855209~3.jpg' />
            <img className='about-me-image-3' src='\PXL_20220903_110357963~3.jpg' />
            <img className='about-me-image-4' src='\PXL_20220827_205549937~2.jpg' />
            <img className='about-me-image-5' src='\Screenshot_20230916-184417.png' />
            <img className='about-me-image-6' src='\original_c5a82060-d62c-4ddb-836e-c1c88cab72cf_Snapchat-1028475772.jpg' />
          </div>
        </div>
      </div>
      <div className={`projects-container project-background-${currentProjectIndex}`}>
      <div className='projects-header-container'>
        <div className={`projects-header project-text-${currentProjectIndex}`}>
          <p className='h1-up'>{"<h1>"}</p>
          <h1>My Projects</h1>
          <p className='h1-down'>{"</h1>"}</p>
        </div>
      </div>

      <div className='projects-go-here-container'>
        <div className={`project-title project-text-${currentProjectIndex}`}>
          <h1>{projects[currentProjectIndex].title}</h1>
        </div>
        <div className={`project-image-container project-text-${currentProjectIndex}`}>
        <AiOutlineArrowLeft className={`project-left-arrow project-text-${currentProjectIndex}`} onClick={showPreviousProject}/>
        <a href={projects[currentProjectIndex].projectUrl}> {/* Use the projectUrl property from your projects array */}
          <img
            className='project-image'
            src={projects[currentProjectIndex].imageSrc}
            alt={projects[currentProjectIndex].title}
          />
          </a>
                  <AiOutlineArrowRight className='project-right-arrow' onClick={showNextProject} />

        </div>

        <div className={`project-description project-text-${currentProjectIndex}`}>
          <h1>{projects[currentProjectIndex].description}</h1>
        </div>

        

      </div>

      {/* Add buttons for navigating between projects */}
      <div className='project-navigation'>
      </div>
    </div>
    <div className='contact-me-container'>
      <h1 className='getintouch'>Get in touch📩</h1>
      <div className='contact-me-flex'>
          <div className='contact-me-text'>
          <h2>If you like what you see and you have a project in mind that 
            would benefit from my services, or if you have a few questions you'd like 
            to throw me way, please do get in touch! Fill out the form on the right 
            and I'll get back to you asap!
          </h2>
          </div>
          <div className='contact-me-form'>
            <p>{"<input>"}</p>
            <div className='form-name'>
          <input type='text' placeholder='Name'/>
          </div>
          <div className='form-email'>
          <input type='text' placeholder='Email'/>
          </div>
          <div className='form-message'>
          <input type='text' placeholder='Type your message here'/>
          </div>
          <p className='input-input'>{"</input>"}</p>
          </div>
    </div>
    </div>
    </div>
  );
}

export default Homepage;
