const elementoChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak (e) {
   chute = e.results[0][0].transcript;
   exibeChute(chute);
   validaChute(chute);
}

function exibeChute (chute) {
    elementoChute.innerHTML = `
    <div>Você disse: </div>
    <span class="box">${chute}</span>
    `
}
