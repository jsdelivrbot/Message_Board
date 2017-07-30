var Todos = require('../models/todoModels');


module.exports = app => {
	app.get('/api/setupTodos', (req, res) => {
		var starterTodos = [
			{
				username: 'test',
				todo: 'alsotest',
				isDone: true,
				hasAttachment: false
			},
			{
				username: 'Obiwan',
				todo: 'Kill Anakin',
				isDone: false,
				hasAttachment: false
			}
		];
		Todos.create(starterTodos, (err, results) => res.send(results));
	});
}