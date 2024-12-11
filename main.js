// 1) I tipi primitivi principali in TypeScript sono:
// - number (numeri interi e decimali)
// - string (testo)
// - boolean (true/false)
// - null
// - undefined
// - symbol
// - bigint
// 2) Variabili tipizzate
// sono variabili che hanno un tipo specifico di dato
var nome = "Mario";
var eta = 25;
var staStudiandoTS = true;
// 3) Tipizzazione parametro funzione
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet("Mario"));
// 4) Tipo di ritorno esplicito
var sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 2));
// 5) Funzione calcolo IVA
var calcolaIVA = function (prezzo) {
    return prezzo * 1.22;
};
console.log(calcolaIVA(100));
// 6) Funzione concatenazione e lunghezza
var concatenaEMisura = function (str1, str2) {
    return (str1 + str2).length;
};
console.log(concatenaEMisura("Ciao", "Mondo"));
var esempio = "test";
esempio = 42; // valido
// 8) Variabile con union type
var valore;
valore = 42;
valore = null;
valore = undefined;
var giorno = "Lunedì";
// 10) Array tipizzato
// Modo 1
var numbers1 = [1, 2, 3];
// Modo 2
var numbers2 = [1, 2, 3];
var esempio1 = ["uno", "due", "tre", 4, 5];
var persona = {
    firstname: "Mario",
    lastname: "Rossi",
    age: 25
};
console.log(persona);
var utente = {
    email: "mario.rossi@example.com"
};
console.log(utente);
var studenti = [
    { nome: "Mario", voto: 7 },
    { nome: "Luigi", voto: 8 },
    { nome: "Giovanna", voto: 9 }
];
console.log(studenti);
//17) oggetto che implementa l'interfaccia Auto
var miaAuto = {
    marca: "Toyota",
    modello: "Corolla",
    numeroPorte: 4,
    tipologia: "berlina"
};
console.log(miaAuto);
var coppia = {
    primo: "Mario",
    secondo: 25
};
console.log(coppia);
var response = {
    success: true,
    data: { id: 1, name: "Mario" },
    statusCode: 200
};
console.log(response);
