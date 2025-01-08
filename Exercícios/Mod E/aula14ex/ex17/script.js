function tabuada(){
    let num = document.getElementById('txtn') // pega o número informado pelo usuário e armazena-o na variável num
    let tab = document.getElementById('seltab') // associação com o select
    
    if (num.value.length == 0){
        // Se o campo estiver vazio, essa msg será exibida para o usuário
        window.alert('Por favor, digite um número!') 
    }
    else {
        // Se o campo não estiver vazio quando o botão for clicado, então será feita uma conversão de dados
        let n = Number(num.value)
        
        let c = 1 // contador

        tab.innerHTML= '' // limpa o select antes da tabuada começar

        // Laço para calcular a tabuada
        while (c <= 10){
            let item = document.createElement('option') // criando opções dentro do select
            item.text = `${n} x ${c} = ${n * c}` // cálculo e resultado da tabuada dentro do select
            item.value = `tab${c}` // para poder selecionar as opções exibidas da tabuada
            tab.appendChild(item) // adiciona o elemento
            c++ // incremento
        }

    }
}

function limpaRes(){ // função que limpa os resultados da tela
    let tab = document.getElementById('seltab') // referência ao select
    tab.innerHTML = '' // Limpa todas as opções do select

    let num = document.getElementById('txtn') // referência ao campo txtn, onde o usuário informa um valor
    num.value = '' // Limpa o campo de texto (input)
}