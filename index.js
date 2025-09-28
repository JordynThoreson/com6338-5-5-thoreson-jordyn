const entryField = document.getElementById('add-todo');
const toDoList = document.getElementById('todo-list');

entryField.addEventListener('submit', e => {
  e.preventDefault();
  const input = entryField.querySelector('input');
  if (!input.value.trim()) return;

  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.textContent = input.value.trim();

  btn.onclick = () => {
    btn.style.textDecoration
      ? li.remove()
      : btn.style.textDecoration = 'line-through';
  };

  li.appendChild(btn);
  toDoList.appendChild(li);
  input.value = '';
})
