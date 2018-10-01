import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Counters from './components/counters'

class App extends Component {

  constructor() {
    super();
    console.log('App - constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('App - componentDidUpdate');
  }

  
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ]
  }

  handleIncrement = counter => {
    let counters = [...this.state.counters];;
    let index = counters.indexOf(counter)
    counters[index] = counter;
    counters[index].value++;
    this.setState({ counters });
  }
  handleDelete = (id) => {
    let counters = this.state.counters.filter(c => !(c.id === id));
    this.setState({ counters });
  }

  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log('App - Render');
    return (
      <React.Fragment>
        <NavBar total={this.state.counters.filter(c => c.value > 0).length} />
        
        <main role="main" className="container">
          <Counters counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement} />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
