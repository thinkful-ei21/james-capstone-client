import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './Input';
import { login } from '../actions/auth';
import { connect } from 'react-redux';
import Welcome from './welcome';

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
            <main>
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                >

                            {error}
                            <label htmlFor="username">Username</label>

                            <Field
                                component={Input}
                                type="text"
                                name="username"
                                id="username"
                                // validate={[required, nonEmpty]}
                            />

                            <label htmlFor="password">Password</label>

                            <Field
                                component={Input}
                                type="password"
                                name="password"
                                id="password"
                                // validate={[required, nonEmpty]}
                            />


                            <button
                                // disables the button when it has not been touched\
                                // and when it is submitting
                                disabled={this.props.pristine || this.props.submitting}
                            >
                                Log in
                            </button>

                    
                </form>

                <Welcome />
            </main>
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
