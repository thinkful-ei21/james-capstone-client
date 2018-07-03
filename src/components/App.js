import React from 'react';
import MovieList from './movie-list';
import Search from './search';
import RegistrationForm from './Registration/registration';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';

export default class App extends React.Component {
    // let movieList = this.state.movies.length === 0 : <MovieList /> : '';
    render() {
        return (
            <section>
                <Router>
                    <div>
                        <Route exact path="/" component={RegistrationForm} />
                        <Route path="/search" component={Search} />
                    </div>
                </Router>
                <MovieList />
            </section>
        );
    }
}
