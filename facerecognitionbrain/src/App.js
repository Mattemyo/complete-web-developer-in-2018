import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";

// Clarifai
const app = new Clarifai.App({
  apiKey: "cc741137316e41959f142ef979ac9819"
});

const particlesOptions = {
  particles: {
    line_linked: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }
};

class App extends Component {
  // set state when input changes
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  onInputChange = e => alert(e.target.value);

  onButtonSubmit = () => {
    app.models
      .predict(
        Clarifai.COLOR_model,
        "a403429f2ddf4b49b307e318f00e528b",
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function(response) {
          // do something with response
        },
        function(err) {
          // there was an error
        }
      );

    console.log("click");
  };

  render() {
    return (
      <div className="App">
        {/* Background */}
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
