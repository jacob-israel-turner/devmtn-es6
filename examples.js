/*
  const and let
*/

// if (true) {
//   var thing = 'woo'
// }
//
// console.log(thing) // 'woo'
//
// if (true) {
//   let foo = 'bar'
// }
//
// console.log(foo) // undefined
//

// let funcArray = []
//
// for (let i = 0; i < 10; i++) {
//   funcArray.push(function() {
//     console.log(i)
//   })
// }
//
// funcArray[5]()


// const foo = []
//
// console.log(foo)
//
// foo.push('stuff', 21)
//
// console.log(foo)


// const foo = () => console.log('wooo!')
//
// foo()

// setInterval(() => {
//   console.log('woo')
//   return 'value'
// }, 1000)
//
// setInterval(function () {
//   return console.log('woo')
// }, 1000)

// const myFunc = () => console.log('woo')

// const anotherFunc = () => {
//   return console.log('woo')
// }

// const add = (a, b) => a + b

// const add = (a, b) => { // Same as above ^
//   return a + b
// }

// const logSomething = thing => console.log('Thing: ' + thing)
//
// logSomething(add(2,3))

/* Template Strings */

// "" '' ``

// `This is a multi-line
//
// String`
//
//
// const name = 'Jacob'
// const thing = 100
//
// const sayHello = (name) => console.log(`Hello, ${name}`)
//
// sayHello(name)


/* Object Literal Enhancements */

// const someVariable = 'name'
// Old, lame way
// const myObject = {
//   someMethod: function(){
//     console.log('I\'m laaaame')
//   }
// }
// myObject[someVariable] = 'test'
//
// // New, hip way
// const myObject = {
//   [someVariable]: 'test',
//   someMethod() {
//     console.log(`I'm hiiiip`)
//   },
//   staticKey: 'test'
// }

// Old lame way
// function personFactory(name, age, hairColor){
//   return {
//     name: name,
//     age: age,
//     hairColor: hairColor
//   }
// }
//
// // New hip way
// function personFactory(name, age, hairColor) {
//   return { name, age, hairColor }
// }

// const myObject = {
//   foo: () => console.log('wooo!'), // Works!
//   bar() => console.log('hoo!') //  Doesn't work!!
// }
//
// myObject.foo()

/* destructuring */

// const myObject = {
//   a: 'test',
//   b: 'bar',
//   c: 21
// }
//
// const { c, a } = myObject

// c === 21
// a === 'test'






/* temp */
