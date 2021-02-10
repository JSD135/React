import React, {Component} from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';


export default class SignUp extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: "",
    };
    componentClicked = () => console.log("You just logged in ");

    responseFacebook = (response) => {
        console.log(response);
    }

    responseGoogle = (response) => {
        console.log(response)
    }

    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                </button>
                <br></br>
                <div><FacebookLogin
                    appId="222693546169490"
                    autoLoad={true}
                    fields="name,email,picture"
                    cssClass="btn btn-primary btn-block"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                />
                </div>
                <br/>
                <div>
                    <GoogleLogin
                        clientId="643966313203-7s8kqjlohqkdqp8ge8cciafnoi2gppc6.apps.googleusercontent.com"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} className="btn btn-primary btn-block"
                            >Google Login</button>
                        )}
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        buttonText="Login"
                    />
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}
