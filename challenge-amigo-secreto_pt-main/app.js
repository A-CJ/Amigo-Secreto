//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let Amigos = [];


function adicionarAmigo() {
    let inputAmigos = document.getElementById("amigo");
    let nomeAmigo = inputAmigos.value;
    if (!nomeAmigo) {alert("Digite um nome válido");
        return;
    }
    
    Amigos.push(nomeAmigo);
    inputAmigos.value = "";
    inputAmigos.focus();
        atualizarlista();
}

function atualizarlista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < Amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = Amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
   if (Amigos.length === 0) {
       alert("Adicione amigos para sortear");
       return;
   }
    let sorteado = Math.floor(Math.random() * Amigos.length);
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo sorteado é: ${Amigos[sorteado]}`;
    Amigos = [];

}
