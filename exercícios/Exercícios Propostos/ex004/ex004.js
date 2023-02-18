function tabuada() {
    let numero = window.document.getElementById('txtnumero')
    let tabela_tabuada = window.document.getElementById('selecao_tabela')

    if (numero.value.length == 0) { 
        window.alert('[ERRO] Você não digitou nada. Tente novamente!')
    } else {
        
        let number = Number(numero.value)
        for (let contador = 1; contador <= 10; contador++) { 
            let item = window.document.createElement('option')
            item.text =`${number} x ${contador} = ${number*contador}`
            tabela_tabuada.appendChild(item)
        }
    } 
}