import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import HeaderBar from './header-bar';
import Search from './search';
import MovieList from './movie-list';

class Dashboard extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <section>
                <HeaderBar />
                <Search />
                <MovieList />
            </section>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
