import React from 'react';
import './App.css';
import MyProvider from './MyProvider';
class App extends React.Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <div id="mainContainer">
            <h1>Social Media App</h1>
            <MyProvider />
          </div>
        </header>
      </div>
    );
}
}

export default App;
