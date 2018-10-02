import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

import styles from './styles/nav.module.css';

class Nav extends React.Component {
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
            logOutButton = <a onClick={() => this.logOut()} className={styles.logout}>Log Out</a>;
        }

        return (
            <nav className={styles.nav}>
                
                    
                <Link to="/dashboard" className={styles.button}>Dashboard</Link>
               
                <Link to="/lists" className={styles.button}>Favorites</Link>
                  
                
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

export default connect(mapStateToProps)(Nav);
