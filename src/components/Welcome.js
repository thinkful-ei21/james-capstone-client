import React from 'react';
import { Link } from 'react-router-dom';

import buttonStyles from './styles/button.module.css';

export default function Welcome(props) {

    return (
        <React.Fragment>

            <p>Don't have an account yet?</p>
            <Link to="/register" className={buttonStyles.button}>
                Sign Up!
            </Link>
        </React.Fragment>
    );
}