import React, { Component } from 'react';
import classList from './App.css';
import Person from './Person/Person';

class App extends Component {
  // The only things that update the DOM are state (classes) and props (functions)
  state = {
    persons: [
      { id: '0', name: 'Caleb', age: '22'},
      { id: '1', name: 'Stefani', age: '21'},
      { id: '2', name: 'Chester', age: '4'},
      { id: '3', name: 'Olive', age: '1'},
    ]
  }
  //Handler is used to denote an event handler
  switchNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p  => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons})
  }

  // Always try to update state in an immutable way
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); // It is better to make a copy of data as apposed to making a pointer
    // OR const persons = [...this.state.persons]; // It is better to make a copy of data as apposed to making a pointer
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {


    // This is checked everytime the DOM is updated
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons){ // Can use if statement outside of return because its not jsx
    
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={ person.id } 
                changed={ (event) => {
                  this.switchNameHandler(event, person.id);
                }}
                  />
          })}
        </div> 
      )

      btnClass = classList.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push( classList.red );
    } 

    if (this.state.persons.length <= 1) {
      classes.push( classList.bold );
    }
    return (
    
      // Everything Should Be Wrapped in a Parent div

      // The bind method is a better way then the Arrow function
      
      <div className={classList.App}> 
        <h1>Hello, World</h1>
        <button 
          onClick={this.togglePersonsHandler}
          className={btnClass}
          >Toggle Persons</button>
          
        {persons}
        {/* This is the prefered way to render conditional content */}
        <p className={classes.join(' ')}>This is really working!</p>
      </div>
      
      
    );
  }
};

export default App;
