var person = {
    firstName: "David",
    lastName: "Perez",
    fullName: function(){
        var names = this.firstName + " " + this.lastName;
        return names;
    }
}

for (properties in person) {
    console.log(properties + ": " + person[properties]);
}