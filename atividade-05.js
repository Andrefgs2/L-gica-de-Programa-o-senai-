// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:
/*let primeira = (10 == 10)
let primeira1 = (10 === 10)
console.log(`resultado de ==: ${primeira}`)
console.log(`resultado de ===:${primeira1}`)
let um = (10 == "10")
let umm = (10 === "10")
console.log(`resultado de ==: ${um}`)
console.log(`resultado de ===: ${umm}`)
let dois = (0 == false)
let doiss = (0 === false)
console.log(`resultado de ==: ${dois}`)
console.log(`resultado de ===: ${doiss}`)
let tres = (null == undefined)
let tress = (null === undefined)
console.log(`resultado de ==: ${tres}`)
console.log(`resultado de === ${tress}`)
let qua = ("js" == "js")
let quar = ("js" === "js")
console.log(`resultado de ==: ${qua}`)
console.log(`resultado de ===: ${quar}`)*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:
/*let um = (5 != 5)
let umm = (5 !== 5)
console.log(`resultado de !=: ${um}`)
console.log(`resultado de !==: ${umm}`)
let di = (5 != "5")
let dir = (5 !== "5")
console.log(`resultado de !=: ${di}`)
console.log(`resultado de !==: ${dir}`)
let three= (7 != 3)
let thre= (7 !== 3)
console.log(`resultado de !=: ${three}`)
console.log(`resultado de !==: ${thre}`)
let ult = (true != 1)
let ultt = (true !== 1)
console.log(`resultado de !=: ${ult}`)
console.log(`resultado de !=: ${ultt}`)*/

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:
/*let salarioA = 3500
let salarioB = 4200
 let res1 = (salarioA > salarioB)
 let res2 = (salarioA < salarioB)
 let res3 = (salarioA >= salarioB)
 let res4 = (salarioA <= salarioB)
 let res5 = (salarioA === salarioB)

 console.log(`SalarioA R$ ${salarioA} > R$ ${salarioB}: ${res1}`)
 console.log(`SalarioA R$ ${salarioA} < R$ ${salarioB}: ${res2}`)
 console.log(`SalarioA R$ ${salarioA} >= R$ ${salarioB}: ${res3}`)
 console.log(`SalarioA R$ ${salarioA} <= R$ ${salarioB}: ${res4}`)
 console.log(`SalarioA R$ ${salarioA} === R$ ${salarioB}: ${res5}`)*/


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:
/*let estoque = 0
let temEstoque = (estoque > 0)
let estoqueZerado = (estoque === 0)
let temperatura = 36.5
let febre = (temperatura >= 37.6)
console.log(`tem estoque: ${temEstoque}`)
console.log(`estoque esta zerado? ${estoqueZerado}`)
console.log(`estou com essa temperatura corporal: ${temperatura}`)
console.log(`estou com febre? ${febre}`)*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:
/*const ler = require('readline-sync')
let user = {
    num1: ler.questionInt(`digite um numero:`),
    num2: ler.questionInt(`digite um numero:`)
}
let um = (user.num1 > user.num2)
let umm= (user.num1 < user.num2)
let udois = (user.num1 === user.num2)
let dois = (user.num1 >= user.num2)

console.log(`resultado de num1 > num2: ${um}`)
console.log(`resultado de num1 < num2: ${umm}`)
console.log(`resultado de num1 === num2: ${udois}`)
console.log(`resultado de num1 >= num2: ${dois}`)*/

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:
/*const ler = require('readline-sync')
let  produtoprec = ler.questionInt("Qual e o preco do produto?")
const precoMaximo = 100
let estaDentroDoOrcamento = (produtoprec <= precoMaximo)
let esteItemEhCaro = (produtoprec > precoMaximo)
console.log(`Preço informado: R$ ${produtoprec}`)
console.log(`Dentro do orçamento (< R$ ${precoMaximo})?: ${estaDentroDoOrcamento}`)
console.log(`Item caro (> R$ ${precoMaximo})? : ${esteItemEhCaro} `)*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:
/*const ler = require('readline-sync')
let user = {
    nomePessoa1: ler.question("digite seu nome?"),
    idadePessoa1: ler.question("digite sua idade"),
    nomePessoa2: ler.question("digite seu nome?"),
    idadePessoa2: ler.question("digite sua idade?"),
}
let cadastro = [user.nomePessoa1, user.nomePessoa2, user.idadePessoa1, user.idadePessoa2]
let um = (cadastro[2] > cadastro[3])
let dois = (cadastro[2] === cadastro[3])
let tres = (cadastro[2] >= 18)
let quatro = (cadastro[3] >= 18)
console.log(`O resultado de idadePessoa1 > idadePessoa2: ${um}`)
console.log(`O resultado de idadePessoa1 === idadePessoa2: ${dois}`)
console.log(`O resultado de idadePessoa1 >= maior de idade: ${tres}`)
console.log(`O resultado de idadePessoa >= maior de idade: ${quatro}`)*/



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:
let nome1 = "João", n1a1 = 7, n2a1 = 8, n3a1 = 9;
let nome2 = "Maria", n1a2 = 6, n2a2 = 9, n3a2 = 7;
let m1 = (n1a1 + n2a1 + n3a1) / 3;
let m2 = (n1a2 + n2a2 + n3a2) / 3;

console.log(`Maior média: ${m1 > m2 ? nome1 : nome2}`);
console.log(`Nota 1 maior: ${n1a1 > n1a2 ? nome1 : nome2}`);
console.log(`Nota 2 maior: ${n2a1 > n2a2 ? nome1 : nome2}`);
console.log(`Nota 3 maior: ${n3a1 > n3a2 ? nome1 : nome2}`);

console.log("_______________________________");