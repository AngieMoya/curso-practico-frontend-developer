var opcion_user = prompt("Ingrese la opción con la que desea jugar");

var pc_opciones = ["piedra", "papel", "tijera"];

function obtener_jugada_pc(opciones){
    var obtener = Math.floor(Math.random()*opciones.length);
    var pc = opciones[obtener];
    return pc;
}

function jugar(pc,user){
    if (pc === user){
        console.log("empate, repita el juego");
    }
    else if (pc ==="piedra" &&  user ==="tijera"){
        console.log("¡PERDISTE!")
    }
    else if (pc ==="piedra" &&  user ==="papel"){
        console.log("¡GANASTE!")
    }
    else if (pc ==="tijera" &&  user ==="piedra"){
        console.log("¡GANASTE!")
    }
    else if (pc ==="tijera" &&  user ==="papel"){
        console.log("¡PERDISTE!")
    }
    else if (pc ==="papel" &&  user ==="piedra"){
        console.log("¡PERDISTE!")
    }
    else if (pc ==="papel" &&  user ==="tijera"){
        console.log("¡GANASTE!")
    }
}

console.log("PC", resultado_pc);
console.log("USER", opcion_user);

var resultado_pc = obtener_jugada_pc(pc_opciones);
jugar(resultado_pc,opcion_user);


