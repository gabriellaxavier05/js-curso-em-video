// Dando bom dia, boa tarde, boa noite ou boa madrugada dependendo da hora informada

// Pra pegar a hora atual do sistema
var agora = new Date()
var hora = agora.getHours() // pega a hora atual
console.log(`Agora são exatamente ${hora} horas.`)

// Verificando o período da hora
if (hora < 12){
    console.log('Bom dia!')
}
else if (hora  <= 18){
    console.log('Boa tarde!')
}
else if (hora <= 23){
    console.log('Boa noite!')
}
else [
    console.log('Boa madrugada! Zzz')
]