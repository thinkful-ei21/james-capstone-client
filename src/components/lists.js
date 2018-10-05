import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createList } from '../actions/add';
import { fetchLists } from '../actions/movies';
import { clearState } from '../actions/search';

import styles from './styles/list.module.css';

class Lists extends React.Component {

    submitList(e) {
        e.preventDefault();
        const listTitle = e.target.newList.value;
        this.props.dispatch(createList(listTitle));
    }

    componentDidMount() {
        this.props.dispatch(fetchLists());
    }

    componentWillUnmount() {
        this.props.dispatch(clearState());
    }

    render() {
        const { loading, error, lists } = this.props;

        if (lists) {
            this.lists = lists.map((list, index) => {
                const link = 'lists/' + list.id;
                return (
                    <Link to={link} key={index} name={list.title}>
                        <button key={index}>{list.title}</button>
                    </Link>
                );
            });        
        }

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
                    <h3>Lists</h3>
                    {this.lists}
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
