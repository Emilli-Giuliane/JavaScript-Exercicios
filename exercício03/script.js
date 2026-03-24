let adicionar = document.querySelector('#adicionar')

adicionar.addEventListener('click', function () {
    document.querySelector('#resposta').innerHTML = '' // Limpa o campo criado pelo botão "finalizar"
    
    let valorNum = document.querySelector('#num').value
    let select = document.querySelector('select')
    let verifica = [] // esta variável verifica se existe um número igual no próprio vetor
    
    select.size = '10'
    
    let novaOpcao = new Option(`Valor Salvo: ${valorNum}`, valorNum)
    
    for (let i = 1; i < select.length; i++) {
        verifica.push(select[i].value)
    }

    if (verifica.indexOf(valorNum) != -1) {
        alert('O número já está na lista')
    } else if (valorNum == ''){
        alert('[ERROR] O campo está vazio ou o valor é inválido, adicione um número')
    } else if(valorNum < 1 || valorNum > 100){
        alert('[ERROR] Digite um valor entre 1 e 100.')
    } else {
        select.add(novaOpcao)
    }
    document.querySelector('#num').focus()
    document.querySelector('#num').value = ''

})

let finalizar = document.querySelector('#finalizar')
finalizar.addEventListener('click', function () {
    
    let select = document.querySelector('select')
    Array.from(select.options)
    
    let valoresSelect = []
    
    for (let i = 1; i < select.length; i++) {
        valoresSelect.push(select[i].value)
    }
    
    if (valoresSelect == ''){
        alert('[ERROR] Não foi possível finalizar. Verifique se a lista contém números e tente novamente.')
    } else {
        valoresSelect.sort((a, b) => a - b)

        let soma = 0
        let numElemento // Número (conteúdo) dentro do elemento atual

        for (let i = 1; i < select.length; i++) {
            numElemento = Number(select[i].value)
            soma += numElemento
        }

        
        document.querySelector('#resposta').innerHTML = `<p>Ao todo existem ${select.length -  1} números na lista.<br>
        O maior valor informado foi ${valoresSelect.at(-1)}<br>
        O menor valor informado foi ${valoresSelect[0]}<br>
        A soma dos valores é ${soma}<br>
        A média dos valores digitados é ${soma / valoresSelect.length}</p>`
    }  
})