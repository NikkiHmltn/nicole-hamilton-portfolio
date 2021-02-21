import React, {Component} from 'react'
import './css/Testimonials.css'

export default class Testimonials extends Component {
    render(){
        return(
            <div className="testimonials">
                <div className="testimonial">
                    <div className="test-header"> 
                    <h4> Simone Schneeberg</h4> <h6><em>(Full-Stack Engineer)</em></h6>
                    </div>
                    <div className="test-words">
                        <p><em>
                        "<strong>Nicole is an excellent team member.</strong> She is always reliable and on schedule.  She takes initiative and knows how to take suggestion and continue past it to return with something even more improved.  Anyone would be happy to have Nicole on their team."</em>
                        </p>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="test-header">
                        <h4>Daniel Alexander</h4> <h6><em>(Business Owner)</em></h6>
                    </div>
                    <div className="test-words">
                        <p>"
                            <em>
                                Working with Nicole was a pleasure. <strong>Her attentive nature and rapid response to needs as they arose was impeccable.</strong> She added her own flair into the web page to not only make it come to life, but to also exceed all expectations and requirements. I would not only recommend her services, but would gladly employ her services for future projects.
                            </em>"
                        </p>
                    </div>
                </div>
                
            </div>
        )
        
    }
}