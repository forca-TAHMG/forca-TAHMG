const temas = {
    frutas: ["manga", "banana", "maçã", "laranja", "limão", "abacaxi", "tangerina", "uva",  "morango", "maracujá"],
    animais: ["cachorro", "gato", "galinha", "vaca", "leão", "elefante", "cavalo", "cobra","urso", "coelho"],
    cores: ["amarelo", "verde", "azul", "vermelho", "branco", "preto", "roxo", "cinza", "rosa", "marrom"]
}

class Usuário{
    constructor(){
        this.nome = prompt("Insira o seu nome: ");
        this.email = prompt("Insira seu email");
        this.venceuOuPerdeu = "";
    }
}

class Palavra{
    constructor(){
        this.tema = prompt("Escolha um dos temas: frutas, animais ou cores");
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

        else {// inserir uma mensagem de erro 
        }   
        
    }
}

const pessoa = new Usuário()
console.log(pessoa)
const palavra1 = new Palavra()
console.log(palavra1)
console.log(palavra1.palavraSorteada)

