function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var autos = [];

for (var cont = 0; cont < 30; cont++) {
  var nuevoAuto = new auto(
    prompt("Ingrese marca"),
    prompt("Ingrese modelo"),
    prompt("Ingrese año")
  );
  autos.push(nuevoAuto);
}

console.log(autos);
