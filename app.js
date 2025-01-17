//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//iniciado em 17/01

//#region variaveis globais
 let amigos = [];
 //document.
//#endregion
//#region funções
 function adicionarAmigo(){
    let nome=document.getElementById('amigo').value;
    if(nome == ''){
        alert('Por favor, insira um nome');
        return;
    }
    amigos.push(nome);
    document.getElementById('amigo').value="";
    atualizaListaDeAmigos();
}
function atualizaListaDeAmigos(){
    let listaVisualizacao = document.getElementById('listaAmigos');
    listaVisualizacao.innerHTML = '';
    for(let nome of amigos)
    {
        let novoElemento=document.createElement('li');
        novoElemento.appendChild(document.createTextNode(nome));
        listaVisualizacao.appendChild(novoElemento);
    }
}
function sortearAmigo()
{
    let nomeAmigosorteado=amigos[parseInt(Math.random()*amigos.length)];
    let resultado=document.getElementById('resultado');
    resultado.value=nomeAmigosorteado;
}
//#endregion

