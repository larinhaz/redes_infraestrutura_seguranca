// Adiciona nova tarefa à lista
function add() {
    let inputValue = document.form_main.task.value;
  
    if (inputValue.trim() === "") return;
  
    let li = document.createElement("li");
    li.textContent = inputValue;
  
    // Cria o botão de fechar (X)
    let span = document.createElement("span");
    span.textContent = "×";
    span.className = "close";
    span.onclick = () => li.remove();
  
    li.appendChild(span);
    document.getElementById("task-list").appendChild(li);
  
    // Limpa o campo
    document.form_main.task.value = "";
  }
  
  // Marca como concluído ao clicar
  document.getElementById("task-list").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  });
  
  // Adiciona botão de fechar para tarefas já existentes
  document.querySelectorAll("#task-list li").forEach(li => {
    const span = document.createElement("span");
    span.textContent = "×";
    span.className = "close";
    span.onclick = () => li.remove();
    li.appendChild(span);
  });
  