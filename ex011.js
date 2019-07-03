function verificar(){
    var nascimento = document.getElementById('nascimento').value
    var idade = Number(new Date().getFullYear()) - nascimento
    if(idade < 0){
        document.getElementById('div2').innerHTML = ''
        alert('ERRO! - Ano de nascimento digitado errado.')
    }
    else if(idade > 150){
        document.getElementById('div2').innerHTML = ''
        alert(`ERRO! - Acusando idade de ${idade} anos.`)
    }
    else{
        if(document.getElementById('male').checked){
            var sexo = 'masculino'
            document.getElementById('div2').innerHTML = `<img id="imagem" src="imagens/male.jpg" alt="Sexo">`
        }
        else{
            var sexo = 'feminino'
            document.getElementById('div2').innerHTML = `<img id="imagem" src="imagens/female.jpg" alt="Sexo">`
        }
        document.getElementById('div2').innerHTML += `<p>Sexo: ${sexo} <br />Idade: ${idade}</p>`
    }
}