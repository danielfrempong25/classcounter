import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Class-Counter</h1>
        <div className="btns">
          <button onClick={this.decrement}>decrement</button>
          <span>{this.state.count}</span>
          <button onClick={this.increment}>increment</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
