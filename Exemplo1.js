/* 1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%.
Exiba no console o valor do desconto e o preço a pagar.*/

let valorMercadoria = 199.99
let desconto20 = valorMercadoria * 0.20

let valorTotal = (valorMercadoria - desconto20)

console.log(`Você ganhou R$${desconto20.toFixed(2).replace(".", ",")} de desconto, e irá pagar R$${valorTotal.toFixed(2).replace(".", ",")} pela mercadoria.`)
//Você ganhou R$40,00 de desconto, e irá pagar R$159,99 pela mercadoria.