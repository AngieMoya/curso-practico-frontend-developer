var articulos = [
    {nombre: "Bicicleta", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

// metodos para recorrer arrays
// filter ayuda a filtrar, valida si algo es verdadero o falso y lo ingresa en un nuevo array

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

// map ayuda a mapear, trae los nombre de los objetos que se encuntran en el array

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

//find busca un objeto en el array

var buscarArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

// forEach te devuelve valores de los objetos del array segun lo que indiques 
//sin mutar ni crear un nuevo array.

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// some valida si algo es verdadero o falso.

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});