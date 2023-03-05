function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //pega o ano atual
    var anoUser = document.getElementById('txtano') //pega o ano digitado pelo usuario
    var resultado = document.querySelector('div#res') 

    //verificando se o usuário digitou um ano ou se o ano inserido é válido (não é maior que o ano atual)
    if(anoUser.value.length == 0 || anoUser.value > ano){
        window.alert('ERRO! Verifique os dados e tente novamente.')
    }else {
        var sexUser = document.getElementsByName('radsex') 
        var idade = ano - anoUser.value //calcula a idade da pessoa
        var gênero = ''
        
        //DEFININDO A IMAGEM DINAMICAMENTE
        //posso criar tags com js. Na linha abaixo criei a tag <img id="foto">
        var img = document.createElement('img') //criei a tag img
        img.setAttribute('id', 'foto') //adicionei um id com valor 'foto'

        if(sexUser[0].checked){ //sexo masculino
            gênero = 'Homem'
            document.body.style.background = 'rgb(70, 142, 236)'
            if(idade <= 13){
                //criança
                img.setAttribute('src', 'imagemMenino.png')
            }else if(idade <= 29){
                //jovem
                img.setAttribute('src', 'imagemHomemJovem.png')
            }else if(idade <= 65){
                //adulto
                img.setAttribute('src', 'imagemHomemAdulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagemIdoso.png')
            }
        }else if(sexUser[1].checked){ //sexo feminino
            gênero = 'Mulher'
            document.body.style.background = 'rgb(218, 125, 197)'
            if(idade <= 13){
                //criança
               img.setAttribute('src', 'imagemMenina.png')
            }else if(idade <= 29){
                //jovem
                img.setAttribute('src', 'imagemMulherJovem.png')
            }else if(idade <= 65){
                //adulta
                img.setAttribute('src', 'imagemMulherAdulta.png')
            }else {
                //idosa
                img.setAttribute('src', 'imagemIdosa.png')
            }
        } 

        //Mostrando e estilizando o resultado
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        resultado.appendChild(img) //adiciona a tag img na div depois da mensagem acima
    }



}