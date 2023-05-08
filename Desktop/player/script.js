function Pessoa(nome, idade, sexo) {
    this.idade = idade;
    this.nome = nome;
    this.sexo = sexo;
    aniversario = (idade) => {
         this.idade = idade + 1
    }
}