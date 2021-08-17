import React from "react";
//import ReactDOM from 'react-dom'

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: 0,
      count: 0
    };
  }
  addChild(key, value) {
    this.setState({ [key]: value + 1 });
    console.log(value);
  }
  removeChild(key, value) {}
  handleCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <>
        <p>{this.state.child_count}</p>
        <button
          onClick={() => {
            this.addChild(this.state.parent, this.state.child_count);
          }}
        >
          Add child
        </button>
        <br />
        <br />
        <button onClick={() => this.handleCount()}>+</button>
        <button
          onClick={() => {
            this.removeChild(this.state.parent, this.state.child_count);
          }}
        >
          X
        </button>
        <p>Counter : {this.state.count}</p>
      </>
    );
  }
}
export default Parent;
