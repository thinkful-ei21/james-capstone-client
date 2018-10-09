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
        console.log(this.props.lists);
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
                    <div key={index} className={styles.list}>

                        <Link to={link} key={index} name={list.title}>
                            <h3 key={index}>{list.title}</h3>
                        </Link>

                        <p>{list.movies.length} movies</p>


                    </div>
                    
                );
            });        
        }

        if (loading) {
            return <p>{loading}</p>;
        }

        if (error) {
            this.error = <p className={styles.error}>{error}</p>;
        }
        
        
        return (
            <section>
                <div>
                    {this.error}
                    <form onSubmit={e => this.submitList(e)}>
                        <label htmlFor="">Create list:</label>
                        <input type="text" name="newList" />
                        <button>Create</button>
                    </form>
                    <h3>Lists</h3>
                </div>
                <div className={styles.container}>
                    {this.lists}
                </div>
                
            </section>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        loading: state.movies.loading,
        error: state.movies.listError,
        lists: state.movies.lists
    };

};

export default connect(mapStateToProps)(Lists);
