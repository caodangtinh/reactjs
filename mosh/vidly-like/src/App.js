import React, {Component} from 'react';
import './App.css';
import Movie from './components/Movie';
import NavBar from './components/NavBar';

import {getMovies} from './services/fakeMovieService';

class App extends Component {

    state = {
        movies: getMovies()
    };

    handleDelete = (id) => {
        let newMovies = this.state.movies.filter(m => m._id !== id);
        this.setState({movies: newMovies});
    };

    handleLike = (movie) => {
        let movies = [...this.state.movies];
        let index = movies.indexOf(movie);
        let {like} = movies[index];
        like ? movies[index].like = false : movies[index].like = true;
        this.setState({movies});
    };

    getShowingMessage() {
        let {length} = this.state.movies;
        return length > 0 ? `Showing ${length} movies in the database` : `There is no movie in the database`;
    }

    render() {
        return (
            <div>
                <NavBar showingMsg={this.getShowingMessage()}/>
                <Movie movies={this.state.movies} onDelete={this.handleDelete} onLike={this.handleLike}/>
            </div>
        );
    }
}

export default App;
