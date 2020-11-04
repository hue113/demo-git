function Horse() {

}
Horse.prototype.jump = function () {
    console.log('Jumping');
}

Horse.prototype.run = function () {
    console.log('Running');
}

module.exports = Horse;