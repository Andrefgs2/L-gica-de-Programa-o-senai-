// ============================================================
//   ATIVIDADE 08 – Estruturas de Controle (Switch / Case)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// ============================================================


// ============================================================
        //   ATIVIDADE 08 – Estruturas de Controle (Switch / Case)
        // ============================================================
        // Instruções: resolva cada exercício no espaço indicado.
        // ============================================================
        
        
        // ------------------------------------------------------------
        // EXERCÍCIO 1 – Switch simples com número
        // ------------------------------------------------------------
        // a) Declare "planeta" com valor 3.
        // b) Usando switch/case, exiba o nome do planeta do Sistema Solar
        //    correspondente ao número (1 = Mercúrio, 2 = Vênus,
        //    3 = Terra, 4 = Marte, 5 = Júpiter, 6 = Saturno,
        //    7 = Urano, 8 = Netuno).
        // c) No default, exiba: "Planeta não encontrado."
        
        // → Seu código aqui:
        let planeta = 3

        switch(planeta){
        case 1:console.log("mercurio")
        break;
        case 2:console.log("venus");
        break;
        case 3:console.log("Terra");
        break;
        case 4: console.log("marte");
        break;
        case 5:console.log("Jupiter");
        break;
        case 6:console.log("saturno");
        break;
        case 7: console.log("Urano");
        break;
        case 8:console.log("Netuno");
        break;
        default:console.log("Planeta nao encontrado");
        break;
        }
        console.log("_______________________________");
        
        
        // ------------------------------------------------------------
        // EXERCÍCIO 2 – Switch com string
        // ------------------------------------------------------------
        // a) Declare "direcao" com valor "norte".
        // b) Usando switch/case, exiba a mensagem correspondente:
        //    - "norte"  → "Seguindo para o Norte ↑"
        //    - "sul"    → "Seguindo para o Sul ↓"
        //    - "leste"  → "Seguindo para o Leste →"
        //    - "oeste"  → "Seguindo para o Oeste ←"
        //    - default  → "Direção desconhecida."
        
        // → Seu código aqui:
        let direcao= "norte"
        switch(direcao){
            case "norte":console.log("Seguindo para o Norte ↑");
            break;
            case "sul":console.log("Seguindo para o Sul ↓")
            break;
            case "leste":console.log("Seguindo para o Leste →")
            break;
            case "oeste":console.log("Seguindo para o Oeste ←")
            break;
            default:console.log("Direção desconhecida.");
            break;
        }
        console.log("_______________________________");
        
        
        // ------------------------------------------------------------
        // EXERCÍCIO 3 – Fall-through(cascata) intencional
        // ------------------------------------------------------------
        // a) Declare "tipoVeiculo" com valor "moto".
        // b) Usando fall-through (cases sem break), classifique:
        //    - "bicicleta" ou "moto" ou "carro"  → "Veículo leve"
        //    - "caminhao" ou "onibus"             → "Veículo pesado"
        //    - default                            → "Tipo desconhecido."
        // c) Exiba a categoria com template literal.
        
        // → Seu código aqui:
        let tipoVeiculo= "moto"
        switch(tipoVeiculo){
            case "bicicleta":console.log("Veículo leve");
            case "moto": console.log("Veículo leve");
            case "carro":console.log("Veículo leve");
            break;
            case"caminhao":console.log("Veículo pesado")
            case"onibus":console.log("Veículo pesado");
            break;
            default:console.log("Tipo desconhecido.");
            break;
        }
        console.log("_______________________________");
        
        
        // ------------------------------------------------------------
        // EXERCÍCIO 4 – Switch com input (número)
        // ------------------------------------------------------------
        // a) Exiba o menu de turnos para o usuário:
        //    1 – Manhã | 2 – Tarde | 3 – Noite
        // b) Peça ao usuário que escolha um turno (questionInt()).
        // c) Com switch/case, exiba a saudação correspondente:
        //    - 1 → "Bom dia! Turno da manhã."
        //    - 2 → "Boa tarde! Turno da tarde."
        //    - 3 → "Boa noite! Turno da noite."
        //    - default → "Opção inválida."
        
        // → Seu código aqui:
        /*const ler = require('readline-sync')
        console.log("========== menu de turnos =============")
        console.log("1 – Manhã | 2 – Tarde | 3 – Noite")
        
        let user = ler.questionInt("digite umn numero:")

        switch(user){
            case 1:console.log("bom dia! turno da manha.")
            break;
            case 2: console.log("Boa tarde! Turno da tarde.");
            break;
            case 3:console.log("Boa noite! Turno da noite.");
            break;
            default:console.log("Opção inválida.");
            break;
            
        }*/
        console.log("_______________________________");
        
        
        // ------------------------------------------------------------
        // EXERCÍCIO 5 – Switch com input (string)
        // ------------------------------------------------------------
        // a) Pergunte ao usuário qual é a estação do ano favorita dele
        //    (question()): "verao", "outono", "inverno" ou "primavera".
        // b) Com switch/case, exiba uma descrição curta da estação:
        //    - "verao"     → "Dias quentes e férias!"
        //    - "outono"    → "Folhas caindo e temperaturas amenas."
        //    - "inverno"   → "Frio, cobertores e chocolate quente."
        //    - "primavera" → "Flores, calor e renovação."
        //    - default     → "Estação não reconhecida."
        
        // → Seu código aqui:
        const ler = require('readline-sync')

        /*let user2 = ler.question("qual sua estacao de ano favorita?")

        switch(user2){
            case "verao": console.log("Dias quentes e férias!");
            break;
            case "outono":console.log("Folhas caindo e temperaturas amenas.");
            break;
            case "inverno":console.log("Frio, cobertores e chocolate quente.");
            break;
            case "primavera":console.log("Flores, calor e renovação.");
            break;
            default:console.log("Estação não reconhecida.");
            break;
        }*/
        console.log("_______________________________");
        
        
        // ------------------------------------------------------------
        // EXERCÍCIO 6 – Dias da semana com fall-through
        // ------------------------------------------------------------
        // a) Pergunte ao usuário um número de 1 a 7 (questionInt()).
        // b) Usando fall-through intencional:
        //    - 1 a 5  → exiba: "dua util"
        //    - 6 ou 7 → exiba: "Final de semana"
        //    - default → "Número inválido"
        // c) Exiba também o nome do dia correspondente (Segunda a Domingo).
        
        // → Seu código aqui:
       /* let user= ler.questionInt("digite um numero de 1 a 7:")
        
        switch(user){
            case 1:console.log("dia util");
            case 2:console.log("dia util");
            case 3:console.log("dia util");
            case 4:console.log("dia util");
            case 5:console.log("dia util");
            break;
            case 6:console.log("final de semana");
            case 7:console.log("final de semana");
            break;
            default:console.log("numero invalido");
            break; 
        }*/
        
        console.log("_______________________________");
        
        
        // ------------------------------------------------------------
        // EXERCÍCIO 7 – Switch com objeto
        // ------------------------------------------------------------
        // a) Crie um objeto "produto" com as propriedades, perguntando ao usuário:
        //    - nome
        //    - categoria: número de 1 a 4 | 1 – Eletrônico | 2 – Vestuário | 3 – Alimento | 4 – Livro
        //    - preco
        // b) Com switch/case na categoria:
        //    - 1 → adicione ao objeto: descricaoCategoria: "Eletrônico" e garantia: "12 meses"
        //    - 2 → adicione ao objeto: descricaoCategoria: "Vestuário" e garantia: "Troca em 30 dias"
        //    - 3 → adicione ao objeto: descricaoCategoria: "Alimento" e garantia: "Ver validade"
        //    - 4 → adicione ao objeto: descricaoCategoria: "Livro" e garantia: "Sem garantia"
        //    - default → adicione ao objeto: descricaoCategoria: "Categoria invalida" e garantia: "Sem garantia". Também exiba no console: "Categoria inválida."
        // c) Exiba o objeto com console.table().
        
        // → Seu código aqui:
        /*let produto ={
            nome: ler.question("Qual seu nome?"),
            categoria: ler.question("numero de 1 a 4 :"),
            preco: ler.question("Qual e o preco?")
        }
        switch(produto.categoria){
            case 1: console.log(`${produto.categoria} "eletronico, garantia 12 meses`);
            break;
            case 2: console.log(`${produto.categoria} vestuario, troca em 30 dias`);
            break;
            case 3:console.log(`${produto.categoria} Alimento, ver validade`);
            break;
            case 4:console.log(`${produto.categoria} livro, sem garantia`);
            break;
            default:console.log(`${produto.categoria} categoria invalida, sem garantia`);
            break;
        }*/
        console.log("_______________________________");
        
        
        // ------------------------------------------------------------
        // EXERCÍCIO 8 – Conversor de nota para conceito e cor
        // ------------------------------------------------------------
        // a) Pergunte ao usuário:
        //    - Nome
        //    - Nota de 0 a 10 (questionInt()).
        // b) Descubra o conceito de acordo com a nota, utilizando switch/case e adicione ao objeto o conceito e a mensagem correspondente.
        //    - 10 ou 9  → conceito: "A", mensagem: "Excelente!"
        //    - 8 ou 7   → conceito: "B", mensagem: "Muito bom!"
        //    - 6 ou 5   → conceito: "C", mensagem: "Suficiente."
        //    - 4 ou 3   → conceito: "D", mensagem: "Em recuperação."
        //    - 2, 1 ou 0 → conceito: "F", mensagem: "Reprovado."
        //    - default  → "Nota inválida."
        // c) Exiba: "<nome> – Nota: <nota> | Conceito: <conceito> | <mensagem>"
        
        // → Seu código aqui:
        /*let user = {
            nome:ler.question("digite seu nome?"),
            nota: ler.questionInt("digite sua nota (0 a 10):")
        }

        switch(user.nota){
            case 10 || 9: console.log(' A, excelente!')
            break;
            case 8 || 7: console.log('B, Muito bom!');
            break;
            case 6 || 5: console.log('C, Suficiente');
            break;
            case 4 || 3:console.log('D, Em recuperacao');
            break;
            case 2,1 || 0: console.log('F, Reprovado');
            break;
            default:console.log('nota invalida.');
            break;
        }*/


        console.log("_______________________________");
        
        
        // ------------------------------------------------------------
        // EXERCÍCIO 9 – Calculadora com switch
        // ------------------------------------------------------------
        // a) Pergunte ao usuário dois números (questionFloat()).
        // b) Exiba o menu de operações:
        //    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão | 5 – Resto
        // c) Peça ao usuário que escolha uma operação (questionInt()).
        // d) Com switch/case, calcule e exiba o resultado no formato:
        //    "<numeroA> <símbolo> <numeroB> = <resultado>"
        //    Se a operação for 4 (divisão) e o divisor for 0, exiba:
        //    "Erro: divisão por zero não é permitida."
        //    No default, exiba: "Operação inválida."
        
        // → Seu código aqui:
        let um = ler.questionFloat("digite um numero:")
        let dois = ler.questionFloat("digite um numero:")

        let simbolo;
        let resultado;

        console.log("1 –- Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão | 5 – Resto");

        let tres = ler.questionInt("escolha uma operacao:"),
        
        switch(tres){
            case 1: resultado= um = dois
                  simbolo = "+"
                  break;
            case 2:resultado= um - dois
                   simbolo= "-"
                   break;
            case 3:resultado= um * dois
                   simbolo= "*"
                   break;
            case 4:resultado= um / dois
                   simbolo= "/"
                   break;
            default: console.log("operacao invalida.");
            
        }
        
        console.log("_______________________________");
        
        
        // ------------------------------------------------------------
        // EXERCÍCIO 10 – Menu de loja completo
        // ------------------------------------------------------------
        // a) Crie um objeto "loja" com:
        //    - nome: "TechShop"
        //    - saldo: 0
        // b) Exiba o menu:
        //    1 – Ver produtos | 2 – Comprar | 3 – Ver carrinho | 4 – Sair
        // c) Peça ao usuário uma opção (questionInt()).
        // d) Com switch/case:
        //    - 1 → exiba uma lista fixa de 3 produtos com preços usando console.table()
        //          (ex: [{ produto: "Mouse", preco: 89.90 }, ...])
        //    - 2 → pergunte qual produto e o preço (question + questionFloat),
        //          adicione ao saldo e exiba: "Produto adicionado ao carrinho."
        //    - 3 → exiba: "Total no carrinho: R$ <saldo>"
        //    - 4 → exiba: "Obrigado por visitar a TechShop!"
        //    - default → exiba: "Opção inválida."
        
        // → Seu código aqui:
        const readline = require('readline-sync');


            let loja = {
            nome: "TechShop",
            saldo: 0
             };


            console.log("1 – Ver produtos");
            console.log("2 – Comprar");
            console.log("3 – Ver carrinho");
            console.log("4 – Sair");


            let opcao = readline.questionInt("Escolha uma opcao: ");


            switch (opcao) {
            case 1:
             let produtos = [
            { produto: "Mouse", preco: 89.90 },
            { produto: "Teclado", preco: 129.90 },
            { produto: "Fone de ouvido", preco: 199.90 }
                 ];
            console.table(produtos);
             break;

            case 2:
            let nomeProduto = readline.question("Digite o nome do produto: ");
            let precoProduto = readline.questionFloat("Digite o preco: ");

             loja.saldo += precoProduto;

            console.log("Produto adicionado ao carrinho.");
            break;

            case 3:
            console.log(`Total no carrinho: R$ ${loja.saldo.toFixed(2)}`);
            break;

            case 4:
            console.log("Obrigado por visitar a TechShop!");
            break;

            default:
            console.log("Opcao invalida.");
                }
             console.log("_______________________________");
   