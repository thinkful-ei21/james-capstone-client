import React from 'react';
import { reduxForm, focus } from 'redux-form';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

import loginStyles from './styles/login.module.css'
import buttonStyles from './styles/button.module.css';

export class LoginForm extends React.Component {
    submit(e, word) {
        const username = e.target.username.value;
        const password = e.target.password.value;       
        e.preventDefault();

        this.props
            .dispatch(login(username, password))
            .then(() => this.props.history.push('/dashboard'));
    }

    goBack(){
        // goes back to the homepage
        this.props.history.push('/');
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

            <main className={loginStyles.container}>

                <h1 className={loginStyles.header}>Log In</h1>

                <form
                    className={loginStyles.form}
                    onSubmit={(e) => this.submit(e)}
                >
    
                    {error}

                    <label htmlFor="username" className={loginStyles.label}>Username</label>
                    <input type="text" name="username" className={loginStyles.input}/>
                    
                    

                    <label htmlFor="password" className={loginStyles.label}>Password</label>
                    <input type="password" name="password" className={loginStyles.input}/>

                    <button 
                    // disables the button when it has not been touched
                    // and when it is submitting
                    className={loginStyles.button}
                    >
                        Login
                    </button>

     
                </form>
                <button className={buttonStyles.back} onClick={() => this.goBack()}>Back</button>
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
