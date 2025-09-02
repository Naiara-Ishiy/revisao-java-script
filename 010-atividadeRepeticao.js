//CONCERTAR
/*Crie um programa que receba dois números e apresente a contagem de primeiro número até o segundo. caso o segundo número seja maior, a contagem deve ser decrescente. Trate também possíveis erros nos valores digitados*/
let entrada = require ('prompt-sync')();
function contarNumeros(){

while(true){
let primeiro = entrada ('Escreva um número: ');
let segundo = entrada ('Escreva outro número: ');

const n1 = parseInt(primeiro);
const n2 = parseInt(segundo);
const erros = [];

if (isNaN(n1) || isNaN(n2)) {erros.push ("Escreva um número válido")}
if (n1==n2){erros.push (`Escreva números diferentes`)}
if (erros>0){
    console.log('Erros encontrados: ');
    erros.forEach(erro=>console.log('- '+erro));
    continue; //volta para o início do loop
}

if (n1>n2){contagemCrescente (n1,n2)}
    else {contagemDecrescente(n1,n2)}
    break; // Sai do loop após contagem
}
}

function contagemCrescente(inicio,fim){console.log('Contagem crescente: ');
    for (let i = inicio; i <= fim; i++){console.log(i)}
}

function contagemDecrescente(inicio,fim){
    console.log(`Contagem decrescente: ${n2},`);
  for (let i = inicio; i >= fim; i--) {
    console.log(i);
  }
}
contarNumeros(); // Chama a função principal para iniciar o programa