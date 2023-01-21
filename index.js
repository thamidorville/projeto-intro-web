//               SEMANA 1.
/*série:

* Título;
* Ano de Lançamento; 
* É um remake? True ou false.*/

//2. (semana1) Agora, crie três conjuntos de variáveis utilizando as 
// características que você definiu acima. 
// Lembre-se que deve ser o mesmo tipo de item, 
// com três conjuntos de dados diferentes.

let nomeDaserie = "1899";   
let anoDelancamento = 2022;
let remake = false

let nomeDaserie2 = "Mr. Robot";
let anoDelancamento2 = 2016;
let remake2 = false

let nomeDaserie3 = "little fires everywhere";
let anoDelancamento3 = 2020;
let remake3 = false

// 3.  (semana1) Faça um cálculo de média, entre os valores numéricos respectivos de cada item.
//  Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
// A média deve ser igual à soma dos itens, dividida pelo total de itens.
let mediaAnolancamento = (anoDelancamento + anoDelancamento2 + anoDelancamento3) / 3

/* 4. (semana 1) Com um console.log, imprima o resultado 
de uma operação lógica que checa se todos os 
valores de variáveis booleanas criadas até aqui 
são verdadeiras. */

let verificaremake = remake && remake2 && remake3 === true;
console.log(verificaremake);

//5. (semana1)Crie pelo menos mais uma característica para o item que você criou. 
// Esta característica deve ser um array. Mantenha o tipo de dado do array 
// criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
// let plataformaStream = ["netflix", "prime video", "globoplay"]

// 6. (semana1)Exiba um relatório utilizando console.log(), 
// mostrando todos os dados de cada um dos itens criados até aqui
console.log(nomeDaserie.toLocaleUpperCase(), anoDelancamento, remake);
console.log(nomeDaserie2.toLocaleUpperCase(), anoDelancamento2, remake2);
console.log(nomeDaserie3.toLocaleUpperCase(), anoDelancamento3, remake3);
// 1. O log deve exibir o dado de nome, título ou 
// afim sempre em LETRAS MAIÚSCULAS,
//  como no exemplo abaixo.

        // SEMANA 2. 
// SEMANA 2 EXE 1.Transforme os itens que criamos nas últimas semanas em objetos.

let serie1 = {nome: "1899", ano: 2022, remake: false, plataformaStream: ["netflix"]};
let serie2 = {nome:"Mr Robot", ano: 2016, remake: false, plataformaStream: ["amazon prime video"]};
let serie3 = {nome: "little fires everywhere", ano: 2020, remake: false, plataformaStream: ["amazon prime video"]};
console.log(serie1.plataformaStream)

// 2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

let topSeries = [];

//SEMANA 2. EXE 3. Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push()

topSeries.push(serie1, serie2, serie3);
console.log(topSeries);

// 4. Altere o item 3 
//“Adicione os novos objetos no array de objetos,
//utilizando o push()”, 
//para criar uma verificação antes de dar o push. 
//A caraterística booleana do objeto deve ser validada.
//Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

// for (let remake in serie1) {
  
//     if (serie1.remake === false) {
//     topSeries.push(serie1, serie2, serie3)

       // 5. Crie uma condição else, que, em caso de valor
//  false na condição acima, exiba um **ALERT** avisando para
// o usuário que o item não foi adicionado, e não faça o push
        
//     }else{alert(`série não foi adicionada porque é verdadeiro que ela se trata de um remake.`)}
// }

// console.log(topSeries)

//SEMANA 3
// SEMAAN 3 EXE. 1. um laço que guarde todos os valores da propriedade array do objeto (plataformaStream) em uma mesma string. 
// Utilize esta string no relatório. 
//let serie1 = {nome: "1899", ano: 2022, remake: false, plataformaStream: ["netflix"]};
let gavetaString = "";

for (let i of serie1.plataformaStream){
  gavetaString = serie1.plataformaStream + "";
}
console.log(gavetaString)
console.log(typeof gavetaString)

//SEMANA 3. EXE 2: 
//criar relatório usando laços. Cada item deve ser exibido a partir da iteração
//do laço. <cada serie deve ser exibida a partir da iteração de um laço>
//array de objetos = topSeries
//ex: topSeries = [
    // nome:"1899";
    // ano: 2022;
    // remake: false; 
    //serie é objeto(propriedade); nome é a chave do objeto serie1 que está dentro do 
    //array topSeries. For in vai alocar a chave de cada <serie>, em uma variável, permitindo imprimir os valores de cada chave
//]
for ( i of topSeries) {
    for (j in i){
        console.log(`${j}:${i[j]}`)
}
}

