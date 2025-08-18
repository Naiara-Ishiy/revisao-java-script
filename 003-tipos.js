//texto/string
let cidade = 'Tupã';

//inteiro/number
let populacao = 62000;

//decimal/number
let temperaturaMedia = 34.5;

//sim/nao/boolean
let temMCDonalds = true;

//undefined
let totalAnimaisRua;

//null
let mortesPorTerremoto = null;

//date
const fundacaoCidade = new Date(1929,10,12);

//objeto - tem erro na data
let enderecoPrefeitura =
{   logradouro : 'Praça da Bandeira',
    numero: 1,
    complemento: null,
    cep: '17600000',
    fundacaoCidade: `${fundacaoCidade.getDate()}/${fundacaoCidade.getMonth()}/${fundacaoCidade.getFullYear()}`};

//array
let principaisAvenidas = ['Tamoios','Aimorés','Lélio Pizza'];

//função
function ExibeDados()
{    console.log (`
        A cidade de ${cidade} tem ${populacao} habitantes.
        A prefeitura fica localizada na ${enderecoPrefeitura.logradouro} nº ${enderecoPrefeitura.numero} - ${enderecoPrefeitura.cep}.
        As principais avenidas são: ${principaisAvenidas[0]}, ${principaisAvenidas[1]} e ${principaisAvenidas[2]}.
        Data de fundação: ${enderecoPrefeitura.fundacaoCidade}
`);}
ExibeDados();

console.log('');
console.log('Tipo da variável: ExibeDados');
console.log(typeof(ExibeDados));
console.log(Array.isArray(ExibeDados)); //diz se é o tipo de dado ou n