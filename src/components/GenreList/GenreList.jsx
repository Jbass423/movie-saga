import React from 'react';

const GenreList = ({ filteredGenres }) => {
    

    return (
        <ul>
            {filteredGenres.map((gen) => (
                <li key={gen.id}>{gen.name}</li>
            ))}
        </ul>
    );
};

export default GenreList;