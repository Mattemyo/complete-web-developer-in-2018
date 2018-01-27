import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from'./Scroll'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  // after mounting. if it is called, render will be called again since state has been set
  componentDidMount() {
    // request api info
    fetch("https://jsonplaceholder.typicode.com/users")
      //convert to json
      .then(res => res.json())
      // setState with new data from api
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    event.preventDefault();
    //   Update state (input field changes)
    this.setState({ searchfield: event.target.value });
  };

  render() {
    //   new array with matching robots
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    // if request is slow
    // ternary operator depending on length of array
    return this.state.robots.length === 0 ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
