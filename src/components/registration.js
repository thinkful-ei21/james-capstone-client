import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';

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
                    name="name"
                    type="text"
                    component={Input}
                    label="Name"
                    // validate={[required, nonEmpty]}
                />
                <Field
                    name="name"
                    type="text"
                    component={Input}
                    label="Email"
                    // validate={[required, nonEmpty]}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration'
})(RegistrationForm);
