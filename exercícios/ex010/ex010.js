function calcular () {

    let txtv = window.document.querySelector('input#txtvel')

    let res = window.document.querySelector('div#resultado')

    let vel = Number(txtv.value)

    res.innerHTML = (`<p>Sua velocidade é de <strong>${vel} Km/h!</strong></p>`)

    if (vel > 120) { 

        res.innerHTML = (`<p>Velocidade igual a ${vel} Km/h. <strong>MULTADO!</strong></p>`)

    } else {

        res.innerHTML = (`<p>Velocidade igual a <strong>${vel} Km/h.</strong> dentro dos limites de velocidade estabelecidos por lei.</p>`)
    }

    res.innerHTML += (`<p>Dirija sempre com <strong> CINTO DE SEGURANÇA!</strong></p>`)
}