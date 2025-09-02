/* Continuando a implementação do exemplo 11, faça com que o programa só aceite uma senha erradqa 3 vezes, após a 3ª tentativa errada o sistema deve apresentar a mensagfem de bloqueio*/
let entrada = require('prompt-sync')();
let repeticao = 0;

    const bloqueio = [];
    const senha = '251008';
let senhaDigitada = '';
    do{
        senhaDigitada = entrada ('Digite a senha para acessar o sistema: ')
        if(senhaDigitada !== senha){
            repeticao++;
        if(repeticao = 2){ 
            bloqueio.push('Você é suspeito, bloqueado.')}
    } while (senhaDigitada !== senha)};
console.log('Bem-vindo ao sistema de login!')
break;