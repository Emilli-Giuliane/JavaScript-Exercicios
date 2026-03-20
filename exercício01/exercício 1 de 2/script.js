let horasAgora = new Date()
horasAgora = horasAgora.getHours()

document.getElementById('horasAgora').innerText = horasAgora

if(horasAgora >= 5 && horasAgora < 12) {
    alert('bom dia')
    document.body.style.background = '#ffba24a0'
    document.querySelector('h1').style.color = '#fbf4e7'
    document.querySelector('main').innerHTML += '<img src="estilos/imagens/dia.jpg"></img>'
} else if (horasAgora >= 12 && horasAgora < 18){
    alert('boa tarde')
    document.body.style.background = '#b1733c'
    document.querySelector('main').innerHTML += '<img src="estilos/imagens/tarde.jpg">'
} else if (horasAgora >= 18 && horasAgora <= 23 || horasAgora >= 0 && horasAgora < 5 ) {
    alert('boa noite')
    document.body.style.background = '#434343'
    document.querySelector('main').innerHTML += '<img src="estilos/imagens/noite.jpg">'
}
else {
    alert('ERROR')
}