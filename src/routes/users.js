const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getUserTasks
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:userId/tasks', getUserTasks);

module.exports = router;