import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <React.Fragment>
        <p>{this.printTotalMovie()}</p>
        {this.renderTable()}
      </React.Fragment>
    );
  }

  printTotalMovie() {
    let { length } = this.state.movies;
    if (length === 0) return 'There are no movie in the database';
    return 'Showing ' + length + ' in the database';
  }

  handleDelete = id => {
    let movies = this.state.movies.filter(m => !(m._id === id));
    this.setState({ movies });
  }

  renderTable() {
    if (this.state.movies.length === 0) return;
    return (<table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {this.state.movies.map((m, index) => (
          <tr key={index}>
            <td>{m.title}</td>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <button onClick={() => this.handleDelete(m._id)} type="button" className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>)
  }
}

export default Movie;
