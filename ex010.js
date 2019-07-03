// Objetos:
function carregar(){
    var imagem = document.getElementById('imagem')
    var horas = new Date().getHours()
    document.getElementById('msg').innerHTML = `<p>Agora são ${horas} horas.</p>`
    if(horas > 18 || horas < 5){
        // Noite
        imagem.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#001122'
    }
    else if(horas > 11){
        // Tarde
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#b9846f'
    }
    else{
        // Manhã
        imagem.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
    }
}