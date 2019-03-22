import React, { Component } from 'react';
import classList from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js constructor')
  }

  state = {
    persons: [
      { id: '0', name: 'Caleb', age: 22},
      { id: '1', name: 'Stefani', age: 21},
      { id: '2', name: 'Chester', age: 4},
      { id: '3', name: 'Olive', age: 1},
    ],
    showCockpit: true,
    showPersons: false,
    changeCounter: 0,
    authenticated: false,
  };

  //Handler is used to denote an event handler
  switchNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p  => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons, 
        changeCounter: prevState.changeCounter + 1,
      }
    })
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

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log('app.js render')

    // This is checked everytime the DOM is updated
    let persons = null;
    if (this.state.showPersons){ // Can use if statement outside of return because its not jsx
    
      persons = (
        
        <Persons
          persons={this.state.persons}
          clicked= {this.deletePersonHandler}
          changed={this.switchNameHandler} 
          isAuthenticated={this.state.authenticated}/>
        
      )

      
    }

    let cockpit = null;

    if (this.state.showCockpit){
      cockpit = 
        <Cockpit 

          title={this.props.appTitle}
          showPersons={this.state.showPersons} 
          personsLength={this.state.persons.length} 
          click={this.togglePersonsHandler} />
    }
    
    return (
    
      // Everything Should Be Wrapped in a Parent div

      // The bind method is a better way then the Arrow function
      
      <Aux classes={classList.App}> 
        {/* This is the prefered way to render conditional content */}
        <button onClick={ () => { this.setState({showCockpit: !this.state.showCockpit})  }}>click</button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          {cockpit}
          {persons}
        </AuthContext.Provider>
      </Aux>
      
      
    );
  }
};

export default withClass(App, classList.App);
