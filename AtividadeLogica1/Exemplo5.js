/* 3 - Crie um algoritmo que leia o valor de um jantar, calcule e 
informe o valor da taxa do garçom (10%) e o valor total a ser pago.*/

let valorDoJantar = 185.50
let taxaGarcom = valorDoJantar * 0.10

let valorTotal = valorDoJantar + taxaGarcom

console.log(`O valor dos 10% do garçom é de R$${taxaGarcom.toFixed(2).replace(".", ",")}.
O valor total do jantar é de R$${valorTotal.toFixed(2).replace(".", ",")}.`)
//O valor dos 10% do garçom é de R$18,55.
//O valor total do jantar é de R$204,05.