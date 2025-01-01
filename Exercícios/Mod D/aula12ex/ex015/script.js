// Criando a função para verificar a idade do usuário
function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // Vai pegar o ano no formato yyyy
    var fano = document.getElementById('txtano') // Referência ao campo txtano, onde o usuário informa o ano de nascimento
    var res = document.querySelector('div#res') // Referência ao id 'res'

    // Verifiicando se o ano informado é maior que o ano atual
    if (fano.value.length == 0 || Number(fano.value) > ano){ // Se o ano informado for igual a 0 ou for maior que o ano atual...
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex') // Referência ao radiobutton
        var idade = ano - Number(fano.value) // Descobrindo a idade do usuário
        var genero = ''

        // Inserindo imagem na página HTML usando o JS
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // Cria um id para a tag img

        // Verificando o gênero da pessoa
        if (fsex[0].checked){ // Se a opção 0 do radiobutton foi selecionada, então...
            genero = 'Homem'
            // Apresentando uma imagem de acordo com a faixa etária do usuário
            if (idade >= 0 && idade <=10){
                // Criança
                img.setAttribute('src', 'imgs/bb_menino.png') // apresenta a img do bebê menino
            }
            else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'imgs/rapaz.png') // apresenta a img do rapaz
            }
            else if (idade < 60){
                // Adulto
                img.setAttribute('src', 'imgs/homem_adulto.png') // apresenta a img do homem adulto
            }
            else {
                // Idoso
                img.setAttribute('src', 'imgs/idoso.png') // apresenta a img do idoso
            }
        }
        else if (fsex[1].checked){ // Se a opção 1 do radiobutton foi selecionada, então...
            genero = 'Mulher'
            // Apresentando uma imagem de acordo com a faixa etária do usuário
            if (idade >= 0 && idade <=10){
                // Criança
                img.setAttribute('src', 'imgs/bb_menina.png') // apresenta a img da bebê menina
            }
            else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'imgs/moca.png') // apresenta a img da moça
            }
            else if (idade < 60){
                // Adulto
                img.setAttribute('src', 'imgs/mulher-adulta.png') // Apresenta a img da mulher adulta
            }
            else {
                // Idoso
                img.setAttribute('src', 'imgs/idosa.png') // apresenta a imagem do idosa
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // Adicionando o elemento do tipo img na div 'res'
    }
}