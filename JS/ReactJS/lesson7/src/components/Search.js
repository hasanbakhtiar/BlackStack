import React, { Component } from 'react'

export class Search extends Component {

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            keyword : ''
        }
    }

    onChange(e){
        this.setState({
            keyword: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.searchUsers(this.props.keyword);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="container my-3">
                        <div className="input-group">
                            <input type="text" className="form-control" onChange={this.onChange} />
                            <div className="input-group-append">
                                <button className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search
