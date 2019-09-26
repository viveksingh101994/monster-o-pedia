import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ""
    };
  }

  async componentDidMount() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await result.json();
    this.setState({ monster: users });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monster, searchField } = this.state;
    const filteredMonsters = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster-o-Pedia</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
