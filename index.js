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



// composite data types

my_Array = [1, 2, 3, 4, 5];
my_Object = { name: "Alice", age: 30, city: "New York" };
console.log('my_Array:', my_Array);
console.log('my_Object:', my_Object);