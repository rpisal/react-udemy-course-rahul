'use strict';

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 3, 100));

var user = {
    name: 'Rahul Pisal',
    cities: ['Dubai', 'Santa Clara', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
