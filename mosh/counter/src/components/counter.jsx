import React, { Component } from 'react';
class Counter extends Component {
    componentWillUnmount() {
        console.log('App - componentWillUnmount');
    }

    render() {
        return (
            <React.Fragment>
                <button type="button" onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary">Increment</button>
                <button type="button" className={this.getCssForCount()}>{this.displayCount()}</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
                <br />
            </React.Fragment>
        );
    }

    getCssForCount() {
        let cssClass = 'btn btn-';
        cssClass += this.props.counter.value === 0 ? 'warning' : 'primary';
        return cssClass;
    }


    displayCount() {
        let { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;