import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from './Welcome'
import styles from './styles/landing-page.module.css';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className={styles.div}>
                
                <h2 className={styles.title}>Welcome to Movie surfer!</h2>
                

                <Welcome />
                
                <Link to="/login" className={styles.button}>Login</Link>
            </div>
        );
    }
}
