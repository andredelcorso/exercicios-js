let valores = [8, 1, 7, 4, 2, 10]

// FORMA TRADICIONAL
console.log(valores)

// FORMA PARA MOSTRAR OS VETORES NA TELA DE FORMA INDEFINIDA 
for (let posicao = 0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}

// ENCURTANDO O CÓDIGO 

for (let posicao in valores) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}