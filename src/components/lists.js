import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createList } from '../actions/add';
import { fetchProtectedData } from '../actions/protected-data';
import { clearState } from '../actions/search';

class Lists extends React.Component {
    submitList(e) {
        e.preventDefault();
        const listTitle = e.target.newList.value;
        this.props.dispatch(createList(listTitle));
        this.props.dispatch(fetchProtectedData());
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

        return (
            <section>
                <div className="list-input">
                    <form onSubmit={e => this.submitList(e)}>
                        <label htmlFor="">Create list:</label>
                        <input type="text" name="newList" />
                        <button>Create</button>
                    </form>
                    <p>Lists</p>
                    <ul className="movie-lists">{lists}</ul>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.listData.data
    };
};

export default connect(mapStateToProps)(Lists);
