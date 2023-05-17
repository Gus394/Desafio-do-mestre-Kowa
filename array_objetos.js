const obj = {"id": 0, "nome": "gustavo", "email": "haha@bol", "cpf": "27565", "idade": 100};
const array = [];

for (var i = 0; i < 5; i++) { // por enquanto inserindo 5 do mesmo objeto
    array.push(obj);
}

function pegarId() { // tenho que ver como pegar input do jeito certo, prompt n funciona em console. Tentei aquela parada do readline mas n gostei
    
    let idSelecionado = prompt("Insira o ID do objeto a ser editado.");
    let objEscolhido = array.find(identificador => identificador.idSelecionado === ID); // retorna o objeto inteiro?

    if (objEscolhido === undefined) { // nao sei se pode fazer essa comparacao, mas tem q ter um if caso o id n existir
        console.log("ID nao encontrado.");
        return;
    }
    return objEscolhido.id; // duvida, como funciona o return? ele deixa retornar qualquer coisa ou nada?
}

function criar() {
    
    let novoObj = {};
    novoObj.id = array.length(); // posteriormente verificar a validez do input do usuario

    console.log("Digite o nome: ");
    novoObj.nome = prompt();
    
    console.log("Digite o email: ");
    novoObj.email = prompt();
    
    console.log("Digite o cpf: ");
    novoObj.cpf = prompt();
    
    console.log("Digite a idade: ");
    novoObj.idade = prompt();

    array.push(novoObj);
}

function editar() {
    
    var idSelecionado = pegarId();

    while(true) {
        
        switch (prompt("Digite o numero correspondente ao que vc quer mudar:\n1. Nome\n2. Email\n3. cpf\n4. Idade\n")) {
            case "1": // nome
                array[idSelecionado].nome = prompt(); // again, n sei como pega input do usuario, mas a logica seria assim?
                return;
        
            case "2": // email
                array[idSelecionado].email = prompt();
                return;
            
            case "3": // cpf
                array[idSelecionado].cpf = prompt();
                return;
    
            case "4": // idade
                array[idSelecionado].idade = prompt();
                return;
                
            default:
                console.log("Insira um valor valido.");
                break;
        }
    }
}

function remover() {

    var idSelecionado = pegarId();
    array.splice(idSelecionado, 1);
}

function ler() {

    for (var i = 0; i < array.length(); i++) {
        Object.keys(array[i]).forEach((atributo) => console.log(atributo));
    }
}

// ordene por idade e imprima ordenado
function ordenarPorIdade() {
    
    // isso aqui foi meio q copiado, n entendi muito bem ainda a logica da comparacao
    array.sort((a, b) => (a.idade < b.idade) ? 1 : (a.capacity > b.capacity) ? -1 : 0);
    ler();
}
