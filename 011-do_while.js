let entrada = require('prompt-sync')();
    const senha = '251008';
let senhaDigitada = '';
    do{
        senhaDigitada = entrada ('Digite a senha para acessar o sistema: ')
    } while (senhaDigitada !== senha);
console.log('Bem-vindo ao sistema de login!')
/*usar do-while para testar a execução do sistema*/