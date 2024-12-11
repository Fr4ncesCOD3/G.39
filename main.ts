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
const nome: string = "Mario";
const eta: number = 25;
const staStudiandoTS: boolean = true;

// 3) Tipizzazione parametro funzione
const greet = (name: string): string => {
    return "Ciao " + name;
}

console.log(greet("Mario"));

// 4) Tipo di ritorno esplicito
const sum = (a: number, b: number): number => {
    return a + b;
}

console.log(sum(1, 2));


// 5) Funzione calcolo IVA
const calcolaIVA = (prezzo: number): number => {
    return prezzo * 1.22;
}

console.log(calcolaIVA(100));

// 6) Funzione concatenazione e lunghezza
const concatenaEMisura = (str1: string, str2: string): number => {
    return (str1 + str2).length;
}

console.log(concatenaEMisura("Ciao", "Mondo"));


// 7) Type Union
// Una Type Union permette a una variabile di accettare più tipi
// Si scrive usando il simbolo |
type StringOrNumber = string | number;
let esempio: StringOrNumber = "test";
esempio = 42; // valido


// 8) Variabile con union type
let valore: number | null | undefined;
valore = 42;
valore = null;
valore = undefined;

// 9) Type union per giorni della settimana
type GiorniSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";
let giorno: GiorniSettimana = "Lunedì";


// 10) Array tipizzato
// Modo 1
const numbers1: number[] = [1, 2, 3];
// Modo 2
const numbers2: Array<number> = [1, 2, 3];

// 11) Tupla
// Una tupla è un array con un numero fisso di elementi di tipi diversi
type CinqueElementi = [string, string, string, number, number];
const esempio1: CinqueElementi = ["uno", "due", "tre", 4, 5];


// 12) Differenza tra type e interface:
// - type è più flessibile e può essere usato per alias di tipi primitivi
// - interface è estendibile e meglio per definire oggetti
// - interface supporta la dichiarazione merging

// 13) Interfaccia per persona
interface Persona {
    firstname: string;
    lastname: string;
    age: number;
}

const persona: Persona = {
    firstname: "Mario",
    lastname: "Rossi",
    age: 25
}

console.log(persona);

// 14) Interfaccia con proprietà opzionale
interface Utente {
    email: string;
    telefono?: string; // il ? rende la proprietà opzionale
}

const utente: Utente = {
    email: "mario.rossi@example.com"
}

console.log(utente);


// 15) Array di studenti
interface Studente {
    nome: string;
    voto: number;
}

const studenti: Studente[] = [
    { nome: "Mario", voto: 7 },
    { nome: "Luigi", voto: 8 },
    { nome: "Giovanna", voto: 9 }
];

console.log(studenti);



// 16) Interfaccia base e estesa
interface Veicolo {
    marca: string;
    modello: string;
}

interface Auto extends Veicolo {
    numeroPorte: number;
    tipologia: "berlina" | "suv" | "sportiva";
}
//17) oggetto che implementa l'interfaccia Auto
const miaAuto: Auto = {
    marca: "Toyota",
    modello: "Corolla",
    numeroPorte: 4,
    tipologia: "berlina"
}

console.log(miaAuto);

// 18) I Generics sono "segnaposto" per tipi che vengono specificati
// quando si usa effettivamente il tipo o la funzione.
// Permettono di creare componenti riutilizzabili che possono
// lavorare con diversi tipi mantenendo type safety.

// 19) Sì, è possibile avere più tipi generici in un'interfaccia come:
interface Coppia<T, U> {
    primo: T;
    secondo: U;
}

const coppia: Coppia<string, number> = {
    primo: "Mario",
    secondo: 25
}

console.log(coppia);


// 20) Interfaccia generica per risposta API
interface APIResponse<T> {
    success: boolean;
    data: T;
    error?: string;
    statusCode: number;
}

// Esempio di utilizzo
interface User {
    id: number;
    name: string;
}

const response: APIResponse<User> = {
    success: true,
    data: { id: 1, name: "Mario" },
    statusCode: 200
};

console.log(response);