//Desafio: programa que recebe dois números e devolve soma, subtração, multiplicação e divisão

let entrada = require('prompt-sync')();
    let n1 = entrada('Digite um número: ');
    let n2 = entrada('Digite outro número: ');
        let soma = parseFloat(n1)+parseFloat(n2);
        let sub = parseFloat(n1)-parseFloat(n2);
        let mult = parseFloat(n1)*parseFloat(n2);
        let div = parseFloat(n1)/parseFloat(n2);
        let resto = parseFloat(n1)%parseFloat(n2);
    console.log(`
Os resultados são:
    ${n1}+${n2} = ${soma}
    ${n1}-${n2} = ${sub}
    ${n1}*${n2} = ${mult}
    ${n1}/${n2} = ${div.toFixed(2)}
    ou
    ${n1}/${n2} = ${parseInt(div)}
    resto de ${n1}/${n2} = ${resto}
`);
console.log('Pressione ENTER para encerrar o programa.');
console.log('Programa encerrado')