
import React, {Component} from "react";


export default class SignUp extends Component {

    

    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label for="validationCustom01" class="from-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required/>
                </div>
                <div className="form-group">
                    <label for="validationCustom01" class="from-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Last name" required/>
                </div>
                <div className="form-group">
                    <label for="validationCustom01" class="from-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"  required/>
                </div>
                <div className="form-group">
                    <label for="validationCustom01" class="from-label">Password</label>
                    <input type="password" className="form-control"  id="validationCustom01" placeholder="Enter password" required/>
                </div>
                <div className="form-group">
                    <label for="validationCustom01" class="from-label">Conform Password</label>
                    <input type="password" className="form-control"  id="validationCustom01" placeholder="Conform password" required/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>

 
            </form>
        );
    }
}