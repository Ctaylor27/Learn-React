import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Caleb', age: '22'},
      { name: 'Stefani', age: '21'},
      { name: 'Chester', age: '4'},
    ]
  }

  render() {
    return (
      // Everything Should Be Wrapped in a Parent Div
      <div className="App"> 
        <h1>Hello, World</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>       
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I like Dragon Age</Person>  
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
};

export default App;
