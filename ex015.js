// Vetor:
//                                       0  1  2  3  4
// var num ---------------------------> [1, 2, 3]
// ADICIONA VALOR  -> num[3] = 4 -----> [1, 2, 3, 4]
// ADICIONA VALOR  -> num.push(5) ----> [1, 2, 3, 4, 5]
// BUSCAR VALOR    -> num.indexOf(3) ->    =   2      Se não tiver ele retorna -1 
// TAMANHO         -> num.length
// ORDEM CRESCENTE -> num.sort()
function limpar(){
    document.getElementById('div2').innerHTML = `<p>Vetor vazio...</p>`
}
function criar(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var n3 = Number(document.getElementById('n3').value)
    var vetor = []
    vetor.push(n1)
    vetor.push(n2)
    vetor.push(n3)
    document.getElementById('div2').innerHTML = ''
    for(var i in vetor){ // For in
        document.getElementById('div2').innerHTML += `${vetor[i]} <br />`
    }
    document.getElementById('div2').innerHTML += '<br />Vetor: ' + vetor
}