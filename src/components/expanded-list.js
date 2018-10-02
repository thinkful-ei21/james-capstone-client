import React from 'react';
import { connect } from 'react-redux';
import { fetchFullList } from '../actions/movies';

class ExpandedList extends React.Component {
    componentDidMount() {
        console.log('fetching movies');

        // this grabs the list id from the url
        const listId = this.props.match.params.id;

        this.props.dispatch(fetchFullList(listId));
    }

    render() {

        const { movies } = this.props;
        if (movies) {

            this.movies = this.props.movies.map(movie => {
                return (
                    <li>
                    <div>{movie.title}</div>
                    <div>{movie.year}</div>
                        <img src={movie.poster} alt="" />
                    </li>
                );
            });
        }

        return (
            <main>
                <h1>{this.props.title}</h1>
                <ul>{this.movies}</ul>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies.currentList,
    };
};

export default connect(mapStateToProps)(ExpandedList);
