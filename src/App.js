import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bgColor: "#fff"
    };
  }

  bgColorPicker(e) {
    this.setState({
      bgColor: e.target.value
    });
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.bgColor }}>
        <div className="colorBox">
          <h2>React</h2>
          {/* <h1 style={{ color: this.state.bgColor }}>React Color Picker</h1> */}
          <div className="Title">
            <h2 className="c">C</h2>
            <h2 className="o">O</h2>
            <h2 className="l">L</h2>
            <h2 className="o">O</h2>
            <h2 className="r">R</h2>
          </div>
          <h2> Picker</h2>
          <label>
            {/* Pick a color */}
            <input type="color" onChange={e => this.bgColorPicker(e)} />
          </label>
          <p>HEX Color code:</p>
          <p style={{ fontWeight: "bold", fontSize: "22px" }}>
            {this.state.bgColor.toLocaleUpperCase()}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
