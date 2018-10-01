import React, {Component} from 'react';
import './App.css';
import Counters from './components/Counters'
import NavBar from './components/NavBar'

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    handleDelete = (id) => {
        console.log(id);
        let newCounters = this.state.counters.filter(c => c.id !== id);
        console.log(newCounters);
        this.setState({counters: newCounters});
    };

    handleIncrement = (counter) => {
        let counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index] = counter;
        counters[index].value++;
        this.setState({counters});
    };

    handleDecrement = (counter) => {
        let counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index] = counter;
        if (counters[index].value > 0) {
            counters[index].value--;
            this.setState({counters});
        }
    };

    handleReset = () => {
        let resetCounters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters: resetCounters});
    };

    getTotal() {
        return this.state.counters.filter(c => c.value > 0).length;
    }


    render() {
        return (
            <React.Fragment>
                <NavBar total={this.getTotal()}/>
                <button type="button" className="btn btn-success" onClick={() => this.handleReset()}>Reset</button>
                <Counters counters={this.state.counters}
                          onIncrement={this.handleIncrement}
                          onDecrement={this.handleDecrement}
                          onDelete={this.handleDelete}/>
            </React.Fragment>
        );
    };
}

export default App;
