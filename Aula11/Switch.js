var dia = new Date()
/*
    O método getDay() me retornará o número correspondente ao dia da semana
    
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
 */
switch(dia.getDay()){
    case 0:
        console.log('Hoje é Domingo!')
        break
    
    case 1:
        console.log('Hojé é Segunda!')
        break

    case 2:
        console.log('Hojé é Terça!')
        break

    case 3:
        console.log('Hojé é Quarta!')
        break

    case 4:
        console.log('Hoje é Quinta!')
        break

    case 5: 
        console.log('Hoje é Sexta!')
        break
    
    case 6:
        console.log('Hoje é Sábado!')
        break

    default:
        console.log('Dia inválido')
}