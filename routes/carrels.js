const express = require('express');
const router = express.Router();
const db = require('../config/db');

// 1. GET / - Get all carrels (supports case-insensitive filter: ?zone=Quiet)
router.get('/', (req, res) => {
  const { zone } = req.query;

  let sql = 'SELECT * FROM carrels';
  const params = [];

  if (zone) {
    sql += ' WHERE LOWER(zone) = LOWER(?)';
    params.push(zone);
  }

  db.all(sql, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
});

// summary must stay BEFORE /:id
router.get('/summary', (req, res) => res.status(200).json([]));

// 2. GET /:id - Get one carrel by ID
router.get('/:id', (req, res) => {
  const sql = 'SELECT * FROM carrels WHERE carrel_id = ?';
  db.get(sql, [req.params.id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Carrel not found' });
    }
    res.status(200).json(row);
  });
});

// 3. POST / - Add a new carrel
router.post('/', (req, res) => {
  const { name, zone } = req.body;
  const sql = 'INSERT INTO carrels (name, zone) VALUES (?, ?)';

  db.run(sql, [name, zone], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      carrel_id: this.lastID,
      name,
      zone
    });
  });
});

// 4. PUT /:id - Update a carrel's name and zone
router.put('/:id', (req, res) => {
  const { name, zone } = req.body;
  const sql = 'UPDATE carrels SET name = ?, zone = ? WHERE carrel_id = ?';

  db.run(sql, [name, zone, req.params.id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Carrel not found' });
    }
    res.status(200).json({
      carrel_id: Number(req.params.id),
      name,
      zone
    });
  });
});

// 5. DELETE /:id - Delete a carrel by ID
router.delete('/:id', (req, res) => {
  const sql = 'DELETE FROM carrels WHERE carrel_id = ?';

  db.run(sql, [req.params.id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Carrel not found' });
    }
    res.status(200).json({ message: 'Carrel deleted' });
  });
});

module.exports = router;
