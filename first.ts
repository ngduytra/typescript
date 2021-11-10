const sum = (a : number, b : number) => {
    return a + b
}

const a = sum(4, 5)
console.log(a);

let isCool: boolean = true

let age: number = 56;

let eyeColor: string = 'brown'

let favouriteQuote: string = `I'm not old, i'm only ${age}`


let pets: string[] = ['cat', 'dog', 'pig']

let pet2: Array<string> = ['lion', 'dragon', 'lizard']

let wizard: object = {
    a: 'John'
}

let meh: undefined = undefined
let noo: null = null

let basket: [string, number];
basket = ['basketball', 5]

enum Size {Small = 1, Medium=2, Large=3}

let sizeName: string = Size[2]
let sizeNumber: number = Size.Small

// any
let whatever: any = 'ahhhhhhhhhhhhhhhh nooooooooooooooooooo';
whatever = basket
console.log(whatever)

//void

let sing = (): void =>{
    console.log('lalalalalala')
}

//never
let error = (): never => {
    throw Error('ooops')
}

// interface
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('Nguyen Duy Tra')
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('FIGHT!')
}

interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy

dog.count

// Function
let fightRobot3 = (robots: RobotArmy): void => {
    console.log('Fight!')
}

//class
class Animal {
    sing: string = 'alalalalaalal'
    constructor(sound: string) {
        this.sing = sound
    }

    greet() {
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('Rawwwwsss')
lion.greet()

// Union
let confused: string | number | boolean = true