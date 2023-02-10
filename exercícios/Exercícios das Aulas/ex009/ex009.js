function detectar() {

let p = window.document.querySelector('input#país')
let res = window.document.querySelector('div#resultado')
let pv = String(p.value)

if (pv == 'Brasil', 'brasil', 'brasa', 'braza', 'br', 'brazuka', 'brazilian') {
    
    res.innerHTML = (`<p>Brasileiro</p>`)

} else {

    res.innerHTML = (`<p>Estrangeiro!</p>`)
}

}   