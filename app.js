
//model section (M)
//If local storage has a todos array, then use it
//Otherwise use the default array.
let todos;
//Retrieve acctlStorage
const savedTodos = JSON.parse(localStorage.getItem('accounts'));
//Check if it's an array
if(Array.isArray(savedTodos)){
	todos = savedTodos;
}else {
	todos = [{
		title:'emailing',
		id: 'id1'
	}	];
}

//function()createTodo
const createTodo = (title) =>{
	const id = ''+ new Date().getTime();

	todos.push({
		title: title,
		id: id
	});
//function()createTodo
	saveTodos();
}

//deletes a todo
const removeTodo = idToDelete =>{
	todos = todos.filter(todo => {
	// If id of this todo matches idToDelete, return false
	// For everything else, return true
	if (todo.id === idToDelete){
		return false;
	} else {
		return true;
	}
	});
//deletes a todo
	saveTodos();
}
//function()saveTodos
const saveTodos = () => {
	localStorage.setItem('accounts', JSON.stringify(todos));
}
//function()saveTodos
//function()addTodo
const addTodo = () => {
    const textbox = document.getElementById('acct-title');
    const title = textbox.value;
		

	createTodo(title);
//function()addTodo
	render();
}
	//function()deleteTodo
const deleteTodo = event =>{
		const deleteButton = event.target;
		const idToDelete = deleteButton.id;

		removeTodo(idToDelete);
		render();
}	
	//function()deleteTodo/
	
	//function()render
	const render = () => {
		//reset our list
		document.getElementById('acct-list').innerHTML = '';
		
		todos.forEach(todo => {
			const element = document.createElement('div');
			element.innerText = todo.title;

			const deleteButton = document.createElement('button');
			deleteButton.innerText = 'X';
			deleteButton.style = 'margin-left: 12px';
			deleteButton.onclick = deleteTodo;
			deleteButton.id = todo.id;
			element.appendChild(deleteButton);

			const todoList = document.getElementById('acct-list');
			todoList.appendChild(element);

		});
	}		
	//function()render/
	render();
