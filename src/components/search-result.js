import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovie } from '../actions/add';
import { clearState } from '../actions/search';

import styles from './styles/search-result.module.css';

class SearchResult extends React.Component {
    addMovie(e, movie) {
        e.preventDefault();
        const movieId = movie.imdbID;
        const listId = e.target.listOption.value;
        const year = movie.Year;
        const title = movie.Title;
        const poster = movie.Poster;

        // Here you're going to dispatch the function
        // that adds the movie to the list.
        this.props.dispatch(addMovie(movieId, listId, year, title, poster));
    }

    componentWillUnmount() {
        this.props.dispatch(clearState());
    }

    render() {
        const { lists, movies } = this.props;

        if (lists) {
            this.lists = lists.map((list, index) => {
                return (
                    <React.Fragment>

                            <option key={index} value={list.id}>
                                {list.title}
                            </option>
                    </React.Fragment>
                );
            });
        }
        
        if (movies) {
            this.movies = movies.map((movie, index) => {
                    return (
                        <form
                            className={styles.form}
                            key={index}
                            onSubmit={e => this.addMovie(e, movie)}
                            >
                            <Link to={`/search/${movie.imdbID}`}>
                                <h3 className={styles.movieTitle}>{movie.Title}</h3>

                                <img src={movie.Poster} alt="" width="200" />
                            </Link>
                            
                            <select name="listOption" className={styles.select}>{this.lists}</select>
                            
                            <button className={styles.button} type="submit">
                                Add movie to favorites
                            </button>
    
    
                        </form>
                    );
                });
        }
        

        return (
            <div className={styles.container}>
                {this.movies}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        movies: state.movies.movies,
        error: state.movies.error,
        lists: state.movies.lists
    };
};

export default connect(mapStateToProps)(SearchResult);
