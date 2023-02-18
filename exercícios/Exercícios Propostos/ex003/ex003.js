function calcular () {

    let inicio = window.document.getElementById('txtinicio')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpasso')
    let resultado = window.document.getElementById('resultado')

   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Algum valor ficou faltando. Tente novamente!')

   } else { 

        resultado.innerHTML = 'Contando: <br>'
        let begin = Number(inicio.value)
        let end = Number(fim.value)
        let step = Number(passo.value)

        if (step <= 0) { 
            window.alert('Passo inválido. Considerando PASSO 1') 
            step = 1 
        }

        //Contagem CRESCENTE!!!

        if (begin < end) {
        for (let contador = begin; contador <= end; contador += step) {
            resultado.innerHTML += ` ${contador} \u{1F449}` 	
        }
        resultado.innerHTML += `\u{2705}` 

        // CONTAGEM REGRESSIVA!!!
        
    } else { 
        for (let contador = begin; contador >= end; contador -= step) {
            resultado.innerHTML += ` ${contador} \u{1F449}` 	
        }
        resultado.innerHTML += `\u{2705}` 
            }
        }
    }
