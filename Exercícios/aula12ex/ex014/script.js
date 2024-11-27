function carregar(){
    var msg = window.document.getElementById('msg') // referência com o id 'msg' da div 1
    var imagem = window.document.getElementById('imagem') // referência com o id 'foto' da div 2
    
    // para pegar ao horário atual:
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    // para apresentar a mensagem ao usuário
    msg.innerHTML = `Agora são ${hora}h e ${min}min.`

    // criando as condições
    if (hora >= 0 && hora < 12){
        // Bom dia; entre 00h e 11h59
        imagem.src = 'imgs/manha.png'
        document.body.style.background = '#fce38d' // mudando o fundo da página de acordo com a foto exibida
    }
    else if (hora >= 12 && hora <= 18){
        // Boa tarde; entre 12h e 18h
        imagem.src = 'imgs/tarde.png'
        document.body.style.background = '#e88552' // mudando o fundo da página de acordo com a foto exibida
    }
    else {
        // Boa noite; acima das 18h
        imagem.src = 'imgs/noite.png'
        document.body.style.background = '#708685' // mudando o fundo da página de acordo com a foto exibida
    }
}