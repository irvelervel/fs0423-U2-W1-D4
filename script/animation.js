// seleziono il pulsante START
const button = document.querySelector('button')
const targetBox = document.getElementsByClassName('animated-3')[0]

button.addEventListener('click', function () {
  targetBox.classList.toggle('moving') // ora il quadrato comincerà a spostarsi
  targetBox.innerHTML = '<p>MI MUOVO!</p>'
  targetBox.style.backgroundColor = 'red'
})
