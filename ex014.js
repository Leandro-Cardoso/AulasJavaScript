function calcular(){
    var numero = Number(document.getElementById('numero').value)
    var tabuada = document.getElementById('tabuada')
    tabuada.innerHTML = '' // Zerar valores
    for(var i = 1; i <= 10; i++){
        // Criar item
        var item = document.createElement('option')

        // Por valores no item
        item.text = `${i} x ${numero} = ${i * numero}`
        item.value = `v${i}`

        // Adicionar item
        tabuada.appendChild(item)
    }
}