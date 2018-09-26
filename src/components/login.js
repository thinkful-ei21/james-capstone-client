import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

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
                <div aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        return (
            <header>
                <form
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                >
    
                {error}
                <Field
                    component={Input}
                    type="text"
                    label="Username"
                    name="username"
                    id="username"
                />
                
                <Field
                    component={Input}
                    type="password"
                    label="Password"
                    name="password"
                    id="password"
                />

                <button 
                // disables the button when it has not been touched
                // and when it is submitting
                disabled={this.props.pristine || this.props.submitting}>
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
