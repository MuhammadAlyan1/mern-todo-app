const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
  contents: {
    type: String,
    require: [true, 'Please provide todo contents'],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const Todos = mongoose.model('Todos', TodosSchema);

module.exports = Todos;
