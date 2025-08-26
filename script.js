// 1 – LISTA DE COMPRAS ------------------------

// Array dos itens da lista de compras
const lista_compras = ["arroz", "batata", "suco", "tomates"];

// Função
function verificarItem(item) {
  // Verifica se o item está na lista
  if (lista_compras.includes(item)) {
    console.log("✅ Item encontrado");
  } else {
    console.log("❌ Item não está na lista");
  }
}
// Testando a função
verificarItem("tomates");


// 2 - SISTEMA DE LOGIN SIMPLES ------------------------

// Array do nome dos usuarios
const usuarios = ["Natali", "Daniel", "Sabrina"];

function login(nome) {
  //Verifica se o nome está na lista
  if (usuarios.includes(nome)) {
    console.log(`Bem-vindo, ${nome}!`);
  } else {
    console.log("Usuário não encontrado");
  }
}
// Testando a função
login("Daniel");


// 3 - FILTRAR JOGADORES DO TIME ------------------------

// Array das idades dos jogadores
const idades = [16, 19, 22, 15, 18, 25, 30];

// Função para retornar apenas os maiores ou que possuem 18 anos
function maioresDeIdade(listaIdades) {
  return listaIdades.filter(idade => idade >= 18);
}
// Usando a função
const maiores = maioresDeIdade(idades);
// Mostrando no console
console.log("Jogadores maiores de 18 anos: " + maiores);


// 4 - TRABALHANDO COM .length ------------------------

// Array dos times de futebol 
const times = ["Flamengo", " Palmeiras", " Vasco", " Fortaleza", " Botafogo"];
// Mostrando os times no console
console.log("Os times de futebol são: " + times);
// Mostrando a quantidade no console
console.log(times.length + " times ao todo");
// Adicionando 2 times
times.push(" Corinthians", " Fluminense");
// Mostrando todos os times no console
console.log("Agora, os times são: " + times);


// 5 - Usando includes + filter ------------------------

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Função para verificar se o número 7 está no array
function verificarNum(num) {
  if (numeros.includes(num)) {
    console.log("Está entre os números");
  } else {
    console.log("Não foi encontrado");
  }
}
// Testando a função com o número 7
verificarNum(7);
// Usaando filter para mostrar apenas os números maiores que 5
const maioresQueCinco = numeros.filter(n => n > 5);
// Mostrando o resultado no console
console.log("Os números maiores que cinco são: " + maioresQueCinco);
