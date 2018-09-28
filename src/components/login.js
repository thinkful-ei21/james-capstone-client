import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

import loginStyles from './styles/login.css'

export class LoginForm extends React.Component {
    submit(e, word) {
        const username = e.target.username.value;
        const password = e.target.password.value;       
        e.preventDefault();

        this.props
            .dispatch(login({ username, password })) 
            .then(() => this.props.history.push('/dashboard'));
    }

    componentDidMount() {
        // keep an eye on this, it might break
        // if (this.props.hasAuthToken) {
        //     this.props.history.push('/dashboard');
        // }
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        return (
            <header className={loginStyles.header}>
                <form
                    className={loginStyles.form}
                    onSubmit={(e) => this.submit(e)}
                >
    
                    {error}

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />

                    <button 
                    // disables the button when it has not been touched
                    // and when it is submitting
                    className={loginStyles.button}
                    >
                        Log in
                    </button>

     
                </form>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        hasAuthToken: state.auth.authToken !== null,
        loggedIn: state.auth.currentUser !== null,
        error: state.auth.error
    };
};

LoginForm = connect(mapStateToProps)(LoginForm);

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
