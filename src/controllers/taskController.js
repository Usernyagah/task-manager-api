const pool = require('../config/db');

exports.getAllTasks = async (req, res) => {
  try {
    const [tasks] = await pool.query(`
      SELECT t.*, u.name AS user_name 
      FROM Tasks t
      JOIN Users u ON t.user_id = u.user_id
    `);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTask = async (req, res) => {
  const { title, description, status, due_date, user_id } = req.body;
  try {
    const [result] = await pool.query(
      `INSERT INTO Tasks 
      (title, description, status, due_date, user_id)
      VALUES (?, ?, ?, ?, ?)`,
      [title, description, status, due_date, user_id]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, due_date } = req.body;
  try {
    const [result] = await pool.query(
      `UPDATE Tasks SET
      title = ?, description = ?, status = ?, due_date = ?
      WHERE task_id = ?`,
      [title, description, status, due_date, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query(
      'DELETE FROM Tasks WHERE task_id = ?',
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};