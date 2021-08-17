import "./styles.css";
import Parent from "./Parent";
import { render } from "react-dom";

function addChild(key, value) {
  this.setState({ [key]: value + 1 });
  console.log(value);
}

export default function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          this.addChild(this.state.parent, this.state.child_count);
        }}
      >
        Add child
      </button>
      <Parent />
    </div>
  );
}
