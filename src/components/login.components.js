import React, { Component } from "react";
export default class Login extends Component {
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Log In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Enter email"  
                    onChange={this.handlechange}
                    required/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                    className="form-control" 
                    placeholder="Enter password" 
                    onChange={this.handlechange}
                    required/>
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit"  onSubmit={this.handleSubmit} className="btn btn-primary btn-block">Submit</button>
                
            </form>
        );
    }

}