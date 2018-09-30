import React from 'react';
import { fetchMovies } from '../actions/movies';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

import styles from './styles/search.module.css';

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
            <form onSubmit={e => this.onSubmit(e)} className={styles.container}>
                
                <label htmlFor="search"></label>        
                <input
                    type="text"
                    name="search"
                    placeholder="Which TV show or movie are you searching for?"
                    className={styles.searchBar}
                />
                
            </form>
        );
    }
}

const mapStateToProps = () => {
    return {

    };
}

export default requiresLogin()(connect(mapStateToProps)(Search));
