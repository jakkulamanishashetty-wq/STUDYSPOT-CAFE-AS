const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', (req, res) => {
  const { student_id, carrel_id } = req.body;

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