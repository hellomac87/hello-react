import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from'./App.css';

const cx = classNames.bind(styles);

console.log(styles);

class App extends Component {
  render() {
    const isBlue = false;
    return (
      <Fragment>
       <div className={cx('box',{
         blue : isBlue
       })}>

       </div>
      </Fragment>
    );
  }
}

export default App;
