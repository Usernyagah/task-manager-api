const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');

require('dotenv').config();

// Database connection check
const pool = require('./config/db');
pool.getConnection()
  .then(connection => {
    console.log('Connected to MySQL database');
    connection.release();
  })
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ status: 'API running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});