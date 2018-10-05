import React, {Component} from 'react';
import './App.css';
import Movie from './components/Movie';
import NavBar from './components/NavBar';
import LeftMenu from './components/LeftMenu'

import {getMovies} from './services/fakeMovieService';
import {getGenres} from './services/fakeGenreService'

class App extends Component {

    state = {
        movies: [],
        genres: [],
        currentSelectValue: '',
        currentPage: 1
    };

    componentDidMount() {
        this.setState({movies: getMovies(), genres: getGenres(), currentSelectValue: 'all'})
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
        let copyMovies = getMovies();
        if ('all' === genre) {
            this.setState({movies: copyMovies});
        } else {
            const filter = copyMovies.filter(m => m.genre.name === genre);
            this.setState({movies: filter});
        }
        this.setState({currentSelectValue: genre});
        this.setState({currentPage: 1});

    };


    getShowingMessage() {
        let {length} = this.state.movies;
        return length > 0 ? `Showing ${length} movies in the database` : `There is no movie in the database`;
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <LeftMenu items={this.state.genres} onFilter={this.handleFilter}
                                      currentFilter={this.state.currentSelectValue}/>
                        </div>
                        <div className="col">
                            <NavBar showingMsg={this.getShowingMessage()}/>
                            <Movie currentPage={this.state.currentPage} movies={this.state.movies}
                                   onDelete={this.handleDelete}
                                   onLike={this.handleLike}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
