let selected = document.querySelector('.selected')
let optionContainer = document.querySelector('.options-container')

let optionsList = document.querySelectorAll('.option')

selected.addEventListener('click', () => {
    optionContainer.classList.toggle('active')
})

optionsList.forEach(o => {
    o.addEventListener('click', () => {
        selected.innerHTML = o.querySelector('label').innerHTML
        optionContainer.classList.remove('active')
    })
})