import React, {Component} from 'react'
import './css/Skills.css'

export default class Skills extends Component {
    render(){
        return(
            <div>
                <h2 style={{borderBottom: 'solid 2px black'}}> Skills </h2>
                <div class="skills-box">
                    
                    <div className="front-skills">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                    </svg>
                        <h4 style={{borderBottom: 'solid 2px black', padding: '13px'}}>Frontend</h4>
                            <h4>HTML</h4>
                            <h5>CSS</h5>
                            <h6>SASS</h6>
                            <h3>Bootstrap</h3>
                            <h6>Express</h6>
                            <h4>JavaScript</h4>
                            <h3>ReactJS</h3>
                            <h6>Wordpress</h6>
                       
                    </div>
                    <div className="backend-skills">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-diagram-3" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                    </svg>
                    <h4 style={{borderBottom: 'solid 2px black', padding: '13px'}}>Backend</h4>
                        <h6>MVC Pattern</h6>
                        <h6>API's</h6>
                        <h6>Git</h6>
                        <h4>CRUD</h4>
                        <h5>Django</h5>
                        <h3>PostgreSQL</h3>
                        <h4>MongoDB</h4>
                        <h4>Python</h4>
                        <h6>Mongoose</h6>
                        <h6>Socket.io</h6>
                        <h5>NodeJS</h5>
                        <h6>Mongoose</h6>
                    </div>
                    <div className="other-skills">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                    <h4 style={{borderBottom: 'solid 2px black', padding: '13px'}}>Others</h4>
                        
                            <h6>CLI</h6>
                            <h6>Wireframing</h6>
                            <h3>User Stories</h3>
                            <h6>Github</h6>
                            <h4>Authentication</h4>
                            <h6>ERD</h6>
                            <h6>Object Oriented Programming</h6>
                            <h6>Team Coordination</h6>
                            <h4>Project Management</h4>
                            <h6>Agile/Scrum</h6>
                        
                    </div>
                </div>
            </div>
        )
        
    }
}
