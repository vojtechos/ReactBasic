import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component{

  state = {
    counter: 0
  }

  updateCounter = () => {
    let { counter } = this.state;

    this.setState({
      counter: ++counter
    });
  }

  render() {
    let { counter } = this.state;

    return(
      <div class="container">
        <img id="cookie" src="/cookie.png" alt="cookie.png" onClick={this.updateCounter}/>
        <p id="info">Cookies: {counter}</p>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("root"));