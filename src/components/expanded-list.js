import React from 'react';
import { connect } from 'react-redux';
import { fetchFullList } from '../actions/movies';
import { deleteList } from '../actions/lists';

import buttonStyles from './styles/button.module.css';
import { clearState } from '../actions/search';

class ExpandedList extends React.Component {
    componentDidMount() {
        // this grabs the list id from the url
        const listId = this.props.match.params.id;

        this.props.dispatch(fetchFullList(listId));
    }

    componentWillUnmount() {
        this.props.dispatch(clearState());
    }

    handleDeleteClick() {
        this.props.dispatch(deleteList(this.props.match.params.id));

        this.props.history.push('/lists');
    }

    render() {

        const { movies } = this.props;
        if (movies) {

            this.movies = this.props.movies.map((movie, key) => {
                return (
                    <div key={key}>

                        <p>{movie.title}</p>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt="" />
                    </div>

                );
            });
        }

        return (
            <main>
                {this.movies}
                <button className={buttonStyles.button} onClick={() => this.handleDeleteClick()}>Delete List</button>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies.currentList
    };
};

export default connect(mapStateToProps)(ExpandedList);
