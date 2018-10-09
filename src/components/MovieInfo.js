import React from 'react';
import { connect } from 'react-redux';
import { getInfo } from '../actions/movies';

import buttonStyles from './styles/button.module.css';

class MovieInfo extends React.Component {
    constructor(props) {
        super(props);

        this.movie = {};
    }
    
    goBack() {
        this.props.history.push('/dashboard');
    }

    componentDidMount(){
        this.props.dispatch(getInfo(this.props.match.params.id));
    }

    render() {
        const { movie } = this.props;

        if (this.props.movieInfo) {
            this.movie = movie;
            this.movie.rating = movie.Ratings[0].Source;
            this.movie.rating.value = movie.Ratings[0].Value;
        }

        return (
            <div>

                <h1>{movie.Title} ({movie.Year})</h1>

                <h2>{movie.Genre}</h2>

                <h2>{movie.Runtime}</h2>

                <img src={movie.Poster} alt="movie poster" width="250px"/>

                <h5>{movie.Plot}</h5>

                <p>Writers: {movie.Writer}</p>
                <p>Director(s): {movie.Director}</p>
                <p>Awards: {movie.Awards}</p>

                <button className={buttonStyles.button} onClick={() => this.goBack()}>Back</button>
            </div>

        );
    }
}

const mapStateToProps = state => {
    
    return {
        movie: state.movies.movieInfo
    };

};

export default connect(mapStateToProps)(MovieInfo);