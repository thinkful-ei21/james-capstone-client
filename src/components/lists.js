import React from 'react';
import { connect } from 'react-redux';
import { createList } from '../actions/add';
import '../styles/lists.css';
import { fetchProtectedData } from '../actions/protected-data';

class Lists extends React.Component {
    submitList(e) {
        e.preventDefault();
        const listTitle = e.target.newList.value;
        this.props.dispatch(createList(listTitle));
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        console.log(this.props.lists);
        const lists = this.props.lists.map((list, index) => {
            return <li key={index}>{list.title}</li>;
        });

        return (
            <div className="list-input">
                <form onSubmit={e => this.submitList(e)}>
                    <label htmlFor="">Create list:</label>
                    <input type="text" name="newList" />
                    <button>Create</button>
                </form>
                <p>Lists</p>
                <ul className="movie-lists">{lists}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.listData.data
    };
};

export default connect(mapStateToProps)(Lists);
