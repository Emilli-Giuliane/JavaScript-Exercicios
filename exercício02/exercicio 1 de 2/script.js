document.getElementById('contar').addEventListener('click', function() {
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    
    if(inicio === 0 || fim === 0) {
        document.querySelector('#mensagemErro').style.display = 'block'
        document.getElementById('paragrafoEscondido').style.display = 'none'
        document.querySelector('#mostrarContagem').style.display = 'none'
    } else {
        document.querySelector('#mensagemErro').style.display = 'none'
        document.querySelector('#mostrarContagem').style.display = 'block'
        
        
        document.getElementById('esconderContando').style.display = 'none'
        document.getElementById('paragrafoEscondido').style.display = 'block'
        
        document.getElementById('mostrarInicio').innerText = inicio
        document.getElementById('mostrarFim').innerText = fim
        document.querySelector('.mostrarPasso').innerText = passo
        
        // Limpa o campo para o próximo texto
        if (passo < 1) {
            alert('[ERROR] O valor de Passos deve ser igual ou maior que 1. Mudaremos o valor de passos para 1'
            )
            passo = 1
        }
        
        document.querySelector('#mostrarContagem').innerHTML = `` 
        for(let i = inicio; i <= fim; i += passo) {
            document.querySelector('#mostrarContagem').innerHTML += `&#x1F449 ${i}`
        }
        
        // Bandeirinha garantida no final de cada contagem
        document.querySelector('#mostrarContagem').innerHTML += `&#x1F449 &#x1F3C1`
    }
    if (inicio > fim) {
    alert('[error] inicio maior que fim. Digite um número para iniciar que seja menor que o número final.')
        document.querySelector('#mensagemErro').style.display = 'block'
        document.getElementById('paragrafoEscondido').style.display = 'none'
        document.querySelector('#mostrarContagem').style.display = 'none'

    }
})