let myButton = document.querySelector('#myButton');
let message = document.querySelector('#message');

myButton.addEventListener('click', function() {
  message.textContent = 'Você é demais 10/10!';
});
