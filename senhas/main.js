const numeroSenha = document.querySelector('.parametro-senha__texto');

numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha - 1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
            // tamanhoSenha = tamanhoSenha + 1;
            tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

const campoSenha = document.querySelector('#campo-senha');

geraSenha();

function geraSenha(){
 for (let i = 0; i < tamanhoSenha;i++) {
     let numeroAleatorio = Math.random()*letrasMaiusculas.length;
     numeroAleatorio = Math.floor(numeroAleatorio);
     console.log(letrasMaiusculas[numeroAleatorio]);
 }
}

campoSenha.value = letrasMaiusculas;
function geraSenha(){
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
            let numeroAleatorio = Math.random()*letrasMaiusculas.length;
            numeroAleatorio = Math.floor(numeroAleatorio);
            senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
    }

console.log(checkbox);
console.log(checkbox[0].checked);
const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('forca');

function geraSenha()
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
        <div class="forca fraca forte">
</div> == $0

    }
    function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
        if (tamanhoSenha > 11){
           forcaSenha.classList.add('forte');
        } else if (tamanhoSenha > 5 && tamanhoSenha < 12) {
            forcaSenha.classList.add('media');
        } else if (tamanhoSenha <= 5){
            forcaSenha.classList.add('fraca');
        }
    }
    function classificaSenha(tamanhoalfabeto) {
        let entropia = tamanhoSenha * Math.log2(alfabeto.length);
        console.log(entropia);
    }
        function geraSenha() {
            let alfabeto = '';
            classificaSenha(alfabeto.length);
        }
        if (entropia > 57){
            forcaSenha.classList.add('forte');
        } else if (entropia > 35 && entropia < 57 ) {
            forcaSenha.classList.add('media');
        } else if (entropia <= 35){
            forcaSenha.classList.add('fraca');
        }
        const valorEntropia = document.querySelector('.entropia');
        valorEntropia.textContent = entropia;
        valorEntropia.textContent = 2**Math.floor(entropia);
        valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);
                    
