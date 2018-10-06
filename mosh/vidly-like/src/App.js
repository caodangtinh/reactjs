import React, {Component} from 'react';
import './App.css';
import NavBar from './components/common/NavBar';
import LeftMenu from './components/common/LeftMenu'
import MovieTable from './components/MovieTable'

import {getMovies} from './services/fakeMovieService';
import {getGenres} from './services/fakeGenreService'
import Paging from "./components/common/Paging";
import {paginate} from "./utils/Paginate";

class App extends Component {
    state = {
        movies: getMovies(),
        genres: getGenres(),
        currentSelectValue: 'all',
        currentPage: 1,
        pageSize: 5
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

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    };


    getShowingMessage() {
        let {length} = this.state.movies;
        return length > 0 ? `Showing ${length} movies in the database` : `There is no movie in the database`;
    }

    render() {
        let {movies: oMovie, currentPage, pageSize} = this.state;
        let pagingMovies = paginate(oMovie, currentPage, pageSize);
        console.log(pagingMovies);
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {/*Left menu*/}
                        <div className="col-2">
                            <LeftMenu items={this.state.genres} onFilter={this.handleFilter}
                                      currentFilter={this.state.currentSelectValue}/>
                        </div>

                        {/*main content*/}
                        <div className="col">
                            <NavBar showingMsg={this.getShowingMessage()}/>

                            <MovieTable onDelete={this.handleDelete} onLike={this.handleLike} movies={pagingMovies}/>

                            <Paging itemCount={oMovie.length}
                                    pageSize={pageSize}
                                    onPageChange={this.handlePageChange}
                                    currentPage={currentPage}/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
