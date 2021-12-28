var miembros = ["Erik", "Angie", "Maximilino", "Luffy"];

function saludarFamilia(miembro){
    console.log(`Hola, ${miembro}`);
}

for (var i = 0; i < miembros.length; i++){
    saludarFamilia(miembros[i]);
}

//otra forma de usar el loops for

for (var miembro of miembros){
    saludarFamilia(miembro);
}