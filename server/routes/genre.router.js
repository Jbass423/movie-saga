const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Fetch all genres
router.get('/', (req, res) => {
  const queryText = `SELECT movies.id AS movie_id, movies.title, genres.name AS genre
  FROM movies
  JOIN movies_genres ON movies.id = movies_genres.movie_id
  JOIN genres ON genres.id = movies_genres.genre_id
  ORDER BY movies.id;
    `;
  pool.query(queryText)
    .then((result) => {
      res.json(result.rows);
    })
    .catch((error) => {
      console.log('Error fetching genres:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