//SEMANA 3. EXE 3:
//Crie uma função que receba como parâmetro um objeto, e devolva a <string> do relatório com os dados do objeto.
//No console deve aparecer os <valores: > do objeto que estiver como parâmetro na função
// let serie1 = {nome: "1899", ano: 2022, remake: false, plataformaStream: ["netflix"]};
function imprimirString (serie1) {
    let dadosDaserie1 = (`Título:${serie1.nome}, Ano de Lançamento: ${serie1.ano}, ${serie1.remake}, pois, não é um remake. Plataforma de Streaming disponível:${serie1.plataformaStream}`)
    console.log(dadosDaserie1)
}
imprimirString(serie1)

//SEMANA 3. EXE 4:
// Crie uma função que recebe um array de objetos e uma string. 
// Esta função deve retornar um objeto, e o objeto retornado deve
// possuir apenas os itens que tenham o nome/título igual à string 
// passada como parâmetro. Caso não exista um item, exiba um ALERT 
// indicando que nenhum item foi encontrado.
// let serie1 = {nome: "1899", ano: 2022, remake: false, plataformaStream: ["netflix"]};
const retornarTopseries = function (topSeries, nome) {
    for (let i in topSeries){
        if (topSeries[i].nome === nome){
            return (topSeries[i].nome)
        }
        
    }return alert("Nenhum item encontrado")
}
console.log(retornarTopseries(topSeries, "1899"))
console.log(retornarTopseries(topSeries, "Mr Robot"))
console.log(retornarTopseries(topSeries, "little fires everywhere"))


// SEMANA 4. EXE. 1. Crie uma página HTML, 
// e nesta página, dê um título para sua lista de itens;

//SEMANA 6. EXE.1. Altere seu código para que a tela de lista 
//de itens crie os elementos da lista através de manipulação
// do DOM

const lista = document.getElementById('texto-1899')

const titulo = document.createElement('li')
titulo.innerHTML = ('1899')
lista.insertAdjacentElement('afterbegin', titulo)

const ano = document.createElement('li')
ano.innerHTML = ('Ano de lançamento: 2022')
lista.insertAdjacentElement('beforeend', ano)

const plataforma = document.createElement('li')
// const textoLiPlataforma = createTextNode('Plataforma Streaming disponível: Netflix')
// plataforma.appendChild(textoLiPlataforma)
plataforma.innerHTML = ('Plataforma Streaming disponível: Netflix')
lista.insertAdjacentElement('beforeend', plataforma)

const lista2 = document.getElementById('texto-mr-robot')

const titulo2 = document.createElement('li')
titulo2.innerHTML = ('Mr. Robot')
lista2.insertAdjacentElement('afterbegin', titulo2)
const ano2 = document.createElement('li')
ano2.innerHTML = ('Ano de Lançamento: 2016')
lista2.insertAdjacentElement('beforeend', ano2)
const plataforma2 = document.createElement('li')
plataforma2.innerHTML = ('Plataforma Streaming disponível: Amazon Prime Video')
lista2.insertAdjacentElement('beforeend',plataforma2)

const lista3 = document.getElementById('texto-little')
const titulo3 = document.createElement('li')
titulo3.innerHTML = ('Little Fires Everywhere')
lista3.insertAdjacentElement('afterbegin', titulo3)

const ano3 = document.createElement('li')
ano3.innerHTML = ('Ano de Lançamento: 2020')
lista3.insertAdjacentElement('beforeend', ano3)

const plataforma3 = document.createElement('li')
plataforma3.innerHTML = ('Plataforma Streaming disponível: Amazon Prime Video')
lista3.insertAdjacentElement('beforeend', plataforma3)

//2. Utilize a função de busca criada no item 2 da semana 6
// para fazer com que ao digitar um campo no input e apertar o 
// botão, apenas os itens com nome igual ao da busca sejam 
// renderizados na tela.
const input = document.getElementById('sinopse')
const sinopse1899 = document.createElement('li')
const sinopseRobot = document.createElement('li')
const sinopseLittle = document.createElement('li')

const inserirSinopse = (event) => {
event.preventDefault()
if(input.value === "1899"){
    sinopse1899.innerHTML = ('Sinopse: Um navio se encontra com outro navio no meio do oceano, e eventos bizarros acontecem com os passageiros.')
    lista.insertAdjacentElement('beforeend', sinopse1899)
}else if (input.value === "Mr. Robot"){
    sinopseRobot.innerHTML = ('Sinopse: Um programador trabalha em uma grande corporação ao dia, mas a noite, ele é um hacker.')
    lista2.insertAdjacentElement('beforeend', sinopseRobot)
}else if (input.value === "Little fires everywhere"){
sinopseLittle.innerHTML = ('Sinopse: a maternidade é explorada sob diversas perspectivas nesta série.')
lista3.insertAdjacentElement('beforeend', sinopseLittle)
} else {
    alert('Digite o título de uma das séries abaixo para ver sua sinopse.')
}
}





