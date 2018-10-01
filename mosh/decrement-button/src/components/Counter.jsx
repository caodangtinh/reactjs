import React, {Component} from 'react';

class Counter extends Component {
    getCssDisplay() {
        let cssClass = 'btn btn-';
        cssClass += this.props.counter.value === 0 ? 'warning' : 'primary';
        return cssClass;
    }

    displayValue() {
        let {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    render() {
        return (
            <React.Fragment>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <button type="button" className={this.getCssDisplay()}>{this.displayValue()}</button>
                        </td>
                        <td>
                            <button type="button" onClick={() => this.props.onIncrement(this.props.counter)}
                                    className="btn btn-secondary">+
                            </button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-secondary"
                                    onClick={() => this.props.onDecrement(this.props.counter)}>-
                            </button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger"
                                    onClick={() => this.props.onDelete(this.props.counter.id)}>Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Counter;