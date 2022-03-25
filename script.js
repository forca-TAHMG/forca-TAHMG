const temas = {
    frutas: ["manga", "banana", "maçã", "laranja", "limão", "abacaxi", "tangerina", "uva",  "morango", "maracujá"],
    animais: ["cachorro", "gato", "galinha", "vaca", "leão", "elefante", "cavalo", "cobra","urso", "coelho"],
    cores: ["amarelo", "verde", "azul", "vermelho", "branco", "preto", "roxo", "cinza", "rosa", "marrom"]
}

let palavrarandom = ""; //palavra sorteada
let arr = []; //array da palavra sorteada
let text = ""; // letras erradas que aparecem na div "letraserradas"
let letraescolhida = ""; //letra digitada pelo usuário para teste se tem na palavra
let novoarray = []; //array da palavra substituído por "_" que mostra na tela

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

function sorteiapalavra(tema) { // funcão que sorteia a palavra, salva na "palavrarandom" e retorna a "palavrarandom"

    if(tema == "frutas") { 
        palavrarandom =  temas.frutas[parseInt(Math.random() * temas.frutas.length)] // pega um elemento aleatório do array temas.frutas
    }

    else if (tema == "animais") { 
        palavrarandom = temas.animais[parseInt(Math.random() * temas.animais.length)] // pega um elemento aleatório do array temas.animais
    }

    else if(tema == "cores") { 
        palavrarandom = temas.cores[parseInt(Math.random() * temas.cores.length)] // pega um elemento aleatório do array temas.cores
    }

    return palavrarandom;
}

function mostranatela(palavra) { // recebe um array de "-" e transforma em string
    let mostranatela = palavra.toString(); // o método tostring separa os elementos do array por ","
        mostranatela = mostranatela.replace(/,/g, "");// esse replace troca todos as "," por espaços em branco, para ficar uma string de traços do mesmo tamanho que a palavra sorteada
        console.log(mostranatela);

        document.getElementById("letras").innerHTML = mostranatela; //joga a string de traços na tela

}

// o arr é o array da palavra
// o novo array é o array com os traços

function substituipalavrapor_(palavra) { 
        arr = palavra.split(""); //pega a palavra e transforma num array de letras
        console.log(arr);
        
        for(let i = 0; i<arr.length; i++) {
            novoarray[i] = "_"; //laço para fazer um array de traços do mesmo tamanho que o da palavra
        }

        console.log(novoarray);
        
        mostranatela(novoarray); //chama a função mostra na tela passando o array de traços como parâmetro
}

function jogar() { //função chamada no click do botão "JOGAR"
    const usuario = new Usuário(); // CRIA UM NOVO USUÁRIO
    palavrarandom = sorteiapalavra(usuario.temas); // SORTEIA A PALAVRA E SALVA
    console.log(usuario);
    console.log(palavrarandom);
    substituipalavrapor_(palavrarandom);//chama a função que faz um array de traços do mesmo tamanho que a palavra passada como parâmetro
}

function escreveletraerrada(letra) { //função que escreve as letras erradas que são recebidas como parâmetro na div "letraserradas"
    text += `${letra} / `; // vai armazenando na variável text a letra errada separando por um /
    document.getElementById("lj").innerHTML = text; // juga as letras erradas na tela

    console.log(text);
}

function escreveletracerta(letra) { 
    for(let i = 0; i<arr.length; i++) {
        if(letra === arr[i]) {//esse teste compara a letra digitada, que é recebida como parâmetro, se existe no array da palavra
            novoarray[i] = arr[i]; //aqui pega o array de traços e na mesma posição que a letra existe, substitui o traço pela letra 
        }
    }

    mostranatela(novoarray);//aqui chama a função mostra na tela passando o novoarray como parâmetro, esse novo array já foi modificado os traços pelas letras corretas
}

let erros = 0; //contador de erros, tantos erros é gameover

function jogo() { // função chamada ao clicar no botão "testarletra"
    letraescolhida = document.getElementById("letra").value; //guarda a letra digitada na variável letraescolhida
    console.log(letraescolhida);

    let acertouletra = palavrarandom.includes(letraescolhida); //compara se a letra digital tem na palavra sorteada e armazena um true ou false na variável "acertouletra"
    

    if(acertouletra) {//testa se acertou letra recebeu um true
        escreveletracerta(letraescolhida); //chama a função "escreveletracerta" e passa a letra como parâmetro

    } else { // se a letra digitada não existir na palavra
        escreveletraerrada(letraescolhida); //chama a funcão "escreveletraerrada" passando a letra como parâmetro
        erros++; //incrementa o erros até o game over
        console.log("Erros " + erros)
    }
}


// falta comparar o número de erros para gerar o gameover
// falta a verificação de acentos e cedilha
// para gerar vitória acredito que é só meter um novoarray.includes("_"), enquanto tiver devolvendo true continua o jogo, quando devolver um false é pq acertou todas as letras e dá a vitória









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
