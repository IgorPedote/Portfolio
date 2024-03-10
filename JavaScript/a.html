<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Funcionários</title>
</head>
<body>

<form id="formFuncionario">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required><br>
  
  <label for="idade">Idade:</label>
  <input type="number" id="idade" name="idade" required><br>
  
  <label for="cargo">Cargo:</label>
  <select id="cargo" name="cargo" required>
    <option value="Gerente">Gerente</option>
    <option value="Desenvolvedor">Desenvolvedor</option>
  </select><br>
  
  <div id="departamentoInput" style="display:none;">
    <label for="departamento">Departamento:</label>
    <input type="text" id="departamento" name="departamento"><br>
  </div>
  
  <div id="linguagemInput" style="display:none;">
    <label for="linguagem">Linguagem:</label>
    <input type="text" id="linguagem" name="linguagem"><br>
  </div>
  
  <button type="submit">Criar Funcionário</button>
</form>

<div id="resultado"></div>

<script>
// Definindo as classes Funcionario, Gerente e Desenvolvedor
class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    return `Olá, meu nome é ${this.nome} e sou um ${this.cargo}.`;
  }

  trabalhar() {
    return `Estou trabalhando.`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, departamento) {
    super(nome, idade, "Gerente");
    this.departamento = departamento;
  }

  gerenciar() {
    return `Estou gerenciando o departamento de ${this.departamento}.`;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, linguagem) {
    super(nome, idade, "Desenvolvedor");
    this.linguagem = linguagem;
  }

  programar() {
    return `Estou programando em ${this.linguagem}.`;
  }
}

function exibirErro(mensagem) {
  document.getElementById('resultado').innerHTML = `<p style="color:red">${mensagem}</p>`;
}

document.getElementById('formFuncionario').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const cargo = document.getElementById('cargo').value;
  let funcionario;

  if (!nome || !idade) {
    exibirErro('Por favor, preencha todos os campos.');
    return;
  }

  try {
    if (cargo === 'Gerente') {
      const departamento = document.getElementById('departamento').value;
      if (!departamento) {
        exibirErro('Por favor, preencha o campo de departamento.');
        return;
      }
      funcionario = new Gerente(nome, idade, departamento);
    } else if (cargo === 'Desenvolvedor') {
      const linguagem = document.getElementById('linguagem').value;
      if (!linguagem) {
        exibirErro('Por favor, preencha o campo de linguagem.');
        return;
      }
      funcionario = new Desenvolvedor(nome, idade, linguagem);
    } else {
      exibirErro('Cargo inválido.');
      return;
    }
  } catch (error) {
    exibirErro('Ocorreu um erro ao criar o funcionário.');
    return;
  }

  document.getElementById('formFuncionario').reset();

  const resultadoHTML = `
    <p>${funcionario.seApresentar()}</p>
    <p>${funcionario.trabalhar()}</p>
    ${cargo === 'Gerente' ? `<p>${funcionario.gerenciar()}</p>` : ''}
    ${cargo === 'Desenvolvedor' ? `<p>${funcionario.programar()}</p>` : ''}
  `;
  document.getElementById('resultado').innerHTML = resultadoHTML;
});
</script>

</body>
</html>