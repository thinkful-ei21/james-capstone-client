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
            </section>
        );
    }
}
