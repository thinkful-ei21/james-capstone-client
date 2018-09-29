import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/landing-page.module.css';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className={styles.div}>
                
                <h2 className={styles.title}>Welcome to Movie surfer!</h2>
                
        
                <p>Don't have an account yet?</p>
                <Link to="/register" className={styles.button}>
                    Sign Up!
                </Link>
                
                <Link to="/login" className={styles.button}>Login</Link>
            </div>
        );
    }
}
