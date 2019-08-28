const Todo = require('./../models/Todo');

module.exports = {
    addTodo(name,status, callback){
    	let   option = { name , status: true };
    	let data     = new Todo(option);
        data.save().then(response).catch(error);

        function response(success) {
        	return callback(null, success);
        }
        function error(e) {
        	return callback(e,null);	
        }
    },
    listTodo(callback){
        
        Todo.find({}).then(response).catch(error);

        function response(success) {
            return callback(null, success);
        }
        function error(e) {
            return callback(e,null);    
        }
    },
    deleteOne(id,callback){
        Todo.deleteOne({ _id : id }).then(response).catch(error);
        function response(success) {
            return callback(null, success);
        }
        function error(e) {
            return callback(e,null);    
        }
    },
    update(id,name,status,callback){
        Todo.updateOne({ _id: id }, { name:name , status:status }).then(response).catch(error);
        function response(success) {
            return callback(null, success);
        }
        function error(e) {
            return callback(e,null);    
        }
    }
};