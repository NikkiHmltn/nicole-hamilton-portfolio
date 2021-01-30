import React, {Component} from 'react'
import './css/Projects.css'
import projectOne from './imgs/projectone.png'
import projectTwo from './imgs/projecttwo.png'
import projectThree from './imgs/projectthree.png'

export default class Projects extends Component {
    render(){
        return(
            <div>

                <div>
                    <h1> Projects </h1>
                </div>
                <div className="project-one">
                    <img src={projectOne} />
                    <div style={{float: "left", padding: "5em"}}>
                        <h4>textRPG</h4>
                        <p>
                            A fun and silly text adventure game made with vanilla Javascript. 
                        </p>
                    </div>
                </div>
                <br></br>
                <div className="project-two">
                    <img src={projectTwo} />
                </div>
                <br>
                </br>
                <div className="project-three">
                    <img src={projectThree} />
                </div>
                <br></br>
                <br></br>
            </div>
        )
        
    }
}