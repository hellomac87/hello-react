import React, { Component, Fragment } from 'react';
import './App.css';

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
        <h1>Hello React</h1>
        <h2>{ condition && 'true' }</h2>
        <div style={style}></div>
      </Fragment>
    );
  }
}

export default App;
