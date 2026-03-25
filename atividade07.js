// ============================================================
//   ATIVIDADE 07 – Estruturas de Controle (If / Else)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-07.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – If simples
// ------------------------------------------------------------
// a) Declare "pontos" com valor 120.
// b) Se "pontos" for maior que 100, exiba: "Nível alcançado!".
//    Mas se "pontos" for maior que 200, exiba somente: "Nível máximo alcançado!"

// → Seu código aqui:
let pontos = 120
if (pontos>100 && pontos > 200){
    console.log("nivel alcançado!")
}else {
    console.log("Nivel máximo alcançado")
}


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – If / Else
// ------------------------------------------------------------
// a) Declare "hora" com o valor 14 (representando 14h).
// b) Se hora for menor que 12, exiba: "Bom dia!".
// c) Se hora for menor que 18, exiba: "Boa tarde!".
// d) Senão, exiba: "Boa noite!"

// → Seu código aqui:
let hora = 14
if(hora<12){
    console.log("Bom dia")
    if(hora<18){
        console.log("Boa tarde")
    }else {console.log("Boa noite")
}
}else {
    console.log("Boa noite")
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – If / Else com input
// ------------------------------------------------------------
// a) Pergunte ao usuário sua idade usando questionInt().
// b) Se a idade for maior ou igual a 18, exiba: "Adulto".
//    Se a idade for menor que 12, exiba: "Criança".
//    Senão, exiba: "Jovem".

// → Seu código aqui:
/*const ler = require("readline-sync")
let user = ler.questionInt("Qual sua idade?");
if(user>=18){
    console.log("Adulto")
}
   else if(user>12){
        console.log("criança")
    }else{
        console.log("Jovem")
    }*/


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – If / Else If / Else
// ------------------------------------------------------------
// a) Declare "notaAluno" com valor 6.8.
// b) Em uma variável "status", usando if/else if/else, armazene:
//    - nota >= 9     → "Aprovado com mérito"
//    - nota >= 7     → "Aprovado"
//    - nota >= 5     → "Recuperação"
//    - abaixo de 5   → "Reprovado"
// c) AO final, exiba a nota e a situação com template literal.

// → Seu código aqui:
let notaAluno = 6.8
let status;
if (notaAluno >=9) {
    status = "aprovado com mérito"
}
else if (notaAluno >= 7) {
status = "Aprovado"
}
else if (notaAluno >= 5){
    status = "recuperação"
}
else if (notaAluno<5) {
    status = "reprovado"
}

console.log(`nota: ${notaAluno}, situação: ${status}`);


// ------------------------------------------------------------
// EXERCÍCIO 5 – If / Else If / Else com input
// ------------------------------------------------------------
// a) Pergunte ao usuário a temperatura atual (questionFloat()).
// b) Classifique e exiba usando if/else if/else:
//    - temperatura < 10           → "Muito frio"
//    - temperatura >= 10 e < 18   → "Frio"
//    - temperatura >= 18 e <= 25  → "Agradável"
//    - temperatura > 25 e <= 35   → "Quente"
//    - temperatura > 35           → "Muito quente"

// → Seu código aqui:
/*const ler = require("readline-sync")
let user = ler.questionFloat("Qual a temperatura atual?")
if(user< 10){
    console.log("muito frio")
} else if(user >= 10 && user <18){
    console.log("frio")
}else if(user >= 18 && user<=25){
    console.log("agradável")
}else if(user>25 && user<=35){
    console.log("quente")
}else{
    console.log("muito quente")
}*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – If aninhado
// ------------------------------------------------------------
// a) Pergunte ao usuário e armazene as informações em um objeto:
//    - Nome (question()).
//    - Se possui ingresso (keyInYN()).
//    - Sua idade (questionInt()).
// b) Se NÃO possui ingresso → exiba: "<Nome>, dirija-se à bilheteria."
//    Se possui ingresso:
//      - idade < 18  → "Meia-entrada: menor de idade."
//      - idade >= 60 → "Meia-entrada: melhor idade."
//      - caso contrário → "Entrada inteira."

// → Seu código aqui:
/*const ler = require("readline-sync")
let user ={
    nome: ler.question("Qual seu nome?"),
    ingresso: ler.keyInYN("possui ingresso?"),
    idade: ler.questionInt("Qual sua idade?"),
}
if(!user.ingresso){
    console.log("dirija-se a bilheteria")
}
if(user.idade < 18){
    console.log("meia-entrada: menor de idade.")
}if(user.idade >= 60){
    console.log("meia-entrada: melhor idade.")
}else {
    console.log("entrada inteira")
}*/


// ------------------------------------------------------------
// EXERCÍCIO 7 – If com operadores lógicos (&&)
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome (question()).
//    - Idade (questionInt()).
//    - Se possui habilitação (keyInYN()).
// b) Armazene os dados em um objeto chamado "motorista".
// c) Para alugar um carro, o motorista precisa ter 21 anos ou mais E possuir habilitação.
//    - Se pode alugar → exiba: "<nome>, você pode alugar o veículo."
//    - Senão          → exiba: "<nome>, você não atende aos requisitos."

// → Seu código aqui:
/*const ler = require("readline-sync")
let motorista ={
    nome: ler.question("Qual seu nome?"),
    possuiCnh: ler.keyInYN("possui cnh?"),
    idade: ler.questionInt("Qual sua idade?"),
}
if(motorista.idade >21 && motorista.possuiCnh){
    console.log(`${motorista.nome}, voce pode alugar o veiculo`)
}else{
    console.log(`${motorista.nome}, voce nao atende aos requisitos`)
}*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – If com operadores lógicos (||)
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se é estudante.
//    - Se é idoso, com 60 anos ou mais.
// b) Se é estudante OU idoso → exiba: "Desconto de 50% aplicado!"
//    Senão → exiba: "Sem desconto. Preço cheio."

// → Seu código aqui:
/*const ler = require("readline-sync")
let estudante = ler.keyIn("é estudante?")
let idoso = ler.questionInt("tem mais de 60 anos?")
if (estudante|| idoso){
    console.log("desconto de 50% aplicado!")
}else {
    console.log("sem desconto. preço cheio")
}*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Sistema de notas completo
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do aluno.
//    - Nota da prova 1.
//    - Nota da prova 2.
// b) Armazene os dados em um objeto "aluno" e calcule a média
//    (média = (prova1 + prova2) / 2). Adicione a média ao objeto.
// c) Classifique e exiba com if/else if/else:
//    - média >= 7  → "Aprovado"
//    - média >= 5  → "Em recuperação"
//    - abaixo de 5 → "Reprovado"
// d) Exiba o objeto "aluno" com console.table().
// e) Exiba uma mensagem final: "<nome>: <situação> (média: <média>)"

// → Seu código aqui:
const ler = require("readline-sync")
/*const aluno ={
    nomeAluno: ler.question("diga seu nome"),
    notaP1: ler.questionInt("diga nota p1:"),
    notaP2: ler.questionInt("diga nota p2:"),
}
let media = (aluno.notaP1 + aluno.notaP2) /2
console.log(media)
if(media >=7){
    console.log("aprovado")
}else if(media >=5){
    console.log("em recuperação")
}else{
    console.log("reprovado")
}
console.table(aluno)
console.log(`${aluno.nomeAluno}: ${media}`)*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Calculadora interativa
// ------------------------------------------------------------
// a) Peça ao usuário dois números usando questionFloat().
// b) Peça ao usuário que escolha uma operação digitando um número:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão
//    Use questionInt() para capturar a escolha.
// c) Armazene os dois números, o número referente à escolha e o símbolo referente à escolha
//    em um objeto 'calculo' com as propriedades:
//    numeroA, numeroB, operacao, simbolo.
// d) Com base na escolha, calcule o resultado usando if/else if, else.
//    Dica: se a operação for divisão e o segundo número for 0, exiba um aviso de erro.
// e) Exiba no console o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Exemplo: "10 + 3 = 13"
// f) Realize testes para verificar se a calculadora está funcionando corretamente.
// g) Chame o professor para realizar alguns testes 🫡

// → Seu código aqui:
const readline = require('readline-sync');
let numeroA = readline.questionFloat("Digite o primeiro número: ");
let numeroB = readline.questionFloat("Digite o segundo número: ");

console.log("Escolha a operação:");
console.log("1 – Soma");
console.log("2 – Subtração");
console.log("3 – Multiplicação");
console.log("4 – Divisão");

let operacao = readline.questionInt("Digite o número da operação: ");

let simbolo;
let resultado;

let calculo = {
  numeroA: numeroA,
  numeroB: numeroB,
  operacao: operacao,
  simbolo: simbolo
};

if (operacao === 1) {
  calculo.simbolo = "+";
  resultado = numeroA + numeroB;
} else if (operacao === 2) {
  calculo.simbolo = "-";
  resultado = numeroA - numeroB;
} else if (operacao === 3) {
  calculo.simbolo = "*";
  resultado = numeroA * numeroB;
} else if (operacao === 4) {
  calculo.simbolo = "/";
  
  if (numeroB === 0) {
    console.log("Erro: divisão por zero não é permitida.");
    return;
  }
  resultado = numeroA / numeroB;
} else {
  console.log("Operação inválida.");
  return;
}
console.log(`${calculo.numeroA} ${calculo.simbolo} ${calculo.numeroB} = ${resultado}`);
