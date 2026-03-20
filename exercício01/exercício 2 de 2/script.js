let anoHoje = new Date()
anoHoje = anoHoje.getFullYear()

document.getElementById('verificar').addEventListener('click', function (){
    let anoNascimento = document.getElementById('anoNascimento').value
    let idade = 0

    if(anoNascimento < anoHoje && anoNascimento > 1900) {
        idade = anoHoje - anoNascimento
        document.getElementById('idade').innerText = idade
        document.getElementById('imagem').style.display = 'flex'
    } else {
        alert('[ERROR] Digite uma data válida!')
    }
    
    let genero = document.querySelector('input[name="genero"]:checked').value
    if(genero === 'm'){
        document.getElementById('genero').innerText = 'um homem'
        document.body.style.background = 'rgba(65, 135, 255, 0.607)'

        if (idade > 0 && idade <= 15) {
            document.querySelector('#imagem>div').innerHTML = '<img src="estilos/imagens/malekid.jpg">'
        } else if (idade > 15 && idade <= 24){
            document.querySelector('#imagem>div').innerHTML = '<img src="estilos/imagens/maleTeenager.jpg">'
        } else if (idade > 24 && idade <= 59) {
            document.querySelector('#imagem>div').innerHTML = '<img src="estilos/imagens/maleAdulthood.jpg">'
        } else if (idade > 59) {
            document.querySelector('#imagem>div').innerHTML = '<img src="estilos/imagens/male60.jpg">'
        }
    } else if (genero === 'f') {
        document.getElementById('genero').innerText = 'uma mulher'
        document.body.style.background = 'rgba(255, 65, 236, 0.61)'

        if (idade > 0 && idade <= 15) {
            document.querySelector('#imagem>div').innerHTML = '<img src="estilos/imagens/femalekid.jpg">'
        } else if (idade > 15 && idade <= 24){
            document.querySelector('#imagem>div').innerHTML = '<img src="estilos/imagens/femaleTeenager.jpg">'
        } else if (idade > 24 && idade <= 59) {
            document.querySelector('#imagem>div').innerHTML = '<img src="estilos/imagens/femaleAdulthood.jpg">'
        } else if (idade > 59) {
            document.querySelector('#imagem>div').innerHTML = '<img src="estilos/imagens/female60.jpg">'
        }
    }
})


