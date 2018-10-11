import React from 'react';
import { Button } from './components';
import NavBar from './components/navbar/Navbar';

class App extends React.Component {
  state = {
    counter: 0,
  };

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="container">
        <NavBar/>
        <div>Welcome to Attrecto Academy</div>
        <div>Counter: {this.state.counter}</div>
        <Button onClick={this.increaseCounter}>Increase</Button>
        <Button styleType="secondary" onClick={this.decreaseCounter}>
          Decrease
        </Button>
      </div>
    );
  }
}

export default App;
