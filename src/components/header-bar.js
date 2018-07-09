import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage.js';

class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only renders the log out button if we're logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = <button onClick={() => this.logOut()}>Log Out</button>;
        }

        return (
            <div className="header-bar">
                <h1>Welcome to Moviesufer!</h1>
                {logOutButton}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser !== null
    };
};

export default connect(mapStateToProps)(HeaderBar);
