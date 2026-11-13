const express = require('express');
const app = express();

app.use(express.json());

app.use('/students', require('./routes/students'));
app.use('/carrels', require('./routes/carrels'));
app.use('/bookings', require('./routes/bookings'));

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));