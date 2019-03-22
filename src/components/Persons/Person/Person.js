import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import classList from './Person.css';

import AuthContext from '../../../context/auth-context';

// Cannont access state.  Functions are very simple in what they do and that is the benefit.
// Larger applications should not have many state changing elements.
class Person extends Component {
  constructor(props){
    super(props)
    this.inputElementRef = React.createRef()
  }

  static contextType = AuthContext;

  componentDidMount(){
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated)
  }
  render() {
    return (
      <Aux>
        
          { this.context.authenticated ? <p>Authenticated!</p> : <p>Please login.</p>}
        
      
        <p onClick={this.props.click}>I'm a { this.props.name } and I am { this.props.age } years old!</p>
        <p>{ this.props.children }</p>
        <input 
          type="text"  
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          onChange={ this.props.changed } 
          value={ this.props.name }/>
        
      </Aux>
    )
  }  
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classList.Person);