let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let votosBranco = 0;
let votosNulos = 0;
let votacaoEncerrada = false;

function exibirResultados() {
    const candidatos = [
        { nome: "Candidato X", votos: candidato_X },
        { nome: "Candidato Y", votos: candidato_Y },
        { nome: "Candidato Z", votos: candidato_Z }
    ];
    
    candidatos.sort((a, b) => b.votos - a.votos);
    
    let resultado = "Resultados da eleição:<br>";
    candidatos.forEach(candidato => {
        resultado += `${candidato.nome}: ${candidato.votos} votos<br>`;
    });
    
    resultado += `Votos em branco: ${votosBranco}<br>`;
    resultado += `Votos nulos: ${votosNulos}<br>`;
    
    const vencedor = candidatos[0];
    
    if (candidatos[1].votos === vencedor.votos) {
        resultado += "Houve um empate entre os candidatos com mais votos.";
    } else {
        resultado += `O vencedor é ${vencedor.nome} com ${vencedor.votos} votos!`;
    }
    
    document.getElementById("resultado").innerHTML = resultado;
}

function votar(candidato) {
    if (!votacaoEncerrada) {
        if (candidato === 'candidato_X') {
            candidato_X++;
        } else if (candidato === 'candidato_Y') {
            candidato_Y++;
        } else if (candidato === 'candidato_Z') {
            candidato_Z++;
        } else if (candidato === 'branco') {
            votosBranco++;
        } else {
            votosNulos++;
        }
        alert(`Voto registrado para ${candidato}.`);
    } else {
        alert("A votação está encerrada.");
    }
}

function finalizarVotacao() {
    votacaoEncerrada = true;
    exibirResultados();
}
