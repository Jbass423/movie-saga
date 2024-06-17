const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Fetch all genres
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "genres"`;
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
