// Primeiros passos com vetores em JS

let num = [10, 8, 23, 15] // criação do vetor
// num[4] = 2 // adicionando + 1 posição e elemento
num.push(1) // adiciona um elemento ao final do vetor

console.log(`O vetor tem ${num.length} posições`) // mostra o tamanho do vetor
console.log(num[0]) // mostra o valor da posição 0
console.log(num.sort()) // Ordena em ordem crescente os valores do vetor

// procurando por um valor dentro do vetor
let pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não foi encontrado')
}
else {
    console.log(`O valor 2 está na posição ${pos}`)
}