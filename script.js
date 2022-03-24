const temas = {
    frutas: ["manga", "banana", "maçã", "laranja", "limão", "abacaxi", "tangerina", "uva",  "morango", "maracujá"],
    animais: ["cachorro", "gato", "galinha", "vaca", "leão", "elefante", "cavalo", "cobra","urso", "coelho"],
    cores: ["amarelo", "verde", "azul", "vermelho", "branco", "preto", "roxo", "cinza", "rosa", "marrom"]
}

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
    }
}

function sorteiapalavra(tema) {
    let palavra = "";

    if(tema == "frutas") { 
        palavra =  temas.frutas[parseInt(Math.random() * temas.frutas.length)] // pega um elemento aleatório do array temas.frutas
    }

    else if (tema == "animais") { 
        palavra = temas.animais[parseInt(Math.random() * temas.animais.length)] // pega um elemento aleatório do array temas.animais
    }

    else if(tema == "cores") { 
        palavra = temas.cores[parseInt(Math.random() * temas.cores.length)] // pega um elemento aleatório do array temas.cores
    }

    return palavra;
}

function substituipalavrapor_(palavra) {
        let arraydeletras = palavra.split("")
        console.log(arraydeletras)
        let novoarray= [];
        
        for(let i = 0; i<arraydeletras.length; i++) {
            novoarray[i] = "_";
        }

        console.log(novoarray);
}

function jogar() {
    const usuario = new Usuário();
    let palavra = sorteiapalavra(usuario.temas);
    console.log(usuario);
    console.log(palavra);
    substituipalavrapor_(palavra);
}

function jogo() {

}


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

