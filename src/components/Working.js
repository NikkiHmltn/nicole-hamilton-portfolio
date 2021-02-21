import React,{Component} from 'react'
import './css/Working.css'
import enter from './imgs/dragonhordeenter.png'
import welcome from './imgs/dragonhordewelcome.png'
import dnd from './imgs/dragonhordednd.png'
import contact from './imgs/dragonhordecontact.png'

export default class Working extends Component {
    constructor() {
        super()
        this.state ={
            visibleOne: false,
            visibleTwo: false,
            visibleThree: false,
            visibleFour: false
        }
    }
    
    handleDialogEnter = () => {
        this.setState({visibleOne: !this.state.visibleOne})
        console.log('click click!')
    }
    handleDialogWelcome = () => {
        this.setState({visibleTwo: !this.state.visibleTwo})
        console.log('click click!')
    }
    handleDialogDnd = () => {
        this.setState({visibleThree: !this.state.visibleThree})
        console.log('click click!')
    }
    handleDialogContact = () => {
        this.setState({visibleFour: !this.state.visibleFour})
        console.log('click click!')
    }


    
    render(){
       return(
        <>
            <div className="title-skills">
                    <h2> Current Projects </h2>
                </div>

            <div className="working-on-info">
                <p><em>The Dragon's Horde</em> is an information page for a local business that is a work in progress. It utilizes ReactJS as a front with EmailJS for the contact page. I'm working closely with clients to fulfill their needs for a website for their shop while they are setting up their store physically. Information is still being added, so it is <strong>not yet mobile responsive</strong> while we still work on design details and client desires as their needs change.</p>
                <p>If you want to see the work in progress, you can view the live link <a href="https://thedragonshordeslt.netlify.app">HERE</a> and the Github <a href="https://github.com/NikkiHmltn/dragonshorde">Repo</a>. This has been shared with permission from the clients.</p>
            </div>
            {this.state.visibleOne && (
                <dialog className="dialog" style={{position: "absolute", zIndex: "1"}} open onClick={this.handleDialogEnter}>
                    <img src={enter} onClick={this.handleDialogEnter} alt="The Dragon's Horde Enter" />
                </dialog>
            )}
            {this.state.visibleTwo && (
                <dialog className="dialog" style={{position: "absolute", zIndex: "1"}} open onClick={this.handleDialogWelcome}>
                    <img src={welcome} onClick={this.handleDialogWelcome} alt="The Dragon's Horde Welcome" />
                </dialog>
            )}
            {this.state.visibleThree && (
                <dialog className="dialog" style={{position: "absolute", zIndex: "1"}} open onClick={this.handleDialogDnd}>
                    <img src={dnd} onClick={this.handleDialogDnd} alt="The Dragon's Horde Dnd" />
                </dialog>
            )}
            {this.state.visibleFour && (
                <dialog className="dialog" style={{position: "absolute", zIndex: "1"}} open onClick={this.handleDialogContact}>
                    <img src={contact} onClick={this.handleDialogContact} alt="The Dragon's Horde Contact" />
                </dialog>
            )}
            <div class="card-container">
            
                <div class="card card-one" onClick={this.handleDialogEnter}>
                    
                </div>
                <div class="card card-two" onClick={this.handleDialogWelcome}>
                    
                </div>
                <div class="card card-three" onClick={this.handleDialogDnd}>
                    
                </div>
                <div class="card card-four" onClick={this.handleDialogContact}>
                    
                </div>
            </div>
            
        </>
    ) 
    }
    
}