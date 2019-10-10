var Dog = /** @class */ (function () {
    function Dog(age, breed) {
        this.age = age;
        this.breed = breed;
    }
    ;
    Dog.prototype.getRelativeAge = function () {
        return this.age * 7;
    };
    return Dog;
}());
var Spot = new Dog(2, 'Labrador');
console.log(Spot);
