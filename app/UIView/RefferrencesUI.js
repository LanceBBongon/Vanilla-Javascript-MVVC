

const configElements = {
    todoInput: 'todo-input',
    todoList: 'todo-list',
    todoCount: 'todo-count'
};


const valueKeys = ['todoInput', 'todoList', 'todoCount'];
const globalFns = [sanitize_input];
const perKeyFns = {
    todoInput: [v => v.trim(), v => v.toUpperCase()],
    todoList: [],
    todoCount: []
};
const ICreateTodoTask = new UIReferenceManager(configElements, valueKeys, globalFns, perKeyFns);