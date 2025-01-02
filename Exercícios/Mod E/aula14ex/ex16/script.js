// Criando a função contar()
function contar() {
    let ini = document.getElementById('txti') // pega o valor do campo cujo id é 'txti' e armazena na variável 'ini'
    let fim = document.getElementById('txtf') // pega o valor do campo cujo id é 'txtf' e armazena na variável 'fim'
    let passo = document.getElementById('txtp') // pega o valor do campo cujo id é 'txtp' e armazena na variável 'passo'
    let res = document.getElementById('res') // pega o que tá na div 'res' e atribuí à variável 'res'

    // Se o tamanho de ini, ou fi, ou passo for igual a 0... 
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!' // Apresentar essa msg
    }
    else { // Senão... 
        res.innerHTML = 'Contando: <br>'
        // Convertendo de texto para número: 
        let i = Number(ini.value)  
        let f = Number(fim.value) 
        let p = Number(passo.value)

        if (p <= 0) { // o que for definido nesse if valerá nos outros. Se inicialmente valer = 0, logo passará a ser = 1 e assim continuará o fluxo
            window.alert('Passo inválido! Considerando PASSO 1')    
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p){ // c += p é o mesmo que c = c + p
                res.innerHTML += `${c} \u{1F449}` // emoji do unicode: 👉🏼
            }
        }
        else {
            // Contagem regressiva: 
            for(let c = i; c >= f; c -= p){ // c -= p é o mesmo que c = c - p
                res.innerHTML += `${c} \u{1F449}` // emoji do unicode: 👉🏼
            }
        }

        res.innerHTML += `\u{1F3C1}` // emoji do unicode: 🏁
    }
}