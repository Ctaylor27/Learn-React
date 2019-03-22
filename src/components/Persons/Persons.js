import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  static getDerivedStateFromProps(props, state){
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Persons.js shouldComponentUpdate')
  //   if (nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  componentDidUpdate() { //Used most often when getting data from HTTP requests
    
  }

  componentWillUnmount() {
    console.log('Persons.js component will unmount')
  }

  render() {
    return (
      this.props.persons.map((person, index) => {
        console.log('persons.js rendering...')
        return <Person
            name={person.name}
            age={person.age}
            click={() =>{this.props.clicked( index )}}
            key={ person.id } 
            changed={ (event) => {
              this.props.changed(event, person.id);
            }}/>
      })
    )
  }
}



export default Persons;