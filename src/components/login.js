import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import Welcome from './welcome';

export class LoginForm extends React.Component {
    onSubmit(values) {
        console.log('login button clicked');
        this.props.dispatch(login(values.username, values.password));
    }

    render() {
        return (
            <div>
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}
                >
                    {/* <label htmlFor="username">Username</label>
                <input type="text" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <button type="submit">Log in</button> */}
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
                        disabled={this.props.pristine || this.props.submitting}
                    >
                        Log in
                    </button>
                </form>
                <Welcome />
            </div>
        );
    }
}

// const mapStateToProps = state => {};

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
