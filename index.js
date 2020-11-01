var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Tom');
var tom = new Cat(); 
dog.sayHi();
dog.eat(tom);
console.log(dog);
