// ENGORDAR
function engordar(){
    var p = Number(document.getElementById('p').value)
    limpar()
    objeto.engordar(p)
    msg.innerHTML += `<p>Engordei ${p} Kg... Estou com ${objeto.peso} Kg.</p>`
}

// EMAGRECER
function emagrecer(){
    var p = Number(document.getElementById('p').value)
    limpar()
    objeto.emagrecer(p)
    msg.innerHTML += `<p>Emagreci ${p} Kg... Estou com ${objeto.peso} Kg.</p>`
}

// LIMPAR E FOCAR NO FORMULÁRIO
function limpar(){
    document.getElementById('p').value = ''
    document.getElementById('p').focus()
    msg.innerHTML = `<p>Eu sou <strong>${objeto.nome}</strong>, e peso ${objeto.peso} Kg.</p>`
}

// OBJETO
var objeto = {
    nome: 'Leandro',
    sexo: 'M', 
    peso: 60, 
    engordar(p){
        this.peso += p
    },
    emagrecer(p){
        this.peso -= p
    }
}

// SAIDA
var msg = document.getElementById('div2')
msg.innerHTML = `<p>Eu sou <strong>${objeto.nome}</strong>, e peso ${objeto.peso} Kg.</p>`