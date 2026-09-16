//operadores aritimeticos
// + soma
// - subtração
// * multiplicação
// / divisão
// % sobra da divisão

// let n1 = 3;
// let n2 = 9;

// console.log(n1 + n2);
// console.log(n2 - n1);
// console.log(n1 * n2);
// console.log(n2 / n1);
// console.log(n2 % n1);
// console.log((n2 - n1) * 2);
// console.loh("palavra" + n1);

//crie 3 variaveis, cada uma contendo um numero,
//some as 3  e tire a média, exiba o resultado no console

// let n1 = 5;
// let n2 = 2;
// let n3 = 8;

// console.log((n1 + n2 + n3)/ 3);

//agora exiba no console a formula do calculo
//com os valores e seu resultado
//a media de x, x e x é r

//  let x = 2;
//  let x2 = 3;
//  let x3 = 5;
//  console.log((x + x2 + x3)/ 3)
//  console.log(" a média de " +  x + " , " + x2 + " e " + x3 + " é " + (x + x2 + x3)/ 3 );

// > maior que
// < menor que
// == igual
// >= maior ou igual
// <= menor ou igual
// != é diferente

// let idade = 18;

// console.log(idade > 18);
// console.log(idade < 18);
// console.log(idade == 18);
// console.log(idade >= 18);
// console.log(idade <= 18);
// console.log(idade != 18);

// console.log(idade === "18");// comparação de tipo de variavel

// let idade = 18;
// let habilitado = true;
// console.log(idade <= 18 || habilitado == true);
// V || V = V
// V || F = F
// F || V + V
// F || F = F

//! operador not "inverte"
//console.log(!habilitado);

//se idade for igual a 18
     // faça isso

//se não 
     // faça isso
// 
// let idade = 15;

//  if(idade >= 18){
//     console.log("Maior de idade!");

// }else {
//     console.log("menor de idade");
// }

//crie um sistema que compare o valor de uma variavel
//senha Se for igual a 1234 escreva no console
// "acesso liberado" Se Não secreva " acesso bloqueado"

// let senha = 1234

// if(senha == 1234) {
//     console.log("acesso liberado")
// } else {
//     console.log("acesso negado")
// }

//crie um sistema que a avalie uma variavel nota
//se nota for maior que 6 escreva aprovado, se não
// escreva reprovado

// let nota = 8
 
// if(nota >= 6) {
//     console.log("aprovado")
// }else{
//     console.log("reprovado")
// }

//ex 3
//crie um sistema que compara um valor total de uma 
//compra, se o valor for maior que 500 calcule um
//desconto de 20 e mostre o valor total da compra
//com desconto se não mostre a mensagem
// compra sem desconto

let compra = 690

if (compra) {
    console.log(compra - 20);
}else {
    console.log("compra sem desconto");
}
