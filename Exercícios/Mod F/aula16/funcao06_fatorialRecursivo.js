// Crie uma função recursiva que calcule o fatorial de um número

/*

Lembrando que, fatorial é:
5! = 5 x 4 x 3 x 2 x 1 = 120

Com a função recursiva:
5! = 5 x 4! 

*/

function fatorial(n){
    if (n == 1){
        return 1
    } 
    else {
        return n * fatorial(n - 1) // é o mesmo que n x (n - 1)!
    }
}

console.log('** PROGRAMA FATORIAL DE UM NÚMERO USANDO FUNÇÃO RECURSIVA **')
console.log('')
console.log('Resultado do fatorial: ' + fatorial(5)) // chamada da função + apresentação do resultado