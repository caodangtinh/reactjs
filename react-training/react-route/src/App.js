import React, { Component} from 'react';
import {Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <div>
            <Route path="" component={}/>
        </div>
      </div>
    );
  }
}

export default App;