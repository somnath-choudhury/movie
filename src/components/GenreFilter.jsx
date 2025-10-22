
import React from 'react';

function GenreFilter({ genres }) {
  const handleClick = (genre) => {
    console.log(`Filtering by ${genre}`);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => handleClick(genre)} style={{ marginRight: '10px' }}>
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
