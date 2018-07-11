import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentList } from '../actions/protected-data';

class ExpandedList extends React.Component {
    componentDidMount() {
        this.fetchMoviesFromList();
    }

    fetchMoviesFromList() {
        const listId = this.props.match.params.id;
        console.log(listId);
        this.props.dispatch(fetchCurrentList(listId));
    }

    render() {
        return <p>List title</p>;
    }
}

const mapStateToProps = state => {
    return {
        lists: state.listData.data,
        movies: state.listData.currentList
    };
};

export default connect(mapStateToProps)(ExpandedList);
