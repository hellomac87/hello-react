import React, { Component, Fragment } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    const text = "are you awesome?"
    const condition = true;
    const style = {
      backgroundColor : 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) +50,
      width : Math.round(Math.random() * 300) +50,
      WebkitTransition : 'all',
      MozTransition:'all',
      msTransition :'all'
    };
    return (
      <Fragment>
        <MyComponent name='React' age={3}/>
      </Fragment>
    );
  }
}

export default App;
