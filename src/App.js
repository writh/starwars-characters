import React, { Component } from 'react';
import axios from'axios';
import './App.css';
import Button from './components/Button';
import './components/Button.css';

class App extends Component {
  state = {
    count: 0,
    name:'',
    hair_color:'',
    height:'',
    birth_year: '',
    gender: '',
    characters:[],
    planets: []
  };
  
  inputs = [


    {
      label: 'Name',
      property: 'name'
    },
    {
      label: 'Hair Color',
      property: 'hair_color'
    },
    {
      label: 'Height',
      property: 'height'
    },
    {
      label: 'Birth Year',
      property: 'birth_year'
    },
    {
      label: 'Gender',
      property: 'gender'
    }
  ];

  componentWillMount() {
    axios.get('https://swapi.co/api/people/')
    .then (response => {
      this.setState({
        characters: [
          ...response.data.results
        ]
      })
    })
    .catch(err => console.warn(err));

    axios.get('https://swapi.co/api/planets/')
    .then (response => {
      this.setState({
        planets: [
          ...response.data.results
        ]
      })
    })
    .catch(err => console.warn(err));
  }

  render() {
    const characterList = this.state.characters
      .map((c, i) => (
        <li key={`character-list-${i}`}>
          { c.name } | {c.hair_color} | {c.height} | {c.birth_year} | {c.gender}
        </li>
      ))

      const planetList = this.state.planets
      .map((p, i) => (
        <li key={`Planet-list-${i}`}>
          { p.name } | {p.rotation_period} | {p.orbital_period} | {p.diameter} | {p.gravity} | {p.population}
        </li>
      ))


      const inputs = this.inputs.map((input, i) =>
    <div key={`new-character-form-${i}`}>
      <label>
        {input.label}:
        <input 
        type="text" 
        value={this.state[input.property]} 
        onChange={e =>this.handleChange(e, input.property)} 
        name={input.property} />
      </label>
    </div>)

    return (
      <div className="App">
      <form name="add-character-form">
        
        {/* <label>
          Name:
          <input type="text" value={this.state.name} onChange={e => this.handleChange(e, 'name')} name="name"/>
        </label>

        <label>
          Affilliation:
          <input type="text" value={this.state.affilliation} onChange={e => this.handleChange(e, 'affilliation')} name="affilliation"/>
        </label>
        
        <label>
          Home Planet:
          <input type="text" value={this.state.homePlanet} onChange={e => this.handleChange(e, 'homePlanet')} name="homePlanet"/>
        </label> */}
      {inputs}
        
        <button class="my-button" type="submit" onClick={e => this.handleSubmit(e)}>
        Submit
        </button>
      
      </form>

     <ul>
        {characterList}
        
      </ul>
      <ul>
        {planetList}
      </ul>
      </div>
    );
  }

 handleChange(event, name) {
    const value = event.target.value
    this.setState({
      [name]: value });
  }
  
  handleSubmit(e) {
    e.preventDefault();

    const {name, hair_color, height, birth_year, gender} = this.state;

    const characters = [
      ...this.state.characters,
      {name, hair_color, height, birth_year, gender}
    ];
    this.setState({ characters,
    name:'',
    hair_color:'',
    height:'',
    birth_year:'',
    gender:''
    });
  }

  

  addOne() {
    this.setState({
      count: this.state.count + 1
    });
  }
}

export default App;
