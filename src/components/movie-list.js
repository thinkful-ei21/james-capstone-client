import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';
import '../styles/movie-list.css';
import { addMovie } from '../actions/add';
// import $ from 'jquery';
// import { SingleMovie } from './single-movie';

class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();
    }
    componentDidMount() {
        this.props.dispatch(fetchMovies());
    }

    addMovie(e, movie) {
        e.preventDefault();
        const movieId = movie.imdbID;
        console.log(movieId);
        const listId = e.target.listOption.value;

        // Here you're going to dispatch the function
        // that adds the movie to the list.
        this.props.dispatch(addMovie(movieId, listId));
    }

    render() {
        console.log(this.props.lists);
        const lists = this.props.lists.map((list, index) => {
            return (
                <option key={index} value={list.id}>
                    {list.title}
                </option>
            );
        });

        const movies = this.props.movies.map((movie, index) => {
            // return <SingleMovie />;
            return (
                <form
                    className="movie-item"
                    key={index}
                    onSubmit={e => this.addMovie(e, movie)}
                >
                    <li>{movie.Title}</li>
                    <img src={movie.Poster} alt="" />
                    <select ref={this.input} name="listOption">
                        {lists}
                    </select>
                    <button className="add-movie" type="submit">
                        Add movie to List
                    </button>
                </form>
            );
        });

        return <ul>{movies}</ul>;
    }
}
const mapStateToProps = state => {
    return {
        movies: state.movies.movies,
        error: state.movies.error,
        lists: state.listData.data
    };
};

export default connect(mapStateToProps)(MovieList);
