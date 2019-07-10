const a = 10
const b = 5
const c = '5'

/*
  Operadores de comparação
  - igual a
  - identico a 
  - diferente
  - maior que
  - maior ou igual a
  - menor que
  - menor ou igual a
*/

console.log('igual a e b? ', a == b)
console.log('igual b e c? ', b == c)

console.log('identico b e c? ', b === c)

console.log('diferente b e c? ', b != c)

console.log('realmente diferente b e c? ', b !== c)

console.log('a maior que b? ', a > b)

console.log('a maior ou igual a b? ', a >= b)

console.log('a menor que b? ', a < b)

console.log('b menor ou igual a a? ', b <= a)

/*
 Operadores Lógicos
 - e &&
 - ou ||
 - negação !
*/



/*
 - If
 - ternário
*/

if (4 > 2 && a < b){
  console.log('4 é maior que 2')
}else{
  console.log('4 não é maior que 2')
}

const maior = (4 > 2 || a < b) ? 'é maior' : 'não é maior'
console.log(maior)

const m = (!(a>b)) ? 'é maior' : 'não é maior'
console.log(m)