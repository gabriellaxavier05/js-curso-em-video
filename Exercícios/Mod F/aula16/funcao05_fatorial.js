// Crie uma função que calcule o fatorial de um número

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) { // enquanto c for maior que 1, c perde 1 a cada iteração
        fat *= c
    }
    return fat
}

console.log('** PROGRAMA FATORIAL DE UM NÚMERO **')
console.log('')
console.log('Resultado do fatorial: ' + fatorial(5)) // chamada da função + apresentação do resultado