import React, { useState, useEffect } from 'react';
import './Homepage.css';
import { motion, useScroll } from 'framer-motion';
import CustomScrollbar from '../../Components/CustomScrollbar/CustomScrollbar';
import { AiOutlineArrowRight} from 'react-icons/ai';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import { MailSlurp } from 'mailslurp-client';
import axios from 'axios';
import ScrollAnimation from '../../Components/ScrollAnimation';
import ScrollAnimationMiddle from './../../Components/ScrollAnimationMiddle';
import ScrollAnimationLeft from '../../Components/ScrollAnimationLeft';
const API_KEY = "654272a82c6d2028a417e366a63d8bc04d4badd1492d3b04784f3c2899385932";

function Homepage() {

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const inbox1 = await createInbox();
  
    const emailData = {
      senderId: inbox1.id,
      to: "your@mailslurp.com",
      subject: formData.subject,
      body: formData.message,
    };
  
    axios({
      method: "POST",
      url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
      data: emailData,
    })
      .then((response) => {
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
  
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  async function createInbox() {
    try {
      const response = await axios.post(`https://api.mailslurp.com/createInbox?apiKey=${API_KEY}`);
      const inbox = response.data;
      console.log(`Created inbox with email address: ${inbox.emailAddress}`);
      return inbox;
    } catch (error) {
      console.error('Error creating inbox', error);
    }
  }

  async function receiveEmail() {
    try {
      const email = await axios.get(`https://api.mailslurp.com/waitForLatestEmail?apiKey=${API_KEY}&inboxId=${inbox2.id}`);
      console.log('Received email:', email.data);
    } catch (error) {
      console.error('Error receiving email', error);
    }
  }


  const { scrollY, scrollYProgress } = useScroll(); // Track scroll position and progress

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

//Projects
  const projects = [
   {
      title: 'Paint Perfection',
      imageSrc: '/Untitled design (11).png',
      projectUrl: 'https://main--paint-perfection.netlify.app/',
      description: 'Explore the vibrant world of Paint Perfection. Immerse yourself in a symphony of colors and emotions. Discover captivating landscapes, portraits, and abstract creations.',
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
//Add more projects as needed
  ];

//Allows projects to be changed
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const showNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const showPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <CustomScrollbar scrollYProgress={scrollYProgress} />

      <div className='homepage-container'>
        <ScrollAnimationMiddle threshold={0.5}>
        <div className='intro-text-container'>
          <h1 className='typewriter-text show'>
            Hey! My name's <span className='typewriter-text-unique'>Ben.</span> Welcome to my website!
          </h1>
        </div>
        </ScrollAnimationMiddle>
      </div>
      <div className='about-me-container'>
      <ScrollAnimation threshold={0.5}>
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
        </ScrollAnimation>
        <ScrollAnimationLeft threshold={0.5}>
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
        </ScrollAnimationLeft>
      </div>
      <div className={`projects-container project-background-${currentProjectIndex}`}>
      <ScrollAnimationMiddle threshold={0.5}>
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
      </ScrollAnimationMiddle>
      <div className='project-navigation'>
      </div>
    </div>
    <div className='contact-me-container'>
    <ScrollAnimationMiddle threshold={0.5}>
        <h1 className='getintouch'>Get in touch</h1> 
    </ScrollAnimationMiddle>
        <div className='contact-me-flex'>
        <ScrollAnimation threshold={0.5}>
          <div className='contact-me-text'>
            <h2>If you like what you see and you have a project in mind that 
              would benefit from my services, or if you have a few questions you'd like 
              to throw my way, please do get in touch! Fill out the form on the right 
              and I'll get back to you asap!
            </h2>
          </div>
          </ScrollAnimation>
          <ScrollAnimationLeft threshold={0.5}>
          <div className='contact-me-form'>
            <form onSubmit={handleSubmit}>
              <p>{"<input>"}</p>
              <div className='form-name'>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-email'>
            <input
              type='text'
              placeholder='Recipient Email'
              name='subject'
              value={formData.subject}
              onChange={handleInputChange}
            />
              </div>
              <div className='form-message'>
                <input
                  type='text'
                  placeholder='Type your message here'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <p className='input-input'>{"</input>"}</p>
              <button className='submit-button'type='submit'>Submit</button> {/* Add a Submit button */}
            </form>
          </div>
          </ScrollAnimationLeft>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
