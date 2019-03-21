import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // The only things that update the DOM are state (classes) and props (functions)
  state = {
    persons: [
      { name: 'Caleb', age: '22'},
      { name: 'Stefani', age: '21'},
      { name: 'Chester', age: '4'},
    ]
  }
  //Handler is used to denote an event handler
  switchNameHandler = (newName) => {
    // console.log('was clicked')
    // DONT DO THIS this.state.persons[0].name = "Caleb Taylor";
    this.setState( {
      persons: [
        { name: newName, age: '22'},
        { name: 'Stefani', age: '21'},
        { name: 'Chester', age: '5'},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Caleb', age: '22'},
        { name:  event.target.value, age: '21'},
        { name: 'Chester', age: '5'},
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
    
      // Everything Should Be Wrapped in a Parent div

      // The bind method is a better way then the Arrow function

      <div className="App"> 
        <h1>Hello, World</h1>
        <button 
          style ={style}
          onClick={() => this.switchNameHandler('The Saviour')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed = {this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, "Charlie")}
          />       
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed = {this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, "Charlie")}>I like Dragon Age</Person>  
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Charlie")}
          changed = {this.nameChangedHandler}
          />
      </div>
    );
  }
};

export default App;
