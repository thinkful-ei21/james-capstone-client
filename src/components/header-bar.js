import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage.js';
import '../styles/header-bar.css';

class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }
        // Only renders the log out button if we're logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = <button onClick={() => this.logOut()}>Log Out</button>;
        }

        return (
            <nav className="header-bar">
                <ul>
                    <li className="button">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="button">
                        <Link to="/lists">Lists</Link>
                    </li>
                    <li className="title">
                        <h1>Welcome to Moviesurfer!</h1>
                    </li>
                    <li className="button">{logOutButton}</li>
                </ul>
            </nav>
        );
    }
}
const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser !== null
    };
};

export default connect(mapStateToProps)(HeaderBar);
