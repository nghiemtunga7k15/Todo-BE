var express = require('express');
var router = express.Router();
const service_todo  = require('./../service/todo');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/create', function(req, res, next) { 
	let {name , status } = req.body;
 	service_todo.addTodo(name,status ,function(err,success){
 			if(err){
 				return res.send('Not Add');
 			}else{
 				return res.redirect('/');
 			}
 	});
});
router.get('/api/list', function(req, res, next) { 
	service_todo.listTodo(function(err,success){
		if(err){
			return res.send('Find Falss');
		}else{
			res.json({code:400,data:success});
		}
	})
});
router.delete('/api/delete/:id' ,function(req, res, next) { 
	let _id = req.params.id;
	service_todo.deleteOne(_id,function(err,success){
		if(err){
			return res.send('Find Falss');
		}else{
			res.send('OK');
		}
	})
	let id = req.params.id;
});
router.put('/api/update/:id' ,function(req, res, next) { 
	let _id = req.params.id;
	let { name , status } = req.body;
	service_todo.update(_id,name,status , function(err,success){
		if(err){
			return res.send('Find Falss');
		}else{
			res.send('OK');
		}
	})
});

module.exports = router;
