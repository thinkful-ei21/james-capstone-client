import React from 'react';
import { connect } from 'react-redux';

class ExpandedList extends React.Component {
    componentDidMount() {
        console.log('fetching movies');
        this.fetchMoviesFromList();
    }

    fetchMoviesFromList() {
        // const listId = this.props.match.params.id;
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
        lists: state.listData.data,
        movies: state.movies.currentList,
        title: state.listData.title
    };
};

export default connect(mapStateToProps)(ExpandedList);
