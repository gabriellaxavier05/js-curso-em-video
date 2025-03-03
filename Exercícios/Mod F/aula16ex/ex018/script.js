// variáveis
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


// fverifica se é ou não um número
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { // se for um número entre 1 e 100
        return true
    }
    else { // senão...
        return false
    }
}

// verificando se o número já está na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // se o número já estiver na lista
        return true
    }
    else { // senão...
        return false
    }
}

// adicionar elementos ao select
function adicionar() {
    // verificando se é um número e se está na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // adicionando os valores ao vetor valores[]
        valores.push(Number(num.value))

        // adicionando os valores no select
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) // adiciona mais um item na lista
        res.innerHTML = '' // limpa a div res depois de adicionar um elemento
    }
    else { // se não for um número ou se já estiver na lista
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    // apagando as informações do campo de texto
    num.value = ''
    num.focus()
}

function finalizar() {
    // verifica se o vetor está vazio
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }
    else {
        let tot = valores.length // total de elementos no vetor
        let maior = valores[0] // maior valor
        let menor = valores[0] // menor valor
        let soma = 0 // soma
        let media = 0 // média

        // verificando o maior e o menor valor e somando os valores
        for (let pos in valores) {            
            soma += valores[pos]
            
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        // calculando a média
        media = soma / tot

        res.innerHTML = '' // limpa a div res
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`     
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`    
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}