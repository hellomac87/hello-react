import React, { Component } from 'react';

class IterationSample extends Component {
    state = {
        names : ['snow man','ice','snow','wind'],
        name: '',
    }
    handleChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }
    handleInsert = () => {
        this.setState({
            names : [this.state.name,...this.state.names],
            name : ''
        })
    }
    handleRemove = (index) => {
        /*
        this.setState({
            names : [
                ...this.state.names.slice(0, index),
                ...this.state.names.slice(index + 1, this.state.names.length)
            ]
        })
        */
       const {names} = this.state;
       this.setState({
           names : names.filter((item, i) => i !==index)
       })

    }
    render() {
        const nameList = this.state.names.map(
            (name, index) => ( 
            <li 
                key={index}
                onDoubleClick={() => this.handleRemove(index)}
            >
                {name}
            </li>) 
        );
        return (
            <div>
                <input 
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <button
                    onClick={this.handleInsert}
                >
                    add
                </button>
                <ul>{nameList}</ul>
            </div>
        );
    }
}

export default IterationSample;