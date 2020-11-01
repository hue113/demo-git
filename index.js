var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Tom');
var tom = new Cat(); 
var jerry = new Mouse('Jerry'); 

dog.sayHi();
dog.eat(tom);
console.log(dog);

tom.eat(jerry);
console.log(tom);

try {
    tom.eat(dog);
} catch (error) {
    console.log('Cat cannnot eat dog');
}