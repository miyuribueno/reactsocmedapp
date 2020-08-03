import React from 'react';
import Axios from 'axios';
class RegistrationForm extends React.Component {
    
    state = {
        username: '',
        password: '',
        confirmPassword: ''
    }

    registerHandler = (regDetails)=> {
        if(regDetails.username.trim() === '' || regDetails.password.trim() === '' || regDetails.confirmPassword.trim() === ''){
            alert("please fill up the form");
        }else {
            Axios.post('http://localhost:8080/users/register', regDetails)
            .then(res => {
                if(res.data.error){
                    alert(res.data.error);
                }else {
                    alert("Registered!")
                    this.resetState();
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

    confirmPasswordInputHandler = (event)=> {
        this.setState({
            confirmPassword: event.target.value
        });
    };
       
    render(){
        const regDetails = {
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
           
        return (
            <div className="form">
                <h1 className="title">Registration</h1>
                <label>Username </label><input type="text" value={this.state.username} name="registrationForm" onChange={this.usernameInputHandler}/>
                <label>Password </label><input type="password" value={this.state.password} name="registrationForm" onChange={this.passwordInputHandler}/>
                <label>Confirm Password </label><input type="password" value={this.state.confirmPassword} name="registrationForm" onChange={this.confirmPasswordInputHandler}/>
                <button className="formBtn" onClick={(e)=>{this.registerHandler(regDetails)}}>Register</button>
                <p>Already registered?</p>
            </div>
        )
    }
}

export default RegistrationForm;