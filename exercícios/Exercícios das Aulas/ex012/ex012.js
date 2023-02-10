let agora = new Date();
let hora = agora.getHours();
let minuto = agora.getMinutes();
let date = agora.getFullYear()

console.log (`Agora são ${hora} horas e ${minuto} minutos do ano de ${date}.`)

if (hora >= 5 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!') 
} else if (hora >= 18) {
    console.log('Boa noite!')
} else if (hora >= 0 && hora < 5) {
    console.log('Boa madrugada.')
} 