function Cat() {
    this.stomach = [];
}

Cat.prototype.eat = function() {
    this.stomach.push(mouse);
}

module.exports = Cat;