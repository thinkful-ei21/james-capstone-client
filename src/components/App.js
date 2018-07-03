import React from 'react';
import MovieList from './movie-list';
import Search from './search';

export default class App extends React.Component {
    render() {
        return (
            <section>
                <Search />
                <MovieList />
            </section>
        );
    }
}
