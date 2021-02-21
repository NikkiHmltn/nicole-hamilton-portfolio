import React, {Component} from 'react'
import {Element} from 'react-scroll'
import ContactMe from './ContactMe'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Skills from './Skills'
import NavBar from './NavBar'
import Working from './Working'
import './css/AboutMe.css'
import me from './imgs/selfie.jpeg'

export default class AboutMe extends Component {
    render(){
        return(
            <div>
                <NavBar />
                <div className="main-content">
                    <Element className="about-section" id="about-section">
                        <div className="about-me" id="about-me">
                        <img src={me} width="150" height="150" style={{borderRadius: "50%"}}/>
                        <h1 className="about-title"> About Me </h1>
                        <p >I’m a software engineer passionate about connecting humanity through empathy and technology; everyone has a different story to tell, and I want to provide that service to people through my coding. I strive to create organized and meaningful code through stubborn determination and creativity. With a background in Humanities and civil service, I provide critical thinking to projects and strive for team connection and communication to get the job done.
                        </p>
                        <p>
                            I enjoy working with collaborative teams to develop meaningful and fun applications for people to use. While I am a proficient full-stack developer, my expertise is utilizing a PERN stack (API services, user-friendly React front-end). Hard engineering problems are always a fun challenge to tackle on my own, but I really enjoy and thrive working with a team that strives for communication and meaningful applications to benefit society as a whole. I'm looking for a full-stack engineering role where I can take on team collaboration, and gain experience with team leadership and project management. 
                        </p>
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
                    <div>
                        <Working />
                    </div>
                    <Element className="contact-section" id="projects-section">
                        <ContactMe />
                    </Element>
                    
                    
                </div>
            </div>
        )
        
    }
}