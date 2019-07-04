function limpar(){
    document.getElementById('div2').innerHTML = `<p>Vetor: vazio...</p>`
    return []
}
function adicionar(vetor){
    var numero = Number(document.getElementById('numero').value)
    vetor.push(numero)
    document.getElementById('div2').innerHTML = `<p>Vetor: ${vetor}</p>`
}

limpar() // Rodar função
var vetor = []