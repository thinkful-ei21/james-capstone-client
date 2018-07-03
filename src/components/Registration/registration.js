import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../input';

class RegistrationForm extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}
            >
                <Field
                    name="firstName"
                    type="text"
                    component={Input}
                    label="First Name"
                    // validate={[required, nonEmpty]}
                />
                <Field
                    name="lastName"
                    type="text"
                    component={Input}
                    label="Last Name"
                    // validate={[required, nonEmpty]}
                />
                <Field
                    name="email"
                    type="text"
                    component={Input}
                    label="Email"
                    // // Add an element prop to change the type of input
                    // element="select"
                    // validate={[required, nonEmpty]}
                />
                <Field
                    name="password"
                    type="password"
                    component={Input}
                    label="Password"
                />
                <Field
                    name="confirm"
                    type="password"
                    component={Input}
                    label="Confirm Password"
                />
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration'
})(RegistrationForm);
