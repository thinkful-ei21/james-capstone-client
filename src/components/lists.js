import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createList } from '../actions/add';
import { clearState } from '../actions/search';

import styles from './styles/list.module.css';

class Lists extends React.Component {
    submitList(e) {
        e.preventDefault();
        const listTitle = e.target.newList.value;
        this.props.dispatch(createList(listTitle));
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        this.props.dispatch(clearState());
    }

    render() {

        const lists = this.props.lists.map((list, index) => {
            const link = 'lists/' + list.id;
            return (
                <Link to={link} key={index} name={list.title}>
                    <button key={index}>{list.title}</button>
                </Link>
            );
        });

        const { loading, error } = this.props;

        if (loading) {
            return <p>{loading}</p>;
        }
        
        
        return (
            <section>
                <div>
                    <p className={styles.error}>{error}</p>
                    <form onSubmit={e => this.submitList(e)}>
                        <label htmlFor="">Create list:</label>
                        <input type="text" name="newList" />
                        <button>Create</button>
                    </form>
                    <p>Lists</p>
                    <ul>{lists}</ul>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        loading: state.movies.loading,
        error: state.movies.error,
        lists: state.movies.lists
    };

};

export default connect(mapStateToProps)(Lists);
