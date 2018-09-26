import React, { Component } from 'react';
import './App.css';
import StarshipList from './starshipList.js';
import SearchBox from './searchBox.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starships : [],
      searchfield : ''
    };
  }

  componentDidMount() {
    fetch(`https://swapi.co/api/starships/`)
    .then(response => response.json())
    .then(data => this.setState({starships:data.results}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const {starships,searchfield} = this.state;
    const shipListFiltered = starships.filter(ship => {
      return ship.name.toLowerCase().includes(searchfield.toLowerCase());
    });


    return !starships.length ?
        <h1>Loading</h1>
        :
        (
          <div className="tc">
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favorite starship!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <StarshipList starships={shipListFiltered}/>
          </div>
        );
  }
}

export default App;
