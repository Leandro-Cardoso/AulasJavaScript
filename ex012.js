function carregar(){
    // Laços de repetições:
    var c = 0
    // de 1 a 5
    while(c < 5){
        c++
        document.getElementById('div1').innerHTML += `<p>Teste A... ${c}</p>`
    }

    // de 6 a 10
    do{
        c++
        document.getElementById('div1').innerHTML += `<p>Teste B... ${c}</p>`
    }while(c < 10)

    // de 11 a 15
    c++
    for(c; c <= 15; ++c){
        document.getElementById('div1').innerHTML += `<p>Teste C... ${c}</p>`
    }
}