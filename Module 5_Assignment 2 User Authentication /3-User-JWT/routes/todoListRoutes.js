const express = require('express');


const todoList = require('../controllers/todoListController');
const authHandlers = require('../controllers/authController');

const router = express.Router();

// todoList Routes
router
	.route('/')
	.get(todoList.list_all_tasks)
	.post(authHandlers.protect, todoList.create_a_task);
router
	.route('/:taskId')
	.get(todoList.read_a_task)
	.put(todoList.update_a_task)
	.delete(todoList.delete_a_task);

module.exports = router;
