function fatorial(numero_do_fatorial) { 
    let fat = 1 
    for (let contador = numero_do_fatorial; contador > 1; contador-- ) {
        fat *= contador
    }
    return fat
}

console.log(fatorial(5))