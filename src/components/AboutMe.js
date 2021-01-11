import React, {Component} from 'react'
import ContactMe from './ContactMe'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Skills from './Skills'
import NavBar from './NavBar'

export default class AboutMe extends Component {
    render(){
        return(
            <div>
                <NavBar />
                <div>
                    <h1> About Me </h1>
                    <Skills/>
                    <Testimonials/>
                    <Projects/>
                    <ContactMe />
                </div>
            </div>
        )
        
    }
}