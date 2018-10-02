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

            this.movies = this.props.movies.map((movie, key) => {
                return (
                    <div>

                        <p>{movie.title}</p>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt="" />
                    </div>

                );
            });
        }

        return (
            <main>
                    {this.movies}
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
