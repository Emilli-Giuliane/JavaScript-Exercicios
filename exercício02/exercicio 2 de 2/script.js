document.getElementById('gerarTabuada').addEventListener('click', function (){
    let numero = document.getElementById('numero').value
    if(numero.length == 0) {
        alert("Campo vazio. Digite um número e tente novamente.")
    } else {
        let select = document.querySelector('#selectTabuada')
        select.size = '10'
        select.innerHTML ='' 
        for(let i = 0; i < 11; i++){
            let resposta = numero * i
            let novaOpcao = new Option(`${i} * ${numero} = ${resposta}`,`${resposta}`)
            select.add(novaOpcao)
        }
    }

})
