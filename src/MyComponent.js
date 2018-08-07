import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name : 'default name'
    }
    static propTypes = {
        name : PropTypes.string,
        age : PropTypes.number.isRequired
    }

    state = {
        number : 0
    }
    
    render() {
        return (
            <div>
                <p>Hello, My name is {this.props.name}</p>
                <p>Hello, My age is {this.props.age}</p>
                <p>this state number : {this.state.number}</p>
                <button
                    onClick={() => {
                        this.setState({
                            number: this.state.number + 1
                        })
                    }}>
                    Plus
                </button>
            </div>
        );
    }
}

export default MyComponent;