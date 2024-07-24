let piedra = 0;
let papel = 1; 
let tijera = 2; 
let jugadaH = 0;
let jugadaC = 0;
let numeroJ = prompt("Elija el nro de rondas");


for (let i = 0; i < numeroJ; i++){
jugadaC = Math.floor(Math.random()*3);
jugadaH = prompt("Elija una jugada (nro 0: piedra, nro 1: papel, nro 2: tijera")
if (jugadaH <= 2){
    if (jugadaC == jugadaH) {
        console.log("Es un empate") 
     }
     else if(jugadaC == piedra && jugadaH == papel || jugadaC == papel && jugadaH == tijera || jugadaC == tijera && jugadaH == piedra){
         console.log("GANASTE")
     }
     else {
         console.log("Gana la maquina")
     }

}
else {
    console.log("No vale varita magica ni ninguna otra opcion fuera de las entregadas")
    
   
}

}

