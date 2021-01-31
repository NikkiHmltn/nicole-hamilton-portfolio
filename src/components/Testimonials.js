import React, {Component} from 'react'
import './css/Testimonials.css'

export default class Testimonials extends Component {
    render(){
        return(
            <div className="testimonials">

                <div className="test-header"> 
                    <h4> Simone Schneeburg</h4> <h6><em>(Full-Stack Engineer)</em></h6>
                </div>
                <div className="test-words">
                    <p><em>
                    "<strong>Nicole is an excellent team member.</strong> She is always reliable and on schedule.  She takes initiative and knows how to take suggestion and continue past it to return with something even more improved.  Anyone would be happy to have Nicole on their team."</em>
                    </p>
                </div>
            </div>
        )
        
    }
}