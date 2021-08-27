import React, { Component } from 'react'

class User extends Component {

    render() {
        const {login,avatar_url,html_url} = this.props.user;
        return (
            <div>
                
                <div className="card ">
                        
                            <img src={avatar_url} alt="img" className="img-fluid"/>
                        
                        
                            <div className="card-body">
                                <h5 className="card-title">{login}</h5>
                                <a href={html_url} className="btn btn-primary btn-sm">Go Profile</a>
                            </div>
                        </div>
                </div>
            
        )
    }
}

export default User
