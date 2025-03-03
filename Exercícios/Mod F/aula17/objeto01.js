let amigo = {
    nome: 'José', 
    sexo: 'M', 
    peso: 85.4,
    engordar(p = 0){
        console.log('Engordou')
        this.peso += p // this é uma referência ao objeto
    }
}

amigo.engordar(2) // passa o valor 2 para a função engordar

console.log(amigo)
console.log('')
console.log(amigo.nome + ' pesa ' + amigo.peso + ' kg.') // mostra somente o nome declarado no objeto