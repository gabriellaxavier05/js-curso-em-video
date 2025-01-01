// Dizendo se a pessoa pode votar ou não dependendo da sua idade

var idade = 65

// Condicionais encadeadas
if (idade < 16) {
    console.log('Criança/adolescente; não vota')
}
else if (idade == 16 || idade == 17){
    console.log('Jovem; voto opcional')
}
else if (idade >= 18 && idade <= 64){
    console.log('Adulto; voto obrigatório')
}
else {
    console.log('Idoso; voto opcional')
}