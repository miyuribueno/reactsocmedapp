import React from 'react';
import Axios from 'axios';
class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    loginHandler = (loginDetails)=> {
        if(loginDetails.username.trim() === '' || loginDetails.password.trim() === ''){
            alert("please fill up the form");
        }else {
            Axios.post('http://localhost:8080/users/login', loginDetails)
            .then(res => {
                if(res.data.error){
                    alert(res.data.error);
                }else {
                    alert(`Welcome ${res.data.username}`)
                }
            })
        }
        
    }

    resetState = ()=> {
        this.setState({
            username: '',
            password: '',
            confirmPassword: ''
        })
    }

    usernameInputHandler = (event)=> {
        this.setState({
            username: event.target.value
        });
    };

    passwordInputHandler = (event)=> {
        this.setState({
            password: event.target.value
        });
    };

    render(){
        const loginDetails = {
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        return (
            <div className="form">
            <h1 className="title">Login</h1>
            <label>Username </label><input type="text" value={this.state.username} name="registrationForm" onChange={this.usernameInputHandler}/>
            <label>Password </label><input type="password" value={this.state.password} name="registrationForm" onChange={this.passwordInputHandler}/>
            <button className="formBtn" onClick={(e)=>{this.loginHandler(loginDetails)}}>Login</button>
            <p>Not yet registered?</p>
        </div>
        )
    }
}

export default LoginForm;