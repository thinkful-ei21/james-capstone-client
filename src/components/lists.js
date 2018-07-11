import React from 'react';
import { connect } from 'react-redux';
import { createList } from '../actions/add';
import requiresLogin from './requires-login';
import HeaderBar from './header-bar';
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
        const lists = this.props.lists.map((list, index) => {
            console.log(list.title, list.movies);
            return <li key={index}>{list.title}</li>;
        });

        return (
            <section>
                <HeaderBar />
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
