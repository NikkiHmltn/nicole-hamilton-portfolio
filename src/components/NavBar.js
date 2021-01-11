import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import logo from './imgs/default.png'
import './NavBar.css'

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
                    <div>
                        <p style={{marginLeft: "-120px", fontSize: "25px"}}>nicolehamilton.me</p>
                    </div>
                    <NavLink to="/about">
                        <p>about me</p>
                    </NavLink>
                        
                        <p>resume</p>
                        <p>projects</p>
                        <p>contact me</p>
                  
                    
                    <div>
                        <p>github here</p>
                        <p>linkedin here</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}