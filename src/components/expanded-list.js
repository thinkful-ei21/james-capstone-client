import React from 'react';
import { connect } from 'react-redux';

class ExpandedList extends React.Component {
    componentDidMount() {
        this.fetchMoviesFromList();
    }

    fetchMoviesFromList() {
        // const listId = this.props.match.params.id;
    }

    render() {
        const movieList = this.props.movies;

        const movies = movieList.map(movie => {
            return (
                <li>
                    <div>{movie.title}</div>
                    <div>{movie.year}</div>

                    <img src={movie.poster} alt="" />
                </li>
            );
        });
        return (
            <main>
                <h1>{this.props.title}</h1>
                <ul>{movies}</ul>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.listData.data,
        movies: state.listData.currentList,
        title: state.listData.title
    };
};

export default connect(mapStateToProps)(ExpandedList);
