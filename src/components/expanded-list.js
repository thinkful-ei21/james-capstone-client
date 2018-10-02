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

        console.log(movies);

        const { movies } = this.props;
        if (movies) {

            this.movies = this.props.movies.map((movie, key) => {
                return (
                    <React.Fragment>

                    <div>{movie.title}</div>
                    <div>{movie.year}</div>
                        <img src={movie.poster} alt="" />
                    </React.Fragment>
                );
            });
        }

        return (
            <main>
                <ul>
                    {this.movies}
                </ul>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies.currentList
    };
};

export default connect(mapStateToProps)(ExpandedList);
