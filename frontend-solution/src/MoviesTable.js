import React from 'react';
import { connect } from 'react-redux';
import MovieRow from './MovieRow';

const MoviesTable = props =>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Year</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      {props.movies.map(movie => <MovieRow key={movie.id} movie={movie} />)}
    </tbody>
  </table>
;

MoviesTable.defaultProps = {
  movies: [],
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MoviesTable);
