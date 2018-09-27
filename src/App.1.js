import React, { Component } from 'react';
import './App.css';
import StarshipList from './starshipList.js';
import SearchBox from './searchBox.js';
import Selection from './Selection.js';
import Particles from 'react-particles-js';
import PersonsList from './personsList';
import PlanetList from './planetList';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
    }
  },
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      results : [],
      planets : [],
      films : [],
      species : [],
      vehicles : [],
      starships : [],
      searchfield : '',
      route:'selection',
    };
  }

  onButtonSelection = (route) => {
    this.setState({route: route});
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const {results,searchfield,route} = this.state;
    const resultsFiltered = results.filter(result => {
      return result.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if(this.state.route !== 'selection'){
      fetch(`https://swapi.co/api/${this.state.route}/`)
    .then(response => response.json())
    .then(data => this.setState({results:data.results}));
    }
    switch (route) {
      case 'selection':
        return(
          <div className="tc">
          <Particles className='particles'
            params={particlesOptions}
          />
            <h1 className='f1'>Star Wars</h1>
            <h2 className='f3 pt3'>Search through your favorite Star Wars Categories!</h2>
            <Selection onButtonSelection={this.onButtonSelection}/>
          </div>
        )
      case 'people':
        return(
          <div className="tc">
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favorite people!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <PersonsList people={resultsFiltered}/>
          </div>
        );
      case 'planets':
        return(
          <div className="tc">
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favorite planet!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <PlanetList planets={resultsFiltered}/>
          </div>
        );
      case 'films':

      case 'species':

      case 'vehicles':

      case 'starships':
        return(
          <div className="tc">
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favorite starship!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <StarshipList starships={resultsFiltered}/>
          </div>
        );
    }

    if (route === 'home'){
      
    }

    
  }
}

export default App;
