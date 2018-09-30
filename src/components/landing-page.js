import React from 'react';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton'
import styles from './styles/landing-page.module.css';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className={styles.div}>
                
                <h2 className={styles.title}>Welcome to Movie surfer!</h2>
                
                <p>Don't have an account yet?</p>

                <RegisterButton />

                <LoginButton />
            </div>
        );
    }
}
