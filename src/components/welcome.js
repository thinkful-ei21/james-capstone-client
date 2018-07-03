import React from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <Link to="/register">Register</Link>
                </ul>
            </nav>
        );
    }
}
