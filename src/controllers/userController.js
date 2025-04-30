const pool = require('../config/db');

exports.getAllUsers = async (req, res) => {
  try {
    const [users] = await pool.query('SELECT * FROM Users');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Users (name, email) VALUES (?, ?)',
      [name, email]
    );
    res.status(201).json({ id: result.insertId, name, email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserTasks = async (req, res) => {
  const { userId } = req.params;
  try {
    const [tasks] = await pool.query(
      'SELECT * FROM Tasks WHERE user_id = ?',
      [userId]
    );
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};