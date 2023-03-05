/*var dispara = document.getElementsByTagName('body')
dispara.addEventListener('load', carregar)*/

function carregar(){
    
    var mensagem = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date() 
    var hora = data.getHours()
    //var hora = 20
    mensagem.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#b2defe'
    }else if(hora >= 12 && hora < 18){
        imagem.src = 'fototarde.png'
        document.body.style.background = '#f9b669'
    }else{
       imagem.alt = "Foto de uma noite estrelada" 
       imagem.src = 'fotonoite.png'
       document.body.style.background = '#292d2e'
    }

}