import React from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component {
    render() {
        return (
            <section>
                <Link to="/register">
                    <button>Sign Up</button>
                </Link>
                <p>Don't have an account yet?</p>
                
                <h2>Welcome to Movie surfer!</h2>
                <p>Love movies, TV or video games?</p>
                <p>Love listifying things?</p>
                <p>Just love the internet?!</p>
                <p>Then you're in the right place!</p>

                <h3>With Movie Surfer you can:</h3>
                <ul>
                    <li>Create lists of movies, TV shows or videos games</li>
                    <li>Share the list with friends</li>
                    <li>Sort through and rank your lists.</li>
                </ul>
        
            </section>
        );
    }
}
