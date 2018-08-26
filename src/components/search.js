import React from 'react';
import { fetchMovies } from '../actions/movies';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

class Search extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const searchTerm = event.target.search.value;
        if (searchTerm) {
            this.props.dispatch(fetchMovies(searchTerm));
        }
        event.target.reset();
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)} className="search-form">
                <div>
                    <label htmlFor="search">Search</label>
                </div>
                <div>
                    <input
                        type="text"
                        name="search"
                        placeholder="Which TV show or movie are you searching for?"
                    />
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    };
};

export default requiresLogin()(connect(mapStateToProps)(Search));
