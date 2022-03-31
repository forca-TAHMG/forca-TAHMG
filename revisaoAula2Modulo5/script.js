
function obterPalavra() {
    const temas = {
        frutas: ["manga", "banana", "maçã", "laranja", "limão", "abacaxi", "tangerina", "uva", "morango", "maracujá"],
        animais: ["cachorro", "gato", "galinha", "vaca", "leão", "elefante", "cavalo", "cobra", "urso", "coelho"],
        cores: ["amarelo", "verde", "azul", "vermelho", "branco", "preto", "roxo", "cinza", "rosa", "marrom"]
    }
    return temas;
}

const TENTATIVAS = 6;

let usuario = null;
let palavraRandom = ""; //palavra sorteada
let palavraSorteadaSeparadaEmLetras = []; //array da palavra sorteada
let letraErrada = ""; // letras erradas que aparecem na div "letraserradas"
let letraEcolhida = ""; //letra digitada pelo usuário para teste se tem na palavra
let arrayDeUnderlines = []; //array da palavra substituído por "_" que mostra na tela
let stringDeUnderlines = "";
let palavraSemAcento = "";
let erros = 0; //contador de erros, tantos erros é gameover

// calculaTotal = function (vitorias, derrotas) {
//     let total = `Vitorias ${this.vitorias} entre ${this.vitorias + this.derrotas}`;
//     return total;
//     // método que mostra resultado do usuário
// }



class Usuário {
    constructor(nome, email) {
        this.nome = nome
        this.email = email
        this.vitorias = 0
        this.derrotas = 0
    }
}

function sortearPalavra(temaRecebido, objetoDeTemas) { // funcão que sorteia a palavra, salva na "palavraRandom" e retorna a "palavraRandom"
    let palavraRandom = ""
    if (temaRecebido == "frutas") {
        palavraRandom = obterPalavra.frutas[parseInt(Math.random() * obterPalavra.frutas.length)] // pega um elemento aleatório do array obterPalavra.frutas
    }

    else if (temaRecebido == "animais") {
        palavraRandom = obterPalavra.animais[parseInt(Math.random() * obterPalavra.animais.length)] // pega um elemento aleatório do array obterPalavra.animais
    }

    else if (temaRecebido == "cores") {
        palavraRandom = obterPalavra.cores[parseInt(Math.random() * obterPalavra.cores.length)] // pega um elemento aleatório do array obterPalavra.cores
    }

    return palavraRandom;
}


function inicializarVariaveis() { // Apaga todos os valores para começar um jogo novo
    palavraRandom = "";
    palavraSorteadaSeparadaEmLetras = [];
    letraErrada = "";
    letraEcolhida = "";
    arrayDeUnderlines = [];
    stringDeUnderlines = "";
    palavraSemAcento = "";
    erros = 0
}

function retirarAcento(palavraRandom) {
    return palavraRandom.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // tira todos os acentos, inclusive 'ç'
}


// Primeira função a ser chamada

function jogar() { //função chamada no click do botão "JOGAR"
    inicializarVariaveis();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let tema = document.getElementById("tema").value;

    usuario = new Usuário(nome, email); // CRIA UM NOVO USUÁRIO

    let palavraRandom = sortearPalavra(tema, obterPalavra()); // SORTEIA A PALAVRA E SALVA
    console.log(usuario);
    console.log(palavraRandom);
    console.log(palavraSemAcento);
    substituiPalavraPor_(palavraSemAcento);//chama a função que faz um array de traços do mesmo tamanho que a palavra passada como parâmetro
    
    let palavraSemAcento = retirarAcento(palavraRandom)
    return palavraRandom, palavraSemAcento;

}



function mostraNaTela(palavra) { // recebe um array de "-" e transforma em string
    let mostraNaTela = palavra.toString(); // o método tostring separa os elementos do array por ","
    mostraNaTela = mostraNaTela.replace(/,/g, "");// esse replace troca todos as "," por espaços em branco, para ficar uma string de traços do mesmo tamanho que a palavra sorteada
    console.log(mostraNaTela);

    document.getElementById("letras").innerHTML = mostraNaTela; //joga a string de traços na tela

}

// o palavraSorteadaSeparadaEmLetras é o array da palavra separada letra a letra
// o arrayDeUnderlines é o array com os traços

function substituiPalavraPor_(palavra) {
    palavraSorteadaSeparadaEmLetras = palavra.split(""); //pega a palavra e transforma num array de letras

    for (let i = 0; i < palavraSorteadaSeparadaEmLetras.length; i++) {
        arrayDeUnderlines[i] = "_"; //laço para fazer um array de traços do mesmo tamanho que o da palavra
    }
    stringDeUnderlines = arrayDeUnderlines.join('') // asigna e tranforma o arrayDeUnderlines em uma string


    mostraNaTela(arrayDeUnderlines); //chama a função mostra na tela passando o array de traços como parâmetro
}


function escreveLetraErrada(letra) { //função que escreve as letras erradas que são recebidas como parâmetro na div "letraserradas"
    letraErrada += `${letra} / `; // vai armazenando na variável letraErrada a letra errada separando por um /
    document.getElementById("lj").innerHTML = letraErrada; // juga as letras erradas na tela

    console.log(letraErrada);
}

function escreveletracerta(letra) {
    for (let i = 0; i < palavraSorteadaSeparadaEmLetras.length; i++) {
        if (letra === palavraSorteadaSeparadaEmLetras[i]) {//esse teste compara a letra digitada, que é recebida como parâmetro, se existe no array da palavra
            arrayDeUnderlines[i] = palavraSorteadaSeparadaEmLetras[i]; //aqui pega o array de traços e na mesma posição que a letra existe, substitui o traço pela letra 
        }
    }
    stringDeUnderlines = arrayDeUnderlines.join("")

    mostraNaTela(arrayDeUnderlines);//aqui chama a função mostra na tela passando o arrayDeUnderlines como parâmetro, esse novo array já foi modificado os traços pelas letras corretas
}


function jogo() { // função chamada ao clicar no botão "testarletra"
    letraEcolhida = document.getElementById("letra").value; //guarda a letra digitada na variável letraEcolhida
    document.getElementById("letra").value = "";
    console.log(letraEcolhida);

    let acertouletra = palavraSemAcento.includes(letraEcolhida); //compara se a letra digitada tem na palavra sorteada e armazena um true ou false na variável "acertouletra"


    if (acertouletra) {//testa se acertou letra recebeu um true
        escreveletracerta(letraEcolhida); //chama a função "escreveletracerta" e passa a letra como parâmetro
        oJogadorGanhou() // Só chamar se a letra foi certa, não precisa se fosse errada

    } else { // se a letra digitada não existir na palavra
        escreveLetraErrada(letraEcolhida); //chama a funcão "escreveLetraErrada" passando a letra como parâmetro
        erros++; //incrementa o erros até o game over
        console.log("Erros " + erros)
        oJogadorPerdeu()
    }
}

function oJogadorPerdeu() {
    if (TENTATIVAS === erros) {
        inicializarVariaveis();
        alert("GAME OVER");
    }
}

function oJogadorGanhou() {
    console.log({ stringDeUnderlines })
    if (!stringDeUnderlines.includes("_")) {
        setTimeout(() => {
            alert(`Você acertou! a palavra era ${palavraRandom}`)
        }, 250)

    }
}






// FALTA FAZER
// colocar opção de jogar novamente: mesmo login ou novo jogador? Caso seja um novo jogador, resetar o codigo do começo caso seja o mesmo, limpar a tela e mostrar a nova palavraRandom (arrayDeUnderlines)

