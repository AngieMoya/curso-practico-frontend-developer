// creando objetos

var miAuto = { 
    marca: "Toyota",
    modelo:"Carolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

//accediendo a los valores del objeto

console.log(miAuto.marca)

//this es una variable que hace referencia al objeto padre.
//llamando a la funcion del objeto

miAuto.detalleDelAuto();