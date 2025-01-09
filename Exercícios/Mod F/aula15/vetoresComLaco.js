let num = [10, 8, 23, 15] // criação do vetor
num[4] = 2 // adicionando + 1 posição e elemento

/* usando um laço de repetição para exibir os valores do vetor
for (let i = 0; i < num.length; i++) {
    console.log(`Posição ${i} : ${num[i]}`)
}
*/

// usando uma maneira simplificada de exibir os elementos do vetor
for (let pos in num){
    console.log(`Posição ${pos} : ${num[pos]}`)
}