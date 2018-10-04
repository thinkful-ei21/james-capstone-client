import React from 'react';
import { connect } from 'react-redux'; 
import { reduxForm, Field } from 'redux-form';
import Input from './input';
import {
    required,
    atLeastThree,
    atLeastEight,
    isValidEmail,
    emailTooLong,
    passwordsMatch
} from './validators';
import { registerUser } from '../actions/users';

class RegistrationForm extends React.Component {
    onSubmit(values) {
        const { username, password, email } = values;
        const user = { username, password, email };
        return (
            this.props
                .dispatch(registerUser(user))

                // this.props.dispatch(login(username, password));
                .then(() => this.props.history.push('/dashboard'))
        );
    }

    render() {
        if (this.props.loading) {
            return <h1>Loading...</h1>
        }

        return (
                <form
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                >
                    <Field
                        name="username"
                        type="text"
                        component={Input}
                        label="Username"
                        validate={[required, atLeastThree]}
                    />
                    <Field
                        name="email"
                        type="text"
                        component={Input}
                        label="Email"
                        // // Add an element prop to change the type of input
                        // element="select"
                        validate={[required, isValidEmail]}
                    />
                    <Field
                        name="password"
                        type="password"
                        component={Input}
                        label="Password"
                        validate={[required, atLeastEight, emailTooLong]}
                    />
                    <Field
                        name="confirmPassword"
                        type="password"
                        component={Input}
                        label="Confirm Password"
                        validate={[required, atLeastEight, emailTooLong, passwordsMatch]}
                    />
                    <button type="submit">Sign up</button>
                </form>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.auth.loading
})

RegistrationForm = connect(mapStateToProps)(RegistrationForm);

export default reduxForm({
    form: 'registration'
})(RegistrationForm);
