function validaChute (chute) {
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `
        <div> Valor Invalido </div>
        `
    }
    if(chuteForaValor(numero)) {
       elementoChute.innerHTML += `
       <div> Numero invalido: fale um numero entre ${menorValor} e ${maiorValor}</div>
       ` 
    }
    if(numero === numeroSecreto) {
        document.body.innerHTML = `
         <h2> Você Acertou! <h2>
         <h3> O numero secreto é ${numeroSecreto} <h3>
        
        `
    }else if (numero > numeroSecreto)
     {
        elementoChute.innerHTML += `
        <div>O numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
     } else {
        elementoChute.innerHTML += `
        <div>O numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
     }

}

function chuteInvalido (numero) {
    return Number.isNaN(numero)
}

function chuteForaValor (numero) {
    return numero > maiorValor || numero < menorValor
}