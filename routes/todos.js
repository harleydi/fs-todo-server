const express = require('express')
const router = express.Router()
const { allTodos, createTodo, updateTodo } = require('../controller/todoController')

router.get('/all-todos', allTodos)
router.post('/create-one', createTodo)
router.put('/update-one/:id', updateTodo)

module.exports = router