// Encontrando elementos existentes
let myButton = document.querySelector('#myButton');
let container = document.querySelector('#container');

// Criando novos elementos
let msg_elem = document.createElement("p");
msg_elem.setAttribute('id', 'message');
msg_elem.textContent = 'Você é demais 10/10!';

// Evento de clicar
myButton.addEventListener('click', function() {
  setTimeout(function(){
    container.appendChild(msg_elem)
  }, 2000)
});
