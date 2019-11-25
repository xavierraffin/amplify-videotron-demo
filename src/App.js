import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.authState == "signedIn") {
      return (
        <div>
          <h1>Logged in</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Not logged in</h1>
        </div>
      );
    }
  }
}

export default App;
