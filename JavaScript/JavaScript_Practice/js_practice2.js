var obj1 = {
    name:"David",
    age: 32
};
var obj2 = obj1;

obj2.name = "Perez";

console.log(obj1.name);
console.log(obj2.name);