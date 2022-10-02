//   Passo 1 - Crie uma função construtora Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 

function Aluno(paramNome, paramQuantidadeDeFaltas, paramNotas) {
    (this.nome = paramNome),
      (this.quantidadeDeFaltas = paramQuantidadeDeFaltas),
      (this.notas = paramNotas),
      
    // Passo 2 - Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 

      (this.calcularMedia = function () {
        let soma = 0;
        let quantidadeNotas = 0;
        for (let i = 0; i < paramNotas.length; i++) {
          soma += paramNotas[i];
          quantidadeNotas++;
        }
        let media = soma / quantidadeNotas;
        return media;
      });
    this.faltas = function () {
      this.quantidadeDeFaltas++;
    };
  }
  
  let aluno1 = new Aluno("Lucas", 4, [8, 8, 8]);
  let aluno2 = new Aluno("Debora", 0, [10, 5, 4]);
  let aluno3 = new Aluno("Giovani", 0, [5, 5, 5]);
  let aluno4 = new Aluno("João", 1, [5, 7, 10]);
  let aluno5 = new Aluno("Simone", 0, [10, 10, 10]);
  let aluno6 = new Aluno("Mateus", 0, [9, 8, 9]);
  let aluno7 = new Aluno("Pedro", 1, [0, 8, 0]);
  let aluno8 = new Aluno("Soraia", 3, [8, 8.5, 7]);
  
  
  // Passo 3crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2). 

  let curso = {
    nomeCurso: "CTD",
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: [
      aluno1,
      aluno2,
      aluno3,
      aluno4,
      aluno5,
      aluno6,
      aluno7,
      aluno8
    ],

// Passo 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

    adicionarAluno(aluno) {
      curso.listaEstudantes.push(aluno);
    },
  
// Passo 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

    situacaoAluno(aluno) {
      if (
        aluno.calcularMedia() >= this.notaAprovacao &&
        this.faltasMaximas > aluno.quantidadeDeFaltas
      ) {
        return true;
      } else if (
        aluno.calcularMedia() >=
          this.notaAprovacao + this.notaAprovacao / 10 &&
        this.faltasMaximas >= aluno.quantidadeDeFaltas
      ) {
          return true
      }else{
          return false
      }
    },
// Passo 6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 

    situacaoDosAlunos(){
      let quadroResultados = []
      for(let i = 0; i < this.listaEstudantes.length; i++){
          quadroResultados.push(this.situacaoAluno(this.listaEstudantes[i]))
      }
      return quadroResultados
    }
  };

  