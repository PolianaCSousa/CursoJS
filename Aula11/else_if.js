//A classe Date possui metodos para conseguir hora, min, seg, data dentre outros 
var agora = new Date()
//var hora = agora.getHours()
console.log(`Agora são exatamente ${agora.getHours()} horas`)
if(agora.getHours() < 12){
    console.log('Bom dia!')
}else if(agora.getHours() <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}