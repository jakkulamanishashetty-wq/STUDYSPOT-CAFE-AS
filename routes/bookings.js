
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// 1. GET all bookings with JOIN
router.get('/', (req, res) => {
  const sql = `
    SELECT
      bookings.booking_id,
      bookings.student_id,
      students.student_name,
      bookings.carrel_id,
      carrels.name AS carrel_name,
      carrels.zone
    FROM bookings
    INNER JOIN students
      ON bookings.student_id = students.student_id
    INNER JOIN carrels
      ON bookings.carrel_id = carrels.carrel_id
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(200).json(rows);
  });
});

// 2. POST - Create a booking
router.post('/', (req, res) => {
  const { student_id, carrel_id } = req.body;

  if (!student_id || !carrel_id) {
    return res.status(400).json({
      error: 'Student ID and Carrel ID are required'
    });
  }

  db.run(
    `INSERT INTO bookings (student_id, carrel_id)
     VALUES (?, ?)`,
    [student_id, carrel_id],
    function (err) {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }

      res.status(201).json({
        message: 'Booking created successfully',
        booking_id: this.lastID
      });
    }
  );
});

module.exports = router;
