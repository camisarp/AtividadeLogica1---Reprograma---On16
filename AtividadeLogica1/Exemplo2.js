/* 2 - Calcule o tempo de uma viagem de carro. Pergunte a distância
 a percorrer e a velocidade média esperada para a viagem.*/

let distancia = 1000
let velocidade = 40

let tempoViagem = distancia / velocidade

console.log(`A viagem irá durar cerca de ${tempoViagem.toFixed(2).replace(".", ":")}hr.`)
//A viagem irá durar cerca de 25:00hr.