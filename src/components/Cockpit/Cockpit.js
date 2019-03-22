import React, { useEffect, useRef, useContext } from 'react';
import classList from './Cockpit.css';
import AuthContext from '../../context/auth-context';



const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  
  

  useEffect(() => {
    // Http request...
    setTimeout(() => {
      toggleBtnRef.current.click();
    }, 1000)
    return () => {
      console.log('Cockpit.js clean up')
    }
  }, []);

  useEffect(() => {
    return () => {
      console.log('Cockpit.js 2nd clean up')
    }
  })
  const classes = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classList.Red;
  }

  if (props.personsLength <= 2) {
    classes.push( classList.red );
  } 

  if (props.personsLength <= 1) {
    classes.push( classList.bold );
  }

  return (
    <div className={classList.Cockpit}>
      <h1>{props.title}</h1>
      <button 
        ref={toggleBtnRef}
        onClick={props.click}
        className={btnClass}
        >Toggle Persons</button>
        
        <button onClick={authContext.login}>Log in</button>
            
        
        
      <p className={classes.join(' ')}>This is really working!</p>
    </div>
  )
}

export default React.memo(cockpit);