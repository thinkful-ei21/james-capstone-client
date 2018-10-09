import React from 'react';
import { connect } from 'react-redux';

import buttonStyles from './styles/button.module.css';

class MovieInfo extends React.Component {
    
    goBack() {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <React.Fragment>

                <h1>Movie Info</h1>

                <button className={buttonStyles.button} onClick={() => this.goBack()}>Back</button>
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    
    return {
        
    };

};

export default connect(mapStateToProps)(MovieInfo);