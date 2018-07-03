import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';
import '../styles/movie-list.css';

class MovieList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMovies());
    }

    render() {
        this.movies = this.props.movies.map((movie, index) => {
            return (
                <div className="movie-item" key={index}>
                    <li>{movie.Title}</li>
                    <img src={movie.Poster} alt="" />
                </div>
            );
        });
        return <ul>{this.movies}</ul>;
    }
}
const mapStateToProps = state => {
    return {
        movies: state.movies
    };
};

export default connect(mapStateToProps)(MovieList);
