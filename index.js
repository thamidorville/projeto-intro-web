/* série 

* Título; 1899

* Sinopse; Um navio (Prometheus) se perde há 4 meses, 
no atlântico. Outro navio (kerberos), cruza com ele em sua rota, 
e mistérios percorrem a vida dos passageiros.

* Duração em episódios; 8

* Ano de Lançamento; 2022

* Gênero (mistério);

* É um remake?/* false, pois é original.*/

const nomeDaserie = "1899";
const anoDelancamento = 2022;
const remake = false;
const plataformaStream = ["netflix", "prime video", "globoplay"]; 

console.log(nomeDaserie.toUpperCase());
console.log(anoDelancamento);
console.log(remake);

const nomeDaserie2 = "Mr Robot";
const anoDelancamento2 = 2016;
const remake2 = false;
const plataformaStream2 = ["prime video"];
console.log(nomeDaserie2.toUpperCase());
console.log(anoDelancamento2);
console.log(remake2);

const nomeDaserie3 = "little fires everywhere";
const anoDelancamento3 = 2020;
const remake3 = false
const plataformaStream3 = ["netflix", "globoplay", "prime video"]
const mediaAnolancamento = (anoDelancamento + anoDelancamento2 + anoDelancamento3) / 3
console.log (mediaAnolancamento);
console.log(nomeDaserie3.toUpperCase());
console.log(anoDelancamento3);
console.log(remake3);

/* 4. Com um console.log, imprima o resultado 
de uma operação lógica que checa se todos os 
valores de variáveis booleanas criadas até aqui 
são verdadeiras. */

const verificaremake = remake && remake2 && remake3 === true;
console.log(verificaremake);


