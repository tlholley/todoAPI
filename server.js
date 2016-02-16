var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});
// GET /todos/:id
app.get('/todos/:id', function (req,res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodoId = _.findWhere(todos, {id: todoId});
	// Changed to underscore ----------------------
	// var matchedTodoId;

	// todos.forEach(function (todo) {
	// 	if (todoId === todo.id) {
	// 		matchedTodoId = todo;
	// 	}

	// });

	if(matchedTodoId) {
		res.json(matchedTodoId);		
	}else {
		res.status(404).send();
	}
});

// POST /todos
app.post('/todos', function (req, res) {
	var body = _.pick(req.body, 'description', 'completed');
	

	if (!_.isBoolean(body.completed) || !_.isString(body.description)  || body.description.trim().length === 0) {
		return res.status(400).send();
	}

	body.description = body.description.trim();

// add id field
	body.id = todoNextId++;

	todos.push(body);

	res.json(body);
});

// DELETE /todos/:id

app.delete('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodoId = _.findWhere(todos, {id: todoId});

	if(!matchedTodoId) {
		res.status(404).json({"error": "No todo found with that id"});
	}else{
		todos = _.without (todos, matchedTodoId);
		res.json(matchedTodoId);
	}
});

app.listen(PORT, function (){
	console.log('Express listening on port ' + PORT + '!');
});