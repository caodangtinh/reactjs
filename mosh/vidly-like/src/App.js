import React, {Component} from 'react';
import './App.css';
import Movie from './components/Movie';
import NavBar from './components/NavBar';
import LeftMenu from './components/LeftMenu'

import {getMovies} from './services/fakeMovieService';
import {getGenres} from './services/fakeGenreService'

class App extends Component {

    state = {
        movies: getMovies(),
        genres: getGenres()
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

    handleFilter = (genre) => {
        console.log(genre);
        let copyMovies = getMovies();
        if ('all' === genre) {
            console.log('set all data');
            console.log(copyMovies);
            this.setState({movies: copyMovies});
        } else {
            console.log('set filter ' + genre);
            const filter = copyMovies.filter(m => m.genre.name === genre);
            console.log(filter);
            this.setState({movies: filter});
        }

    };

    getShowingMessage() {
        let {length} = this.state.movies;
        return length > 0 ? `Showing ${length} movies in the database` : `There is no movie in the database`;
    }

    render() {
        return (
            <main role="main" className="container">
                <div>
                    <NavBar showingMsg={this.getShowingMessage()}/>
                    <Movie movies={this.state.movies} onDelete={this.handleDelete} onLike={this.handleLike}/>
                    <LeftMenu items={this.state.genres} onFilter={this.handleFilter}/>
                </div>
            </main>
        );
    }
}

export default App;
