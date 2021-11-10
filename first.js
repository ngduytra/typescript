var sum = function (a, b) {
    return a + b;
};
var a = sum(4, 5);
console.log(a);
var isCool = true;
var age = 56;
var eyeColor = 'brown';
var favouriteQuote = "I'm not old, i'm only " + age;
var pets = ['cat', 'dog', 'pig'];
var pet2 = ['lion', 'dragon', 'lizard'];
var wizard = {
    a: 'John'
};
var meh = undefined;
var noo = null;
var basket;
basket = ['basketball', 5];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeNumber = Size.Small;
// any
var whatever = 'ahhhhhhhhhhhhhhhh nooooooooooooooooooo';
whatever = basket;
console.log(whatever);
//void
var sing = function () {
    console.log('lalalalalala');
};
//never
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('Nguyen Duy Tra');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
var dog = {};
dog.count;
// Function
var fightRobot3 = function (robots) {
    console.log('Fight!');
};
//class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'alalalalaalal';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('Rawwwwsss');
lion.greet();
// Union
var confused = true;
