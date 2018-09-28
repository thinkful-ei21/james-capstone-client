import React from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
    render() {
        return (
            <section>
                
                <h2>Welcome to Movie surfer!</h2>
                
        
                <p>Don't have an account yet?</p>
                <Link to="/login">Login</Link>
                <Link to="/register">
                    Sign Up!
                </Link>
            </section>
        );
    }
}
