import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import HeaderBar from './header-bar';
import Search from './search';
import MovieList from './movie-list';
import Lists from './lists';
import { fetchProtectedData } from '../actions/protected-data';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <section>
                <HeaderBar />
                <Lists />
                <Search />
                <MovieList />
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
