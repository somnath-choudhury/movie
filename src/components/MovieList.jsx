import React from 'react'

const MovieList = ({movies}) => {
    
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <table style={{minWidth:'1000px'}} border="1" cellPadding="10" cellSpacing="2">
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Year</th>
            </tr>
        </thead>

         <tbody>
            {movies.map((movie, index) => (
            <tr key={index}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default MovieList
