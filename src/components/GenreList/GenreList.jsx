import React from 'react';

const GenreList = ({genres}) => {
    

    return (
        <ul>
      {genres.map((gen, index) => (
        <li key={index}>{gen}</li>
      ))}
    </ul>
    );
};

export default GenreList;