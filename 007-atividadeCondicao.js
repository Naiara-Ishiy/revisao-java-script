/*Crie um programa de um estabelecimento que receba dados do dono como nome, a idade e se a pessoa é amigo do dono. Retorne uma mensagem de acordo com as validações: Se a pessoa ter mais de 18 anos, o acesso ao local será liberado. Pessoas com menos de 18 não acessam o local. Amigos do dono podem acessar o local independente da idade. Caso a pessoa tenha mais de 18 anos e seja amigo do dono, ganhará uma bebida*/

let entrada = require ('prompt-sync')();
let cadastro = ('Olá, você é o dono?');
    if(cadastro = 'sim'){
        console.log = ('Bem-vindo dono! Precisamos de alguns dados para a sua festa!');
        let nomeDono = ('Qual o nome do dono da festa?');
        let idadeDono = ('Qual a idade a ser comemorada?');
        let amigosDono = ('Quais amigos virão?')}

    else{
        console.log = ('Bem vindo! Precisamos de alguns dados seus para garantir o seu acesso!');
        let nomeConv = ('Qual o seu nome?');
        let idadeConv = ('Qual a sua idade?')}

    if(amigosDono==nomeConv) {(`Olá ${nomeConv}, seja bem vindo a festa 🥳🥳🎉`)}
    else{
        if(idadeConv>=18){console.log(`Olá ${nomeConv}, seja bem-vindo a festa 🥳🥳🎉`)}
        else{console.log(`Olá ${nomeConv}, infelizmente sua idade não te permite acessar esses dados, tente quando alcançar a maioridade!`)}
    }
    entrada('Pressione ENTER para encerrar o programa!')