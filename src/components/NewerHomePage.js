import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import SignUp from "./SignUp";

import Welcome from "./Welcome";

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: ''
    };

    handleSubmit = (userdata) => {
        API.Login(userdata)
            .then((res) => {
                if (res.status === 200) {
                    
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to Dropbox, keep sharing",
                        username: userdata.email
                    });
                    this.props.history.push("/welcome");
                } 
                else if (res.status === 404) {
                    this.setState({
                        isLoggedIn: false,
                        message: "User not found"
                    });
                }
                else if (res.status === 401){
                    this.setState({
                        isLoggedIn: false,
                        message: "Incorrect Password... Please try again!"
                    });
                }
            });
    };

    handleSignUpSubmit = (userdata) => {
        API.SignUp(userdata)
            .then((status) => {
                if (status === 200) {
                    this.setState({
                        isLoggedIn: true,
                        message: "SignUp successfull",
                        username: userdata.firstname
                    });
                    this.props.history.push("/welcome");
                }
            });
    };

    render() {
        return (
            <div className="container-fluid">
                <Route exact path="/" render={() => (
                    <div>
                        <Login handleSubmit={this.handleSubmit}/>
                        <div className="row justify-content-md-center">
                            <div className="col-md-3">
                                {this.props.message && ( 
                                    <div className="alert alert-warning" role="alert">
                                        {this.props.message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}/>
                <br/>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login handleSubmit={this.handleSubmit}/>
                        <div className="row justify-content-md-center">
                            <div className="col-md-3">
                                {this.props.message && ( 
                                    <div className="alert alert-warning" role="alert">
                                        {this.props.message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}/>
                <Route exact path="/signup" render={() => (

                    <div>
                        <SignUp handleSignUpSubmit={this.handleSignUpSubmit}/>
                        <div className="row justify-content-md-center">
                            <div className="col-md-3">
                                {this.props.message && ( 
                                    <div className="alert alert-warning" role="alert">
                                        {this.props.message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}/>
                <Route exact path="/welcome" render={() => (
                    <Welcome username={this.state.username}/>
                )}/>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);
