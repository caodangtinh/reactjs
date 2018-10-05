import React, {Component} from 'react';
import Like from './Like';
import Paging from "./Paging";

import {paginate} from '../utils/Paginate'

class Movie extends Component {
    state = {
        pageSize: 5,
        currentPage: this.props.currentPage
    };

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    };

    render() {
        let {pageSize} = this.state;
        let moviess = paginate(this.props.movies, this.state.currentPage, pageSize);
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Like/Dislike</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {moviess.map((movie, key) =>
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
                <Paging itemCount={this.props.movies.length}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={this.state.currentPage}/>
            </div>
        );
    }
}

export default Movie;