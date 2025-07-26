class TodoAppController {
  constructor() {
    const { todoUIView } = uiview_container;
    this.todo_uiview = todoUIView;

    // Bind handlers once to avoid creating new functions on every event registration
    this.handleEnterKey = this.handleEnterKey.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);

    this.initialise();
  }

  initialise() {
    this.todo_uiview.todoInputElement.addEventListener('keypress', this.handleEnterKey);
     
  }

  handleEnterKey(event) {
    if (event.key === 'Enter') {
      todo_add_task_text();
      console.log('New todo item (Enter):', todoText);
      this.todo_uiview.clearInput();
    }
  }

  handleAddButtonClick() {
    const todoText = this.todo_uiview.todoInputValue;
    console.log('New todo item (Button):', todoText);
    this.todo_uiview.clearInput();
  }
}