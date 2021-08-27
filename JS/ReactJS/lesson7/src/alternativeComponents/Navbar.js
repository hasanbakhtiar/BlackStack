import React, { Component } from 'react'


export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container">
                    <a href="#" className="navbar-brand"> 
                    <i className={this.props.icon}></i>{this.props.title} 
                    </a>
                    </div>
                </nav>
            </div>
        )
    }
}



export default Navbar
