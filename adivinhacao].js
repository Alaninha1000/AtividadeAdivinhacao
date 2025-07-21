function escolhaComputador() {
    return Math.floor(Math.random() * 101);
}

let resposta = '';

do {
    alert("==JOGO DA ADIVINHAÇÃO==");
    const numeroComputador = escolhaComputador();
    let tentativas = 5;
    let acertou = false;

    let respostaJogador = parseInt(prompt("Bem vindo ao jogo! Qual número de 1 a 100 você acha que vai aparecer? Informe: "));

    while (isNaN(respostaJogador) || respostaJogador < 1 || respostaJogador > 100) {
        respostaJogador = parseInt(prompt("Por favor, informe um número VÁLIDO de 1 a 100: "));
    }

    while (tentativas > 0) {
        if (respostaJogador === numeroComputador) {
            alert("Parabéns! Você acertou o número: " + numeroComputador);
            acertou = true;
            break;
        } else if (respostaJogador < numeroComputador) {
            tentativas--;
            if (tentativas > 0) {
                alert("O número é MAIOR. Você ainda tem " + tentativas + " tentativas.");
                respostaJogador = parseInt(prompt("Informe a nova sugestão: "));
                while (isNaN(respostaJogador) || respostaJogador < 1 || respostaJogador > 100) {
                    respostaJogador = parseInt(prompt("Por favor, informe um número VÁLIDO de 1 a 100: "));
                }
            }
        } else {
            tentativas--;
            if (tentativas > 0) {
                alert("O número é MENOR. Você ainda tem " + tentativas + " tentativas.");
                respostaJogador = parseInt(prompt("Informe a nova sugestão: "));
                while (isNaN(respostaJogador) || respostaJogador < 1 || respostaJogador > 100) {
                    respostaJogador = parseInt(prompt("Por favor, informe um número VÁLIDO de 1 a 100: "));
                }
            }
        }
    }

    if (!acertou && tentativas === 0) {
        alert("Você perdeu! O número era: " + numeroComputador);
    }

    resposta = prompt("Deseja jogar novamente? (sim/não)").toLowerCase().trim();

} while (resposta !== 'não');