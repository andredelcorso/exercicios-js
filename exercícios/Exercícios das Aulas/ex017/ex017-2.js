function soma (n1, n2) { 
    return n1 + n2 
}

console.log(soma(2,5))

/* 

AQUI NESSA FUNÇÃO, N1 TERÁ O 2 ATRIBUIDO E N2 NÃO TERÁ NADA ATRIBUIDO, ACUSANDO UNDEFINED. PORTANTO, o resultado que sairá no console dará NaN (Not a Number)
function soma (n1, n2) {
    return n1 + n2 
}

console.log (soma(2))

*/


/* 

CASO EU NÃO PASSE O N1 OU O N2 NA FUNCTION, EU POSSO ATRIBUIR 0 NO PRÓPRIO PARÂMETRO. 

function soma (n1=0, n2=0) {
    return n1 + n2 
}

console.log (soma(2))

*/
