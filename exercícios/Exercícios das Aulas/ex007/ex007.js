function somar() {
    let num1 = window.document.getElementById('num1')
    let num2 = window.document.querySelector('input#num2')
    let resultado = window.document.getElementById('resultado')
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let somatorio = n1 + n2
    resultado.innerHTML = somatorio
}