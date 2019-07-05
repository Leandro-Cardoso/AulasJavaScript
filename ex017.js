// LIMPAR E FOCAR NO FORMULÁRIO
function focar(){
    document.getElementById('numero').value = ''
    document.getElementById('numero').focus()
    document.getElementById('div2').innerHTML = ''
}

// ADICIONAR
function adicionar(){
    var numero = Number(document.getElementById('numero').value)
    // Adicionar número ao vetor
    vetor.push(numero)
    // Adicionar option ao select
    var item = document.createElement('option')
    item.text = numero
    item.value = numero
    item.id = `v${numero}`
    document.getElementById('lista').appendChild(item)
    // Limpar número e focar
    focar()
}

// REMOVER
function remover(vetor){
    var numero = Number(document.getElementById('numero').value)
    // O número existe na lista? Quanto se repete?
    var existeNumero = false
    var repeteNumero = 0
    for(var i in vetor){
        if(vetor[i] == numero){
            existeNumero = true
            repeteNumero++
        }
    }
    if(existeNumero){
        // Remover option do select
        var item = document.getElementById(`v${numero}`)
        document.getElementById('lista').removeChild(item)
        // Remover número do vetor
        var vetorTemp = []
        for(var j in vetor){
            if(vetor[j] != numero){
                vetorTemp.push(vetor[j])
            }
            else if(repeteNumero > 1){
                repeteNumero--
                vetorTemp.push(numero)
            }
        }
        // Limpar número e focar
        focar()
        return vetorTemp
    }
    else{
        alert(`Não exite na lista o valor ${numero}`)
        // Limpar número e focar
        focar()
        return vetor
    }
}

// ANALISAR
function analisar(vetor){
    var n = vetor.length
    var maximo = vetor[0]
    var minimo = vetor[0]
    var soma = 0
    // Maior e menor valor
    for(var i in vetor){
        soma += vetor[i]
        if(vetor[i] > maximo){
            maximo = vetor[i]
        }
        if(vetor[i] < minimo){
            minimo = vetor[i]
        }
    }
    var amplitude = maximo - minimo
    var media = soma / n
    // Visualisação
    resultado = document.getElementById('div2')
    resultado.innerHTML = `<p>Vetor ordenado = ${vetor}</p>`
    resultado.innerHTML += `<p>N = ${n}</p>`
    resultado.innerHTML += `<p>Máximo = ${maximo}</p>`
    resultado.innerHTML += `<p>Mínimo = ${minimo}</p>`
    resultado.innerHTML += `<p>Amplitude = ${amplitude}</p>`
    resultado.innerHTML += `<p>Somatório = ${soma}</p>`
    resultado.innerHTML += `<p>Média = ${media}</p>`
}

// VETOR
var vetor = []

// ESTILO
document.getElementById('div2').style.textAlign = 'left'
document.getElementById('lista').style.width = '200px'