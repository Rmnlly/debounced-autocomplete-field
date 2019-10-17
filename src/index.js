import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//This will be a component that takes a value from an input
//Calls the reddit/scryfall api to autocomplete/show data
//We will debounce the api calls
//The whole thing will use a custom debouncer
//We will use hooks to make this

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: []
    };
  }

  getItems(searchTerm) {
    // fetch(`${magic}?q=${searchTerm}`)
    //   .then(r => r.json())
    //   .then(r => {
    //     this.setState(() => ({
    //       items: [...r]
    //     }));
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     return [];
    //   });
    //fetch from the magic api
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <input type="text" className="input" onChange={this.handleChange} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
