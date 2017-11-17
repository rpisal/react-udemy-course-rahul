const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 3, 100));

const user = {
    name: 'Rahul Pisal',
    cities: ['Dubai', 'Santa Clara', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());