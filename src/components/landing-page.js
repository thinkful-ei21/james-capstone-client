import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/landing-page.module.css';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className={styles.div}>
                
                <h2>Welcome to Movie surfer!</h2>
                
        
                <p>Don't have an account yet?</p>
                <Link to="/login">Login</Link>
                <Link to="/register">
                    Sign Up!
                </Link>
            </div>
        );
    }
}
