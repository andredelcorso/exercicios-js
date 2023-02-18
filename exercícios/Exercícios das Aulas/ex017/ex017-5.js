// Maneira recursiva

function fatorial(numero_do_fatorial) {
    if (numero_do_fatorial == 1) {
        return 1 
    } else 
      return numero_do_fatorial * fatorial(numero_do_fatorial-1)  
}

console.log(fatorial(5))

// Normalmente, um fatorial é calculado assim: 5! = 5 x 4 x 3 x 2 x 1 
// Um fatorial pode ser calculado em cima de outro fatorial. 

// Exemplo: 5! = 5 x 4! >>> n! = n * (n-1)!

