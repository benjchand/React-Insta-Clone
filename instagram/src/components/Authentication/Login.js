import React, { Component } from 'react';
import './Login.css';
import Logo from '../../img/Instagram_logo.png'

class Login extends Component {
    constructor (props) {
        super (props);
        this.state = {
            username: '',
            password: ''
        };
    }

    changeStateForUserNameAndPassword = event => {
        this.setState({ [event.target.name]: event.target.value });

    }

    loginButtonFormula = event => {
        const username = this.state.username;
        localStorage.setItem('username', username);
        window.location.reload();
    }


    render () {
        return (
            <div className = 'login-Wrapper'>
                <div className = 'login-Window'>
                    <div className = 'login-Header'>
                        Log into 
                        <img src = {Logo} className = 'instagramBrandName' alt = 'Instagram Logo' width ='100' height = '37'/>
                        Clone
                    </div>
                    <form className="login-Form Username">
                        <input 
                        className="login-Input-Username"
                        name = 'username'
                        value={this.state.username}
                        placeholder = 'Username'
                        onChange = {this.changeStateForUserNameAndPassword}
                        
                        />
                    </form>
                    <form className="login-Form Password">
                        <input 
                        className="login-Input-Password"
                        name = 'password'
                        value={this.state.password}
                        placeholder = 'Password'
                        onChange = {this.changeStateForUserNameAndPassword}
                        
                        />
                    </form>

                    <button onClick={this.loginButtonFormula}> Log In</button>
                    
                
                
                </div>
            </div>
        )
    }



}

export default Login