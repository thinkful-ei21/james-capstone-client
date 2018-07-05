import React from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component {
    render() {
        return (
            <section>
                <p>Don't have an account yet?</p>
                <Link to="/register">
                    <button>Sign Up</button>
                </Link>
            </section>
        );
    }
}
