//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Selecionar elementos do DOM
const nameInput = document.getElementById('amigo'); // Campo de texto para inserir nomes
const addButton = document.querySelector('.button-add'); // Botão "Adicionar"
const nameList = document.getElementById('listaAmigos'); // Lista onde os nomes serão exibidos
const drawButton = document.querySelector('.button-draw'); // Botão "Sortear Amigo"
const resultDisplay = document.getElementById('resultado'); // Local onde o resultado do sorteio será exibido

// Array para armazenar os nomes
let names = [];

// Função para adicionar nomes à lista
function adicionarAmigo() {
  const name = nameInput.value.trim(); // Pega o valor do campo de texto e remove espaços em branco

  // Validação: Verifica se o campo está vazio
  if (name === '') {
    alert('Por favor, insira um nome válido!');
    return; // Sai da função se o campo estiver vazio
  }

  // Adiciona o nome ao array
  names.push(name);

  // Atualiza a lista visual na página
  updateNameList();

  // Limpa o campo de texto
  nameInput.value = '';
}

// Função para atualizar a lista de nomes na página
function updateNameList() {
  // Limpa a lista atual
  nameList.innerHTML = '';

  // Adiciona cada nome do array à lista
  names.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;
    nameList.appendChild(li);
  });
}

// Função para sortear um nome aleatório
function sortearAmigo() {
  // Verifica se há nomes na lista
  if (names.length === 0) {
    alert('Adicione pelo menos um nome para realizar o sorteio!');
    return; // Sai da função se não houver nomes
  }

  // Sorteia um índice aleatório do array
  const randomIndex = Math.floor(Math.random() * names.length);

  // Pega o nome correspondente ao índice sorteado
  const selectedName = names[randomIndex];

  // Exibe o resultado na tela
  resultDisplay.innerHTML = `<li>O amigo secreto é: ${selectedName}</li>`;
}