import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage.js';

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
            <nav>
                
                    
                <Link to="/dashboard">Dashboard</Link>
               
                <Link to="/lists">Lists</Link>
                  
                
                {logOutButton}
                
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
