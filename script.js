/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
Number: si utilizza quando si vuole assegnare un valore numero (intero o decimale) ad una variabile;
String: si utilizza quando attraverso una seguenza di caratteri si vuole assegnare una valore testo ad una variabile;
Bolean: sono operatori logici e possono avere solo due valori: true o false;
Undefined: quando viene creata la variabile ma non viene inizializzata, pertanto non contiente nessun dato;
Null: quando si vuole rendere null una variabile ovvero svuotarla del suo valore;
BigInt: sta ad indicare un numero intero
Symbol
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
Un oggetto è un insieme di variabili che descrivono la stessa identità. Contiene i dati sotto forma di coppia chiave/valore 
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let valore1 = 12
let valore2 = 20
let somma = valore1 + valore2

console.log("Il risultato della somma è " + somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

console.log("x vale: " + x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Mauro"

console.log("Qual è il mio nome? " + name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let number = 4
let sottrazione = number - x

console.log("Il risultato della sottrazione è " + sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"

console.log(name1!==name2)

