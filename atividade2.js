
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
let nome = 'André'
let idade = 20 
let hobbyFavorito = 'jogar futebol'
String = `meu nome é ${nome} tenho ${idade} anos e gosto de ${hobbyFavorito}`
console.log (String)



console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
let cidade = 'jaraguá do sul'
let temp = 23
let fraseclima = `hoje em ${cidade} esta fazendo ${temp} graus, perfeito para assistir um filme`
console.log (fraseclima)


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:
let string = "flamengo"
let number = 2
let boolean = true 
let undefined
let tudo = null
 console.log (typeof "flamengo")
 console.log (typeof 2)
 console.log (typeof boolean)
console.log   (typeof undefined) 
console.log (typeof tudo)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
let personagem = "moises"
let Idade = 120 
let Cidade = "egito"
let missão = "salvar o povo"
let texto = `${personagem} era um principe do ${Cidade} sua missão era ${missão} hebreu da escravidão do ${Cidade}, ordenado por Deus ele faz diversos milagres para a libertação acontecer, perto dos ${Idade} anos ele faleceu`

console.log(texto) 

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
let name = "André"
let objetivo = "adquirir conhecimento"
let motivação =`${name} não desista mesmo que o caminho esteja difícil, e nunca esqueça do objetivo que é ${objetivo}`


console.log(motivação)

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:

console.log("=======================")
console.log("sistema do usúario")
console.log("=======================")
console.log ("1 - ver perfil")
console.log( "2 - editar perfil")
console.log("3 - configurações")
console.log( "4 - notificações")
console.log("5  relatórios")
console.log("6 - ajuda")
console.log("7 - sobre o sistema")
console.log("0 - sair")
console.log("=======================")
console.log("digite o número da opção desejada")
console.log("==========================")