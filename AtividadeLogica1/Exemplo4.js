/* 4 - Escreva um programa que pergunte a quantidade de km percorridos
por um carro alugado pelo usuário, assim como a quantidade de dias
pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o
carro custa 60,00 reais por dia e 0,15 centavos por km rodado.*/

let km = 1500
let dias = 5

let valorFinal = (dias * 60) + (km * 0.15)

console.log(`O preço a pagar do aluguel do carro é de R$${valorFinal.toFixed(2).replace(".", ",")}.`)
//O preço a pagar do aluguel do carro é de R$525,00.