import React, { Component } from 'react';
import { throws } from 'assert';

class EventPractice extends Component {
    state = {
        username :'',
        message : '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ' : ' + this.state.message);
        this.setState({
            username :'',
            message : ''
        });
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h2>Event Practice</h2>
                <input 
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="message"
                    placeholder="something input"
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>
                    확인
                </button>
            </div>
        );
    }
}

export default EventPractice;