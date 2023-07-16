const Todo = require('../model/Todo')

const allTodos = async (req, res) => {
    try {
        const todos = await Todo.find({})
        res.status(200).json({ success: true, data: todos }) 
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}

const createTodo = async (req, res) => {
    try {
        const newTodo = await new Todo(req.body)
        const save = await newTodo.save()
        res.status(200).json({ success: true, data: save })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.status(200).json({ success: true, data: updatedTodo })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = {
    allTodos,
    createTodo,
    updateTodo
}