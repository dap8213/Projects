var obj1 = {
    firstName: "David",
    lastName: "Perez",
    fullName: function(){
    var name = this.firstName + " " + this.lastName;
        return name;
}
}

var printOut = function(){
    console.log(obj1.fullName());
}

printOut();