import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        const lists = this.props.lists.map((list, index) => {
            // const movies = list.movies;

            // const movieTitles = movies.forEach(movie => {
            //     return movie.title;
            // });

            // path="/lists/:id"

            // this.props.match.params.id

            const link = 'lists/' + list.id;
            return (
                <Link to={link} key={index}>
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
