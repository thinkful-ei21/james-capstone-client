import React from 'react';
import { Link } from 'react-router-dom';

import buttonStyles from './styles/button.module.css';

export default function Register(props) {

    return (
        <React.Fragment>

            <Link to="/register" className={buttonStyles.button}>
                Sign Up
            </Link>




        </React.Fragment>
    );
}