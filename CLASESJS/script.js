/* Ejemplo de la clase:
Si la factura es tipo A, el iva no esta incluido, si la factura es tipo B, el iva esta incluido, si la factura es tipo C, el iva está exento

let tipodefactura = 'C'

if(tipodefactura == 'A'){
    console.log('Iva NO incluido')
}
else if (tipodefactura == 'B'){
    console.log('Tiene IVA incluido')}
else{
        console.log('Exento')
    }

*/

/* Ejercicio: 
Crear una condicional que verifique que la edad sea mayor o igual a 18, en caso de ser asi decir por consola "es mayor de edad" sino decir "es menor de edad"


Crear un programa que solicite al usuario un precio, eso guardarlo en una variable. Si el precio es inferior a 3000 entonces decir por consola "es barato", si el precio es superior a 3000 decir por consola es caro


Solicitar al usuario 3 números y verificar cuál es el mayor de los 3 (nos muestra el numero mayor por consola)


Verificamos si el número es positivo, negativo o cero (nos dira por consola a que categoria pertenece)


Verificamos si la edad está en el rango de 18 a 65 años, si se cumple la condicion, se dira por consola Esta en edad laborable


let edad=5

if(edad >= 18){
    console.log('Es mayor de edad')
}else{
    console.log('Es menor de edad')
}

let precio = prompt('ingrese precio')

if(precio < 3000){
    console.log('Es barato')
}else{
    console.log('Es caro')
}

let num1 = prompt ('ingrese N°')
let num2 = prompt ('ingrese N°') 
let num3 = prompt ('ingrese N°')

if(num1>num2 && num1>num3){
    console.log(num1)
}
else if(num2>num1 && num2>num3){
    console.log(num2)
}else if(num3>num1 && num3>num2){
    console.log(num3)
}

let signo = '1'
signo = -10 

if(signo > 0){
    console.log('positivo')
}else if(signo < 0){
    console.log('negativo')
}else if(signo === 0){
    console.log('cero')
}

let edad1 = 33

if(edad1 >= 18 && edad <= 65){
    console.log('Esta en edad laboral')
}else{
    console.log('no esta en edad laboral')
}

*/

/*Bucle de conteo o FOR

1)Imprime los números del 1 al 10

2)Imprime los números pares del 2 al 20

3)Imprime los números impares del 1 al 19

4) imprime los numeros del 10 al 1 en orden inverso

5)Imprime los números del 1 al 10, pero se detiene al llegar al 5

6)Imprime los números del 1 al 10, pero salta el 5 y al 6


for(let i = 1; i <= 10 ; i = i + 1){
    console.log (i)
}

for(let i = 2; i <=20 ; i = i + 2){
    console.log (i + 'PAR')
}

for(let i = 1; i <= 19 ;i = i + 2){
    console.log(i + 'IMPAR')
}

for(let i = 10 ; i >= 1; i= i -1){
    console.log(i)
}

for(let i = 1; i <= 10; i = i + 1){
    let nombre = prompt('ingrese nombre')
    if(nombre === 'pepito'){
        break
    }}  

for(let i = 1; i <= 10; i = i +1){
    if (i === 5){
        break
    }
    console.log(i)
}

for (let i =1; i <= 10; i = i +1){
    if(i === 5 || i === 6) {
        continue
    }
    console.log (i)
}

*/


/* Crear una calculadora:

Solicitaremos al usuario una decision 'Si desea usar la calculadora escriba SI'

Luego si se presiono SI, se solcitara una operacion y 2 numeros, y se resolvera segun la operacion correspondiente (+ o -)

Si la operacion no existe entonces se dira 'ERROR: operacion no valida'

Al finalizar el programa de la calculadora se volvera a solictar una decision que dira 'Escriba SI si desea usar la calculadora

Se dira 'La calculadora ha finalizado' en caso de haberse acabado el bucle while

OPCIONAL: Agregar las operaciones * y /

OPCIONAL: La operacion ademas de ser + debera funcionar con su formato texto "sumar", lo mismo con el resto de operaciones

MERITORIO: Se validara que los numeros ingresados sean numeros previo al if de las oepraciones



let decision = prompt ('Si desea usar la calculadora escriba SI')
while (decision === 'SI'){
    let operacion = prompt ('ingrese la operacion + o -')
    let numero1 = Number(prompt ('ingrese numero'))
    let numero2 = Number(prompt ('ingrese numero'))
    if (operacion === '+'){
    alert('el resultado de ' + numero1 + '+' + numero2 + ' es = ' + (numero1 + numero2))
    }
    else if (operacion === '-'){
        alert('el resultado de ' + numero1 + '-' + numero2 + ' es = ' + (numero1 - numero2))
    } 
    else{alert ('ERROR: operacion no valida')
    }
    decision = prompt ('Si desea usar la calculadora escriba SI')
}

 */

