import React from 'react';
import MovieList from './movie-list';

export default class App extends React.Component {
    onSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <section>
                <form onSubmit={e => this.onSubmit(e)}>
                    <label htmlFor="search">Search</label>
                    <input
                        type="text"
                        name="search"
                        placeholder="Which movie are you searching for?"
                    />
                    <button type="submit">Submit</button>
                </form>
                <MovieList />
            </section>
        );
    }
}
