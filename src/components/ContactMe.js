import React, {Component} from 'react'
import './css/ContactMe.css'

export default class ContactMe extends Component {
    render(){
        return(
            <div className="contact-content">

                <div>
                    <h3 className="contact-title"> Contact</h3>
                </div>
                <div className="form-holder">
                    <form action="emailto:nikkihmltn1@yahoo.com"  id="contact-form" method="POST">
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control" />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <input type="email" placeholder="Email" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Message" rows="5"></textarea>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>
                </div>
                
            </div>
        )
        
    }
}