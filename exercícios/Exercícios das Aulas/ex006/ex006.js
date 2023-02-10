let a = window.document.getElementById('area')
a.addEventListener('click', clicar)

let b = window.document.getElementById('area')
b.addEventListener('mouseenter', entrou)

let c = window.document.getElementById('area')
c.addEventListener('mouseout', saiu)

function clicar () {
    a.innerText = 'Clicou!'
    a.style.background = 'green'
    a.style.color = 'white'
}

function entrou () {
    
    b.innerText = 'Entrou!'
    b.style.background = 'yellow'
    b.style.color = 'black'
}

function saiu () {
    c.innerText = 'Saiu!'
    c.style.background = 'red'
    c.style.color = 'white' 
}