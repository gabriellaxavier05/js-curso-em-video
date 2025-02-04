// Crie uma função que verifique se um número é par ou ímpar

function parOuImpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    }
    else {
        return 'Ímpar!'
    }
}

console.log('** PROGRAMA PAR OU ÍMPAR **')
console.log('')
console.log('Resultado da verificação: ' + parOuImpar(2)) // chamada da função + apresentação do resultado