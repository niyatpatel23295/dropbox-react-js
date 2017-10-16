import React, {Component} from 'react';
import * as API from '../api/API';

class HomePage extends Component {

    state = {
        userdata: {
            username: '',
            password: ''
        },
        isLoggedIn: false,
        message: ''
    };

    handleSubmit = () => {
        API.Login(this.state.userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to Dropbox, Keep Sharing!"
                    });
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Incorrext Username or Password"
                    });
                }
            });
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        <form>
                            <div className="form-group">
                                <h1>Login</h1>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Username"
                                    placeholder="Enter Username"
                                    value={this.state.userdata.username}
                                    onChange={(event) => {
                                        this.setState({
                                            userdata: {
                                                ...this.state.userdata,
                                                username: event.target.value
                                            }
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="password"
                                    label="password"
                                    placeholder="Enter Password"
                                    value={this.state.userdata.password}
                                    onChange={(event) => {
                                        this.setState({
                                            userdata: {
                                                ...this.state.userdata,
                                                password: event.target.value
                                            }
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={() => this.handleSubmit()}>
                                        Submit
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        {this.state.message && (
                            <div className="alert alert-warning" role="alert">
                                {this.state.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;