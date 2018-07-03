import React from 'react';
import MovieList from './movie-list';
import Search from './search';
import RegistrationForm from './registration';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';

export default class App extends React.Component {
    render() {
        return (
            <section>
                <Router>
                    <Route component={RegistrationForm} exact path="/" />
                </Router>
                <Search />
                <MovieList />
            </section>
        );
    }
}
