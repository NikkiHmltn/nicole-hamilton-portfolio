import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from './imgs/default.png'
import {Link} from 'react-scroll'
import './css/NavBar.css'


export default function Nav() {
    return(
        <div >
            <nav className="navbar navbar-light bg-light" >
                <div className="container-fluid" id="nav-bar">
                    <div className="pic-wrapper">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" width="70" height="70" id="nav-bar-pic"className="d-inline-block align-top" style={{borderRadius: "50%"}}/>
                        </Link>
                    </div>
                    <div className="nav-title">
                        <p style={{marginLeft: "-120px", fontSize: "25px"}}>nicolehamilton.me</p>
                    </div>
                    <div className='navbar-nav mx-auto resume' >
                        <NavLink to="/resume">
                            <p>resume</p>
                        </NavLink>
                    </div>
                    <div className='navbar-nav mx-auto about'>
                    <Link 
                        to="about-section"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="about-scroll"
                        activeClass="about-scroll-active"
                        >
                            <p>about me</p>
                        </Link>
                    </div>
                    <div className="navbar-nav mx-auto project">
                        <Link 
                            to="projects-section"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="project-scroll"
                            activeClass="project-scroll-active"
                            >
                            <p>projects</p>
                        </Link>
                    </div>
                    <div className="navbar-nav mx-auto contact">
                        <Link 
                            to="contact-section"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="contact-scroll"
                            activeClass="contact-scroll-active"
                            >
                            <p>contact me</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}