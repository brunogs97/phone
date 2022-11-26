// cria uma referência nos elementos input
const telInput = document.querySelector('input[type=tel]');
const desligar = document.querySelector('.desligar');
const ligar = document.querySelector('.ligar');
const limpar = document.querySelector('.limpar');
const telTeclado = document.querySelectorAll('input[type=button]');


// função para apagar o último número
function apagar() {
    let inputText = telInput.value;
    telInput.value = inputText.substring(0,inputText.length-1);
}

// limpar tela
function limparTela() {
    telInput.value = ` `;
}


// vai percorrer a lista de teclas
for(let contador = 0; contador < telTeclado.length; contador++){
    const teclas = telTeclado[contador];

    // atributo onclick vai receber uma função anonima
    teclas.onclick = function () {
        telInput.value = telInput.value + teclas.value; //  telInput vai receber telinput + o valor de teclas
    }  
}
    
// vai desligar
desligar.onclick = function () {
    telInput.value = `Chamada Encerrada!`;
    setTimeout(limparTela, 1000);
}

// vai ligar
ligar.onclick = function () {
    telInput.value = `Chamando...`;
    setTimeout(limparTela, 1000); 
}

