import React, { Component } from "react";
import "./App.css";
import GenerateSimpson from "./GenerateSimpson";
import DisplaySimpson from "./DisplaySimpson";

const sampleSimpson = {
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      simpson: sampleSimpson
    };
  }
  getSimpson() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          simpson: data[0]
        });
      });
  }
  render() {
    return (
      <div className="App">
        <GenerateSimpson selectSimpson={() => this.getSimpson()} />
        <DisplaySimpson simpson={this.state.simpson} />
      </div>
    );
  }
}

export default App;
