const express = require('express')
const router = express.Router()
const { allTodos, createTodo, updateTodo, updateCompleted, deleteTodo } = require('../controller/todoController')

router.get('/all-todos', allTodos)
router.post('/create-one', createTodo)
router.put('/update-one/:id', updateTodo)
router.put('/update-completed/:id', updateCompleted)
router.delete('/delete-one/:id', deleteTodo)

module.exports = router