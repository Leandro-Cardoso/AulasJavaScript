function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passos = Number(document.getElementById('passo').value)
    var div2 = document.getElementById('div2')
    div2.innerHTML = ''
    if(inicio < 0){
        div2.innerHTML += `<p>ERRO! - Início menor que 0.</p>`
    }
    else if(fim < 1){
        div2.innerHTML += `<p>ERRO! - Fim menor que 1.</p>`
    }
    else if(passos < 1){
        div2.innerHTML += `<p>ERRO! - Passos menor que 1.</p>`
    }
    else if(inicio >= fim){
        div2.innerHTML += `<p>ERRO! - Início maior ou igual ao Fim.</p>`
    }
    else if(passos > (fim - inicio)){
        div2.innerHTML += `<p>ERRO! - Passo maior que o intervalo de deslocamento.</p>`
    }
    else{
        for(inicio; inicio <= fim; inicio += passos){
            div2.innerHTML += `${inicio} \u{27A1} `
        }
        div2.innerHTML += `\u{2714}`
    }
}