function Car(name, brand, year){
    this.name = name;
    this.brand = brand;
    this.year = year;
}

Car.prototype.addFeature = function(){
    alert("The car is " + this.name + ", " + this.brand + " " + this.year);
}


var car = new Car("Accent", "Hyundia", "1995");

car.addFeature();
