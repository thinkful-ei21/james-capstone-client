import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requiresLogin';

export class Dashboard extends React.Component {
    render() {
        return <Search />;
    }
}
