function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//operador new genera una nueva instancia de la funcion constructora

var autoNuevo1 = new auto("Tesla", "Modelo 3", 2020);
var autoNuevo2 = new auto("Tesla", "Modelo x", 2018);
var autoNuevo3 = new auto("Toyota", "Modelo", 2020);

console.log(autoNuevo1)