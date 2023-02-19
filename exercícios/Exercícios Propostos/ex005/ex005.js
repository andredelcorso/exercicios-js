let valores = []

function limite_numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false 
    }
}

function add () { 

    let numero = window.document.getElementById('txtnumero')
    let adicionar = window.document.getElementById('lista_numeros')
    

    if (numero.value.length == 0) {
        window.alert('[ERRO] Você não digitou nada. Tente novamente!')
    } else {
        
        if (limite_numero(numero.value)) {
            valores.push(Number(numero.value))
            for (let contador = 1; contador < 10; contador = adicionar) {
    
                let item = window.document.createElement('option')
                item.text = `Valor ${numero.value} adicionado`
                adicionar.appendChild(item)
                resposta.innerHTML= ''
            }        
        } else {
            window.alert('[ERRO] Digite um valor entre 1 e 100!')
        }
       
    }
}

function end() { 
    
    
    let adicionar = window.document.getElementById('lista_numeros')
    let resposta = window.document.getElementById('resposta')

    let total = valores.length
    

    if (adicionar.length == 0) {
        window.alert('Favor, preencha a tabela e tente novamente.')
       
    } else  {

        maior = valores[0]
        menor = valores[0]

        for (let position in valores) {

            if (valores[position] > maior)
                maior = valores[position]
            if (valores[position] < menor)
                menor = valores[position]

        } 

        let soma = 0 

        for (let contador = 0; contador < valores.length; contador ++) {

            soma += valores[contador]
        }

        let media = soma / valores.length


    resposta.innerHTML = '';
    resposta.innerHTML += (`<p>- ${total} valores foram cadastrados. Dentre eles:</p>`);
    resposta.innerHTML += (`<p>O maior valor digitado foi ${maior}</p>`);
    resposta.innerHTML += (`<p>O menor valor digitado foi ${menor}</p>`);
    resposta.innerHTML += (`<p>Todos os valores somados são iguais a: ${soma}</p>`)
    resposta.innerHTML += (`<p>A média de todos os valores somados é igual a: ${media}`)

    }
}
