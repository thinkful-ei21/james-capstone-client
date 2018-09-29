import React from 'react';
import { Link } from 'react-router-dom';

import buttonStyles from './styles/button.module.css';

export default function LoginButton(props) {

    return (
        <Link to="/login" className={buttonStyles.button}>Login</Link>
    );
}