import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name : 'default name'
    }
    render() {
        return (
            <div>
                Hello, My name is {this.props.name}
            </div>
        );
    }
}

MyComponent.propTypes = {
    name : PropTypes.string
}


export default MyComponent;