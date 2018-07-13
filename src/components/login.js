import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { connect } from 'react-redux';
import Welcome from './welcome';
import '../styles/login.css';
import Onboarding from './onboarding';

export class LoginForm extends React.Component {
    onSubmit(values) {
        this.props
            .dispatch(login(values.username.toLowerCase(), values.password))
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
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        return (
            <div className="form-container">
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                >
                    <ul className="login-inputs">
                        <li className="login">
                            {error}
                            <label htmlFor="username">Username</label>
                        </li>
                        <li className="">
                            <Field
                                component={Input}
                                type="text"
                                name="username"
                                id="username"
                                // validate={[required, nonEmpty]}
                            />
                        </li>
                        <li className="login">
                            <label htmlFor="password">Password</label>
                        </li>
                        <li className="login">
                            <Field
                                component={Input}
                                type="password"
                                name="password"
                                id="password"
                                // validate={[required, nonEmpty]}
                            />
                        </li>
                        <li className="login">
                            <button
                                disabled={this.props.pristine || this.props.submitting}
                            >
                                Log in
                            </button>
                        </li>
                    </ul>
                </form>
                <Welcome />
                <Onboarding />
            </div>
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
