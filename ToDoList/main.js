// seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancelEditBtn");

let oldInputValue;

//Funções

const saveTodo = (text) =>{ //adicionar tarefa a lista de afazeres

  //cria div com os todo do formulário.

  const todo = document.createElement("div");
  todo.classList.add("todo-list");       

  //cria o h3 e adiciona o texto ao mesmo
  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  //cria um botão ao fim do todo
  const doneBtn = document.createElement("button")
  doneBtn.classList.add("finish-todo");
  doneBtn.innerText = "Terminar";
  todo.appendChild(doneBtn)

  const editBtn = document.createElement("button")
  editBtn.classList.add("Editar-todo");
  editBtn.innerText = "Editar";
  todo.appendChild(editBtn)

  const DeleteBtn = document.createElement("button")
  DeleteBtn.classList.add("Remove-todo");
  DeleteBtn.innerText = "Remover";
  todo.appendChild(DeleteBtn)

  todoList.appendChild(todo);

  todoInput.value = ""; //limpa o que esta escrito no to do,
  todoInput.focus(); 
};


const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const updateTodo = (text) =>{
  const todos = document.querySelectorAll(".todo-list");

  todos.forEach((todo)=>{

    let todoTitle = todo.querySelector("h3")

    if(todoTitle.innerText === oldInputValue){
      todoTitle.innerText = text;

    }
  });

}


//Eventos

todoForm.addEventListener("submit", (e)=>{
e.preventDefault();

console.log("Formulário enviado.");

const inputValue = todoInput.value;

if(inputValue){
  saveTodo(inputValue)
}

});



document.addEventListener("click", (e)=>{

  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let todoTitle;

  if(parentEl && parentEl.querySelector("h3")){
    todoTitle = parentEl.querySelector("h3").innerText;
  };

  if(targetEl.classList.contains("finish-todo")){
    parentEl.classList.toggle("done");
  };

  if(targetEl.classList.contains("Remove-todo")){
    parentEl.remove();
  };

  if(targetEl.classList.contains("Editar-todo")){
    
    toggleForms();
    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  };

});

cancelEditBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  console.log("oi");
  toggleForms();
});

editForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log("Oi")
  const editInputValue = editInput.value

  if(editInputValue){
    updateTodo(editInputValue)
  }

  toggleForms();
});

