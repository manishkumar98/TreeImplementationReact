import React from "react";
//import ReactDOM from 'react-dom'

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: 0,
      count: 0
      // f: 0
    };
  }
  addChild(key, value) {
    this.setState({ [key]: value + 1 });
    //this.setState({ f: 1 });
    console.log(value);
  }

  handleCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <>
        <p>{this.state.child_count}</p>

        <br />
        <br />
        <button onClick={() => this.handleCount()}>+</button>

        <p>Counter : {this.state.count}</p>
      </>
    );
  }
}

export default Parent;
/*
{
<button
          onClick={() => {
            this.addChild(this.state.parent, this.state.child_count);
          }}
        >
          Add child
        </button>
}

*/
