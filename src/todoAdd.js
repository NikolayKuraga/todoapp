const todoAdd = (e, todos, newTodo, setTodos, setNewTodo) => {

	e.preventDefault();

	if (!newTodo.trim()) { return; }

	setTodos([...todos, newTodo.trim()]);
	setNewTodo('');
};

export default todoAdd;
