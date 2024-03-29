const nome = 'Thirrasgo'; //string
const nome2 = `Thiago é o ${nome}`; //template string

console.log(nome);
console.log(nome2);

const notaAluno01 = 9.7; //variável tipo number 
console.log(typeof notaAluno01); //verificador de tipo de variável

//9 – Criando uma calculadora de media dos alunos.

const notaAluno02 = 8;
const notaAluno03 = 9;
const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3;
console.log(media);

if(media > 5){console.log(`Boa galera, ficamos com uma média de ${media} pontos.`)}
else{console.log("Não era bem essa média que eu esperava... Era pra ser pelo menos 5.")}