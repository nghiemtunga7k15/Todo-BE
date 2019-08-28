const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
const    autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/todo-app");
autoIncrement.initialize(connection);

const TodoSchema = new Schema({
    	"name"     : { type: String, require: true },
    	"status"     : { type: Boolean, require: true },
});

TodoSchema.plugin(autoIncrement.plugin, 'todos');

const Todo = mongoose.model('todos', TodoSchema);

module.exports = Todo;
