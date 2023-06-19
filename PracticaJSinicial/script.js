/* VARIABLES: 

Ejercicio 1: 
Has hecho una compra y sabes el precio del producto (100$) y su iva (21%). 
Haz un script que te calcule el precio total que vas a pagar por tu compra.

var precio = 100
var iva = 21
var preciofinal = precio + precio*iva/100

console.log('el precio final es:' + preciofinal)

*/

/* Ejercicio 2:
En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área (multiplicacion de los lados) y el perímetro (suma de los 4 lados) del cuadrado. Lado 40.

let lado = 40
let area = lado * lado
let perimetro = lado * 4

console.log ('El area de un cuadrado es:' + area)
console.log ('El perimetro de un cuadrado es:' + perimetro)
*/

/* Ejercicio 3:
En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.


let nombreusuario = prompt('Escribe nombre')
console.log ('Hola ' + nombreusuario)
*/

/* Ejercicio 4: 
En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.

let numeroentero1 = Number (prompt('Ingrese numero 1'))
let numeroentero2 = Number (prompt ('Ingrese numero 2'))
let numeroentero3 = Number (prompt ('Ingrese numero 3'))
console.log('El valor de la media es: ' + (numeroentero1 + numeroentero2 + numeroentero3)/3)

*/


/* Ejercicio 5: Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche, luego le pide el número de kilómetros recorridos. El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros.


let kmrecorridos = prompt('ingrese km recorridos')
let litrocombustible = prompt('ingrese cantidad de litros combustibles')
console.log ('El consumo de combustible por kilometro es: ' + (litrocombustible/kmrecorridos))

*/

/* CONDICIONALES
eJERCICIO 1: 
Se trata de escribir un script que diga si un número es par o es impar.

let numero = prompt('ingrese numero')
let par = numero/2

if(par === 0){
    onslotchange.log('es un numero Par')
} else(console.log('es numero impar'))

*/

/* Ejercicio 2: 
Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo

let numero = prompt('ingrese numero')

if (numero >= 0){
    console.log('Es un numero positivo')
}else{
    console.log('Es un numero negativo')
}

*/

/* Ejercicio 3: 
En este ejercicio debes pedir dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error

let numero1 = prompt ('ingresar numero')
let numero2 = prompt ('ingresar numero')

if(numero2 >0){
    console.log('El cociente es: ' + numero1/numero2)
}else{
    alert('Es un error de cociente')
}
*/

/* Ejercicio 4: 
Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó...

let letra = prompt('ingrese letra')

if (letra === 'A' || letra === 'a'){
    console.log('letra correcta')
}else{
    console.log('letra incorrecta')
}

*/

/* Ejercicio 5: 
