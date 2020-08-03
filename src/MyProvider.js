import React from 'react';
import MyContext from './MyContext';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Axios from 'axios';
class MyProvider extends React.Component {

    
    state = {

    }
  
    render() {
        return (
            <MyContext.Provider value={this.state}>
                <RegistrationForm />
                <LoginForm /> 
            </MyContext.Provider>
        )
    }
}

export default MyProvider;