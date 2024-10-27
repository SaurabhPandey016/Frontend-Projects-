// Deafult Parameters in Functions; part 2 =============================================================

// function getAge() {
//     return 190;
// }


// function utility(name = "Love", age = getAge()) {
//    console.log(name, " ", age); 
// }

// utility();





// function solve(value = "Rahul") {
//     console.log("HELLO JII -> ", value);
// }
// solve(undefined);
// function sayName(fName = "Uday", lName = fName.toUpperCase()) {
//     console.log("My Name is: ", fName," ", lName);
// }

// sayName("Love");



// Part 1 ========================================================================

// class Human {
//     //properties
//     age; // public
//     #wt = 80; //private
//     ht = 180;

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }


//     //behaviour

//     #walking(){
//         console.log("I am Walking ", this.#wt);
//     }

//     running() {
//         console.log("I am running")
//     }

//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val;
//     }
// }

// let obj = new Human(50, 190,101);
// console.log(obj.fetchWeight);

// obj.walking();



// Practice Session

// ===========================================================================================================


// Creating a Class'

class DefaultCar {

    // Properties
    name = "Lamborghini Aventador";
    #cartopSpeed = 100;
    #carmileage = 22;
    braking;


    // Behaviour
    operating () {
        console.log("Car is in Operating Mode");
    }

    showMileage(value) {
        console.log("current Milage is : " + value);
    }

    // getTopSpeed(speed) {
    //     console.log("Current Top Speed is: " + speed);
    // }

    // Getter
    topSpeed () {
        return this.#cartopSpeed;
    }

    // Setter

    setTopSpeed(value) {
        this.#cartopSpeed = value;
        return this.#cartopSpeed
    }

    setMileage(value) {
        this.#carmileage = value;
        return this.#carmileage
    }

}
// 1.
// using Default constructor;
let car1 = new DefaultCar();




// ===========================================================================================================





class parameterizedCar {

    // Properties
    name;
    #cartopSpeed ;
    #carmileage;
    // braking;
    

    constructor (name, speed, mileage) {
        this.name = name;
        this.#cartopSpeed = speed;
        this.#carmileage = mileage;
    }




    // Behaviour
    operating () {
        console.log("Car is in Operating Mode");
    }

    showMileage() {
        console.log("current Milage is : " + this.#carmileage);
    }

    // getTopSpeed(speed) {
    //     console.log("Current Top Speed is: " + speed);
    // }

    // Getter
    topSpeed () {
        console.log(this.#cartopSpeed) ;
    }

    // Setter

    setTopSpeed(value) {
        this.#cartopSpeed = value;
        // console.log(this.#cartopSpeed)
    }

    setMileage(value) {
        this.#carmileage = value;
        // console.log(this.#carmileage); 
    }

}

// Creating an Object to life;


// 2.
// using parameterized constructor;
let car2 = new parameterizedCar('Mahindra Thar', 200, 13);

car2.setMileage(33);
// car2.showMileage();

car2.showMileage();
console.log(car2.name);

console.log(car1.name);






