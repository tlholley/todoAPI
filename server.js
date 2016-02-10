var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
}, {
	id: 2,
	description: 'Go to market',
	completed: false
}, {
	id: 3,
	description: 'Win the lottery',
	completed: true
}];

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
	var matchedTodoId;

	todos.forEach(function (todo) {
		if (todoId === todo.id) {
			matchedTodoId = todo;
		}

	});

	if(matchedTodoId) {
		res.json(matchedTodoId);		
	}else {
		res.status(404).send();
	}


});

app.listen(PORT, function (){
	console.log('Express listening on port ' + PORT + '!');
});