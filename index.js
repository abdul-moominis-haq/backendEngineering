// primitive data types
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
car1 = new Car("Toyota", "Camry", 2020);
car2 = new Car("Honda", "Civic", 2019);
car3 = new Car("Ford", "Mustang", 2021);
car4 = new Car("Tesla", "Model 3", 2022);

console.log('instance of car1:', car1 );
console.log('instance of car2:', car2 );
console.log('instance of car3:', car3 );
console.log('instance of car4:', car4 );
// Display car information in the HTML
document.getElementById("car1").innerHTML = `Car 1: ${car1.make} ${car1.model} (${car1.year})`;
document.getElementById("car2").innerHTML = `Car 2: ${car2.make} ${car2.model} (${car2.year})`;
document.getElementById("car3").innerHTML = `Car 3: ${car3.make} ${car3.model} (${car3.year})`;
document.getElementById("car4").innerHTML = `Car 4: ${car4.make} ${car4.model} (${car4.year})`;

// function to check if an object is an instance of Car
function  isCar(object) {
    if (object instanceof Car) {
        return true;
    }    return false;
    console.log('object is not an instance of Car');
}
console.log('is car1 a Car?', isCar(car1));
console.log('is car2 a Car?', isCar(car2));
console.log('is car3 a Car?', isCar(car3));
console.log('is car4 a Car?', isCar(car4));
// Display car type information in the HTML
document.getElementById("car1-type").innerHTML = `Is car1 a Car? ${isCar(car1)}`;
document.getElementById("car2-type").innerHTML = `Is car2 a Car? ${isCar(car2)}`;
document.getElementById("car3-type").innerHTML = `Is car3 a Car? ${isCar(car3)}`;
document.getElementById("car4-type").innerHTML = `Is car4 a Car? ${isCar(car4)}`;



// composite data types

my_Array = [1, 2, 3, 4, 5];
my_Object = { name: "Alice", age: 30, city: "New York" };
console.log('my_Array:', my_Array);
console.log('my_Object:', my_Object);
// Display array and object information in the HTML
document.getElementById("array").innerHTML = `Array: ${my_Array}`;
document.getElementById("object").innerHTML = `Object: ${JSON.stringify(my_Object)}`;

// control flow statements
let age = 17;
if(age >= 18){
    console.log('You are an adult.');
}else{
    console.log('You are a minor.');
}
// Display age message in the HTML
document.getElementById("age-message").innerHTML = age >= 18 ? "You are an adult." : "You are a minor.";

// control flow statements with multiple conditions
let time  = 12;
if(time < 12){
    document.getElementById("time-message").innerHTML = "Good morning!";
}
else if(time < 18){
    document.getElementById("time-message").innerHTML = "Good afternoon!";
}
else{
    document.getElementById("time-message").innerHTML = "Good evening!";
}



// if nested control flow statements
const temperature = 45;
const isRaining = true;
if(temperature > 30){
    if(isRaining){
        document.getElementById("weather-message").innerHTML = "It's hot and raining. Stay safe!";
        console.log("It's hot and raining. Stay safe!");
    } else {
        document.getElementById("weather-message").innerHTML = "It's hot but not rainy. Enjoy your sunshine!";
        console.log("It's hot but not rainy. Enjoy your sunshine!");
    }
}else{
    if(isRaining){
        document.getElementById("weather-message").innerHTML = "It's not hot but raining. Take your umbrella!";
        console.log("It's not hot but raining. Take your umbrella!");
    }else{
        document.getElementById("weather-message").innerHTML = "It's not hot and not raining. Have a nice day!";

        console.log("It's not hot and not raining. Have a nice day!");
    }
}


// Switch statement
const day = "Friday";
switch(day){
    case "Monday": 
        document.getElementById("day-message").innerHTML = "It's Monday!";
        break;
    case "Tuesday":
        document.getElementById("day-message").innerHTML = "It's Tuesday!";
        break;
    case "Wednesday":
        document.getElementById("day-message").innerHTML = "It's Wednesday!";
        break;
        case "Thursday":
        document.getElementById("day-message").innerHTML = "It's Thursday!";
        break;
    case "Friday":
        document.getElementById("day-message").innerHTML = "It's Friday!";
        break;
    case "Saturday":
        document.getElementById("day-message").innerHTML = "It's Saturday!";
        break;
        case "Sunday":
        document.getElementById("day-message").innerHTML = "It's Sunday!";
        break;
    default:
        document.getElementById("day-message").innerHTML = "It's some other day!";
}



// loops and iteration

// for loop
for(let i = 1; i <= 5; i++){
    console.log(`For loop iteration: ${i}`);
    console.log(`For loop iteration: ${i}`);
    document.getElementById("for-loop").innerHTML += `For loop iteration: ${i}<br>`;
}

// while loop
//Fibionacci sequence
let limit = 500;
let a= 0;
let b = 1;
while(a <= limit){
    console.log(`While loop value: ${a}`);
    document.getElementById("while-loop").innerHTML += `While loop value: ${a}<br>`;
    let temp = a+b;
    a = b;
    b = temp;
}

// do-while loop
let roll = 0;
do{
    console.log(`Do-while loop roll:`+  roll);
    roll++;
    document.getElementById("do-while-loop").innerHTML += `Do-while loop roll: ${roll}<br>`;
} while(roll <= 7);


// for...of loop
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
for(const fruit of fruits){
    console.log(`For...of loop fruit: ${fruit}`);
    document.getElementById("for-of-loop").innerHTML += `For...of loop fruit: ${fruit}<br>`;
}