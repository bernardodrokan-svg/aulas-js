//pegar os elementos no html

const formulario = document.getElementById("formulario");
const teste = document.get

const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");

const nomeResultado = document.getElementById("nomeResultado");
const dataResultado = document.getElementById("dataResultdo");
const idadeResultado = document.getElementById("idadeResultado");
const boxResultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event){
event.preventDefault();//impede que a tela recarregue

  //pegar o valor dos inputs
  const valorNome = nome.value;
  const valorNascimento = nascimento.value;

  // console.log(valorNome);
  // console.log(valorNascimento);

  // separa a data em 3 valores

  const dataSeparada = valorNascimento.split("-");

// console.log(dataSeparada);

//armazenamento as datas separadas em formato numerico
const anoNascimento = Number(dataSeparada[0])
const mesNascimento = Number(dataSeparada[1])
const diaNascimento = Number(dataSeparada[2])

// console.log(anoNascimento);

const hoje = new Date();

const anoAtual = hoje.getFullYear();//pega somente o ano
const mesAtual = hoje.getMonth()+1;//pega somente o mes
const diaAtual = hoje.getDate();//pega somente o dia

// console.log(hoje);
// console.log(anoAtual);
// console.log(mesAtual);
// console.log(diaAtual);

let idade = anoAtual -anoNascimento;// calcule a idade utilizando o ano
//  console.log(idade);

if (mesNascimento > mesAtual) { //
  idade = idade -1
}

if (mesNascimento == mesAtual) {
  if (diaNascimento > diaAtual) {
    idade = idade -1;
  }
}
// console.log(idade);



const dataFormatada = diaNascimento + "/" + mesNascimento + "/" + anoNascimento;


nomeResultado.textContent = valorNome;
dataResultado.textContent = dataFormatada;
idadeResultado.textContent = idade;


boxResultado.style.display = "block";


















})