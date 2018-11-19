import React, { Component } from 'react';
import { Button } from '../../shared';

class Home extends Component {
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
        <div className="row">
          <div className="col-12">Welcome to Attrecto Academy</div>
          <div className="col-12">Counter: {this.state.counter}</div>
          <div className="col-12">
            <Button onClick={this.increaseCounter}>Increase</Button>
            <Button styleType="secondary" onClick={this.decreaseCounter}>
              Decrease
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
