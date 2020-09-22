import React from 'react';

const MovieRow = props =>
  <tr>
    <td>{props.movie.title}</td>
    <td>{props.movie.year}</td>
    <td>{props.movie.audienceScore}</td>
  </tr>
;

export default MovieRow;
