import React from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component {
    render() {
        return (
            <section>
                
                <h2>Welcome to Movie surfer!</h2>
                
        
                <p>Don't have an account yet?</p>
                
                <Link to="/register">
                    Sign Up!
                </Link>
            </section>
        );
    }
}
