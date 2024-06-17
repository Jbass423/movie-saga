import React from 'react';

const GenreList = ({ genres }) => {
    if (!genres || genres.length === 0) {
        return <div>Loading genres...</div>;
    }

    return (
        <ul>
            {genres.map((gen) => (
                <li key={gen.id}>{gen.name}</li>
            ))}
        </ul>
    );
};

export default GenreList;