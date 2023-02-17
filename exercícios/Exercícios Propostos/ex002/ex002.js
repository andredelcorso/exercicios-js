function verificar () { 

    let data = new Date()
    let ano_atual = data.getFullYear()
    let ano_digitado = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (ano_digitado.value.length == 0 || ano_digitado.value > ano_atual) {
        window.alert('Verifique os dados e tente novamente!')

    } else {

       let fsex = document.getElementsByName('radsex')
       let idade = ano_atual - Number(ano_digitado.value)
       let genero = ''
       let img = document.createElement('img')

       img.setAttribute('id', 'foto')

       if (fsex[0].checked) {
        genero = 'homem'

        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagens/foto-bebe-m.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/foto-jovem-m.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/foto-adulto-m.png')
        } else {
            img.setAttribute('src', 'imagens/foto-idoso-m.png') 
        }
    
    } else if (fsex[1].checked) {
        genero = 'mulher'
        
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagens/foto-bebe-f.png')
       } else if (idade < 21) {
            img.setAttribute('src', 'imagens/foto-jovem-f.png')
       } else if (idade < 50) {
            img.setAttribute('src', 'imagens/foto-adulto-f.png')
       } else {
            img.setAttribute('src', 'imagens/foto-idoso-f.png')
       }

        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
        
    } 
}