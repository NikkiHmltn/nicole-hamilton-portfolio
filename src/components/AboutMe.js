import React, {Component} from 'react'
import {Element} from 'react-scroll'
import ContactMe from './ContactMe'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Skills from './Skills'
import NavBar from './NavBar'
import './css/AboutMe.css'
import me from './imgs/selfie.jpg'

export default class AboutMe extends Component {
    render(){
        return(
            <div>
                <NavBar />
                <div className="main-content">
                    <Element className="about-section" id="about-section">
                        <div className="about-me" id="about-me">
                        <img src={me} width="150" height="150" style={{borderRadius: "50%"}}/>
                        <h1> About Me </h1>
                        <p >I’m a software engineer passionate about connecting humanity through empathy and technology; everyone has a different story to tell, and I want to provide that service to people through my coding. I strive to create organized and meaningful code through stubborn determination and creativity. With a background in Humanities and civil service, I provide critical thinking to projects and strive for team connection and communication to get the job done.</p>
                    </div>
                    </Element>
                    <div className="testimonial-section">
                        <Testimonials/>
                    </div>
                    <div className="skills-section">
                        <Skills/>
                    </div>
                    <Element className="projects-section" id="projects-section">
                        <Projects/>
                    </Element>
                    <Element className="contact-section" id="projects-section">
                        <ContactMe />
                    </Element>
                    
                    
                </div>
            </div>
        )
        
    }
}