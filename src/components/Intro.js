import React from 'react';
import './css/Intro.css'
import {Link} from 'react-router-dom'

export default function Intro() {
    return(
        <>
        <div className="intro-container">
            <div className="intro-pic">
            </div>
           
        </div>
        <div className="intro-border-outter">
            <div className="intro-border-inner">
                <h1 className="intro-head">
                    <strong>Hi there</strong>, my name is <strong>Nicole</strong>. I'm a <strong>Software Engineer</strong> from NV.
                    <br></br>
                    <h2 className="intro-text">Nice to meet you!</h2>
                </h1>
                <p>
                    <br></br>
                    <Link id="intro-link" to="/about">See My Work <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></Link>
                </p>
            </div>
        </div>
            
        </>
    )
}