const temas = {
    frutas: ["manga", "banana", "maçã", "laranja", "limão", "abacaxi", "tangerina", "uva",  "morango", "maracujá"],
    animais: ["cachorro", "gato", "galinha", "vaca", "leão", "elefante", "cavalo", "cobra","urso", "coelho"],
    cores: ["amarelo", "verde", "azul", "vermelho", "branco", "preto", "roxo", "cinza", "rosa", "marrom"]
}

let palavraRandom = ""; //palavra sorteada
let palavraSorteadaSeparadaEmLetras = []; //array da palavra sorteada
let letraErrada = ""; // letras erradas que aparecem na div "letraserradas"
let letraEcolhida = ""; //letra digitada pelo usuário para teste se tem na palavra
let arrayDeUnderlines = []; //array da palavra substituído por "_" que mostra na tela
let palavraSemAcento = "";

class Usuário{
    constructor(){
        this.nome = document.getElementById("nome").value
        this.email = document.getElementById("email").value
        this.temas = document.getElementById("tema").value
        this.vitorias = 0
        this.derrotas = 0

    }
    calculaTotal = function(vitorias, derrotas) {
       let total = `Vitorias ${this.vitorias} entre ${this.vitorias + this.derrotas}`;
     return total;
     // método que mostra resultado do usuário
    }
}

function sorteiapalavra(tema) { // funcão que sorteia a palavra, salva na "palavraRandom" e retorna a "palavraRandom"

    if(tema == "frutas") { 
        palavraRandom =  temas.frutas[parseInt(Math.random() * temas.frutas.length)] // pega um elemento aleatório do array temas.frutas
    }

    else if (tema == "animais") { 
        palavraRandom = temas.animais[parseInt(Math.random() * temas.animais.length)] // pega um elemento aleatório do array temas.animais
    }

    else if(tema == "cores") { 
        palavraRandom = temas.cores[parseInt(Math.random() * temas.cores.length)] // pega um elemento aleatório do array temas.cores
    }

    return palavraRandom;
}

function mostraNaTela(palavra) { // recebe um array de "-" e transforma em string
    let mostraNaTela = palavra.toString(); // o método tostring separa os elementos do array por ","
        mostraNaTela = mostraNaTela.replace(/,/g, "");// esse replace troca todos as "," por espaços em branco, para ficar uma string de traços do mesmo tamanho que a palavra sorteada
        console.log(mostraNaTela);

        document.getElementById("letras").innerHTML = mostraNaTela; //joga a string de traços na tela

}

// o palavraSorteadaSeparadaEmLetras é o array da palavra separada letra a letra
// o arrayDeUnderlines é o array com os traços

function subistituiPalavraPor_(palavra) { 
        palavraSorteadaSeparadaEmLetras = palavra.split(""); //pega a palavra e transforma num array de letras
        console.log(palavraSorteadaSeparadaEmLetras);
        
        for(let i = 0; i<palavraSorteadaSeparadaEmLetras.length; i++) {
            arrayDeUnderlines[i] = "_"; //laço para fazer um array de traços do mesmo tamanho que o da palavra
        }

        console.log(arrayDeUnderlines);
        
        mostraNaTela(arrayDeUnderlines); //chama a função mostra na tela passando o array de traços como parâmetro
}

function jogar() { //função chamada no click do botão "JOGAR"
    const usuario = new Usuário(); // CRIA UM NOVO USUÁRIO
    palavraRandom = sorteiapalavra(usuario.temas); // SORTEIA A PALAVRA E SALVA
    console.log(usuario);
    console.log(palavraRandom);
    palavraSemAcento = palavraRandom.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // tira todos os acentos, inclusive 'ç'
    console.log(palavraSemAcento);
    subistituiPalavraPor_(palavraSemAcento);//chama a função que faz um array de traços do mesmo tamanho que a palavra passada como parâmetro
}

function escreveLetraErrada(letra) { //função que escreve as letras erradas que são recebidas como parâmetro na div "letraserradas"
    letraErrada += `${letra} / `; // vai armazenando na variável letraErrada a letra errada separando por um /
    document.getElementById("lj").innerHTML = letraErrada; // juga as letras erradas na tela

    console.log(letraErrada);
}

function escreveletracerta(letra) { 
    for(let i = 0; i<palavraSorteadaSeparadaEmLetras.length; i++) {
        if(letra === palavraSorteadaSeparadaEmLetras[i]) {//esse teste compara a letra digitada, que é recebida como parâmetro, se existe no array da palavra
            arrayDeUnderlines[i] = palavraSorteadaSeparadaEmLetras[i]; //aqui pega o array de traços e na mesma posição que a letra existe, substitui o traço pela letra 
        }
    }

    mostraNaTela(arrayDeUnderlines);//aqui chama a função mostra na tela passando o arrayDeUnderlines como parâmetro, esse novo array já foi modificado os traços pelas letras corretas
}

let erros = 0; //contador de erros, tantos erros é gameover

function jogo() { // função chamada ao clicar no botão "testarletra"
    letraEcolhida = document.getElementById("letra").value; //guarda a letra digitada na variável letraEcolhida
    document.getElementById("letra").value = "";
    console.log(letraEcolhida);

    let acertouletra = palavraSemAcento.includes(letraEcolhida); //compara se a letra digitada tem na palavra sorteada e armazena um true ou false na variável "acertouletra"
    

    if(acertouletra) {//testa se acertou letra recebeu um true
        escreveletracerta(letraEcolhida); //chama a função "escreveletracerta" e passa a letra como parâmetro

    } else { // se a letra digitada não existir na palavra
        escreveLetraErrada(letraEcolhida); //chama a funcão "escreveLetraErrada" passando a letra como parâmetro
        erros++; //incrementa o erros até o game over
        console.log("Erros " + erros)
    }
}

// FALTA FAZER

// comparar o número de erros para gerar o gameover ou a mensagem de que acertou a palavra, mostrando com os acentos (palavraRandom)
// para gerar vitória acredito que é só meter um arrayDeUnderlines.includes("_"), enquanto tiver devolvendo true continua o jogo, quando devolver um false é pq acertou todas as letras e dá a vitória
// colocar opção de jogar novamente: mesmo login ou novo jogador? Caso seja um novo jogador, resetar o codigo do começo, caso seja o mesmo, limpar a tela e mostrar a nova palavraRandom (arrayDeUnderlines)
// forçar que tenha um input de email valido








/**
class Palavra{
    constructor(){
        this.tema = ""
        this.palavraSorteada = this.sorteiaPalavra();
    }
    sorteiaPalavra(){
        if(this.tema == "frutas") { 
            return temas.frutas[parseInt(Math.random() * temas.frutas.length)] // pega um elemento aleatório do array temas.frutas
        }
        else if (this.tema == "animais") { 
            return  temas.animais[parseInt(Math.random() * temas.animais.length)] // pega um elemento aleatório do array temas.animais
        }
        else if(this.tema == "cores") { 
            return temas.cores[parseInt(Math.random() * temas.cores.length)] // pega um elemento aleatório do array temas.cores
        }
        else {
            console.log("Jogador selecionou o tema errado! Escolha novamente!")
            this.sorteiaPalavra();
        }   
        
    }
}
 */

//const pessoa = new Usuário()
//console.log(pessoa)
//const palavra1 = new Palavra()
//console.log(palavra1)
//console.log(palavra1.palavraSorteada)
