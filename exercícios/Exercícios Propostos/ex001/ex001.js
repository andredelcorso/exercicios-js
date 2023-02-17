function carregar() {

    let msg = window.document.getElementById('msg')
    let msg2 = window.document.getElementById('msg2')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutes = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutes} minutos.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#e2cd9f'
        document.body.style.textAlign = 'center'
        msg2.innerHTML = `Bom dia!`
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#b9846f'
        document.body.style.textAlign = 'center'
        msg2.innerHTML = `Boa tarde!`
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#515154'
        document.body.style.textAlign = 'center'
        msg2.innerHTML = `Boa noite!`
    }
}

