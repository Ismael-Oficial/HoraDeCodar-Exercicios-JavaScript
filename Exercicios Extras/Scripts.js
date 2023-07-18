// Através do DOM crie um programa que calcula o valor aritmedico de três numeros indicados pelo usuario.

function CalcularMedia(){
    let n1 = document.querySelector('#n1')
    let n2 = document.querySelector('#n2')
    let n3 = document.querySelector('#n3')

    let resultado = document.querySelector('#resultado')

    let number1 = Number(n1.value)
    let number2 = Number(n3.value)
    let number3 = Number(n3.value)

    let media = parseFloat((number1 + number2 + number3) / 3)

    resultado.innerHTML = "A Media é de: " + media
}

// Crie um programa onde deve-se gerar um numero aleatorio e cada numero gerado deve corresponder a um pokemon diferente.

function GerarNum() {
    let MAX = 4
    let MIN = 1
    let number = parseInt(Math.random() * (MAX - MIN + 1));

    let resultado = document.querySelector('#resultado')


    if (number == 1) {
        resultado.innerHTML = '<img src="imgs/Charmander.png">'
    }
    else if (number == 2) {
        resultado.innerHTML = '<img src="imgs/Squirtle.png">'
    }
    else if (number == 3) {
        resultado.innerHTML = '<img src="imgs/Bulbasauro.png">'
    }
    else{
        resultado.innerHTML = '<img src="imgs/Pikachu.png">'
    }
}