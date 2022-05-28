/*
Dados
• Al tirar un dado tenemos 1/6 de
probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36
probabilidades de sacar doble 6
• Al aumentar el número de dados la
probabilidad de sacar todos 6 es cada
vez menor
• Escriba un programa que calcule la
probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato
ingresado por al usuario)*/

let cantidad: number = Number(prompt("ingrese la cantidad de dados a tirar"));
let indice: number;
let probabilidad: number = 0;

for (indice = 0; indice <= 6; indice++) {
  probabilidad = indice ** cantidad;
}
console.log("La probabilidad de sacar 6 en todos los dados es " + probabilidad);
