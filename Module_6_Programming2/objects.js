//https://codepen.io/miguelacruz/pen/GRmemLE

//Car object
let car = {
  carMake : "Lexus",
  carModel : "LX",
  get cModel(){
    return this.carModel;
  },
  set cModel(cModel) {
    this.carModel = cModel;
  },
  info : function(){alert("Car Make: " + this.carMake + "\nCar Model: " + this.carModel)},
};

car.info();
car.cModel = "LX 570";
car.info();

//Team(Sports) object
let teamSport = {
  sportType : "Tennis",
  teamName : "New York Empire",
  get tName(){
    return this.teamName;
  },
  set tName(tName) {
    this.teamName = tName;
  },
  info : function(){alert("Sport Name: " + this.sportType + "\nTeam Name: " + this.teamName)},
};

teamSport.info();
teamSport.tName = "San Diego Aviators";
teamSport.info();

//Animal object
let animal = {
  animalType : "Reptile",
  animalName : "Cobra",
  get aName(){
    return this.animalName;
  },
  set aName(aName) {
    this.animalName = aName;
  },
  info : function(){alert("Animal Type: " + this.animalType + "\nAnimal Name: " + this.animalName)},
};

animal.info();
animal.aName = "Alligator";
animal.info();
