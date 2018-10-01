import React, { Component } from 'react';
import Counter from '../components/counter'
class Counters extends Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.onReset()} className="btn btn-primary btn-sm m-2">Reset</button>
                <br></br>
                {this.props.counters.map((counter, index) =>
                    <Counter key={index} counter={counter}
                        onDelete={() => this.props.onDelete(counter.id)}
                        onIncrement={() => this.props.onIncrement(counter)}>
                    </Counter>
                )}
            </React.Fragment>
        );
    }

}

export default Counters;