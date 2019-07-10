/*
  soma
  subtrai
  multiplica
  divide
  full-name
*/

function minhaFuncao(name) {
  return `Olá, ${name}`
}

// const minhaFuncao = function (name) {
//   return `Olá, ${name}`
// }

// const minhaFuncao = name => `Olá, ${name}`

console.log(minhaFuncao('Camilo'))

function soma(a, b){
  return `soma: ${a+b}`
}

function subtrai(a, b){
  return `subtração: ${a-b}`
}

function multiplica(a, b){
  return `multiplicação: ${a*b}`
}

function divide(a, b){
  return `divisão: ${a/b}`
}

function fullName(firstName, lastName){
  return `Nome completo: ${firstName} ${lastName}`
}

console.log(soma(4,2))

console.log(subtrai(4,2))

console.log(multiplica(4,2))

console.log(divide(4,2))

console.log(fullName('Camilo', 'Menucheli'))