/*ARRAYS
Se debera eliminar a Neymar y se agregara al principio del array
Se debera reemplazar a Di Maria por Ronaldo
Se agregara despues de Modric a 'Serre7'
const listadejugadores = ['Messi', 'Modric', 'Otamendi', 'Di Maria', 'Vinicius', 'Neymar', 'Burruchaga']
[]

listadejugadores.splice(5, 1)
listadejugadores.unshift('Neymar')

listadejugadores.splice(4, 1, 'Ronaldo')

listadejugadores.splice(3,0,'Serre7')

console.log(listadejugadores)
*/

/*Muestre solo el jugador que tiene como letra inicial en el apellido la O
const listadejugadores = ['Messi', 'Modric', 'Otamendi', 'Di Maria', 'Vinicius', 'Neymar', 'Burruchaga'] 

for(let i = 0; i < listadejugadores.length; i = i + 1) {
    if(listadejugadores[i][0] === 'O'){
        console.log(listadejugadores[i])
    }
}
*/ 

/* const mensaje = [
    'buen dia',
    'todo bien',
    'no estoy a gusto, bobo',
    'anda pa alla bobo'
]

for(let i = 0; i < mensaje.length; i = i + 1){
    if(mensaje[i].includes('bobo')){
    console.log('el mensaje ' + mensaje[i] + ' contiene palabra ofensiva')
    }
} */


/*
const listadejugadores = [Messi, Otamendi, Neymar, CR7, DiMaria]

for(let listadejugador of listadejugadores){
    if(listadejugador === 'Messi'){
        console.log(listadejugador)
    }
}
*/

/*Generar la funcion es mayor de edad

const edad = (edad) => {
    return edad >= 18
}
*/

/*Generar una funcion llamada esVocal(letra) nos devolvera true o false dependiendo de si es vocal

const vocal = (letra) => {
    return letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"
}

console.log(vocal('m'))
*/

/* Crear una funcion llamada porDos (arrays) y devuelve un array de nuemeros multiplicado por 2 

const porDos = (numero) => {
    return numero.map ((numero) => {
    return numero*2
    })
}

const numero = [2, 8, 9, 5]
console.log(porDos(numero))
*/

/* Mejorar la funcion porDos para que ahora sea la funcion "por" y reciba arrays; y al numero que se reciba se lo multiplique por el N° indicado manualmente.


const por = (numero, arrayNumeros) => {
    return arrayNumeros.map ((arrayNumeros) => {
    return numero*arrayNumeros
    })
}

const numero = 9

const arrayNumeros = [2, 4, 9]

console.log(por(numero,arrayNumeros))*/

/*Ejercicios de funcion, arrays, 

1) Dado un array de números, escribir una función que calcule la suma de todos los números del array.

Bucle for..of
const ejercicio1 = (numeros) =>{
    let sumatoria = 0
    for(let numero of numeros){
        sumatoria = sumatoria + numero
    }
    return sumatoria
}

const numeros = [1,2,3,4]
console.log(ejercicio1(numeros))

bucle foreach
const sumatoria = (arraysnumeros) => {
    let total = 0
    arraysnumeros.forEach((numero) => {
    total = total + numero
    });
    return (total)
}

arraysnumeros = [1,2,3,4]
console.log(sumatoria(arraysnumeros))


4)Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

const par = (arrayPar) => {
    let total = 0
    arrayPar.forEach(numero => {
    if (numero % 2 === 0)
    total = total + numero
    });
    return (total)
}
arrayPar = [7,8,8]
console.log(par(arrayPar))

26)Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud.

//filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',])

//['remolacha', 'sorpresa', 'verde']

const filtrarPorLongitud = (numerolongitud,arrayStrings) => {
    return arrayStrings.map ((Strings) => {
        return arrayStrings.lenght > numerolongitud
    })
}

console.log(filtrarPorLongitud(5, ['Cecilia', 'Juli', 'Monica']))



32)definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase.
const calcularLongitudesDeFrases = (arrayDeFrases) =>{
    return arrayDeFrases.map((frase) =>{
        return frase.length
    })
}
console.log(calcularLongitudesDeFrases(['hola', 'como estas?']))
 */

