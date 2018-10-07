import React, {Component} from 'react';
import Like from "./common/Like";

class MovieTable extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col" onClick={() => this.props.onSort("title")}>Title</th>
                        <th scope="col" onClick={() => this.props.onSort("genre.name")}>Genre</th>
                        <th scope="col" onClick={() => this.props.onSort("numberInStock")}>Stock</th>
                        <th scope="col" onClick={() => this.props.onSort("dailyRentalRate")}>Rate</th>
                        <th scope="col" onClick={() => this.props.onSort("")}>Like/Dislike</th>
                        <th scope="col" onClick={() => this.props.onSort("")}>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.movies.map((movie, key) =>
                        <tr key={key}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like movie={movie} onLike={this.props.onLike} like={movie.like}/>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger"
                                        onClick={() => this.props.onDelete(movie._id)}>Delete
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MovieTable;