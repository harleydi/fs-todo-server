const mongoose = require('mongoose')
const { v4: uuid } = require('uuid')

const todoSchema = new mongoose.Schema({
    _id: { type: String, default: uuid },
    title: {type: String, required: true },
    description: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium'},
    creationDate: { type: Date, default: Date.now() },
    lastModified: { type: Date, default: Date.now() },
    completedDate: { type: Date }
})

const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo