const input = require("prompt-sync")({ sigint: true });

let operacion = 0;
let opA = 0;
let opB = 0;
let tiempo = 30000;
let miliS;

let jug1;
let jug2;

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function suma(a, b) {
  let tempIn = new Date();
  console.log(a + "+" + b);
  let res = input("¿cuanto es?");
  let tempFin = new Date();
  miliS = tempFin - tempIn;

  return Number(res) === a + b;
}

function resta(a, b) {
    let tempIn = new Date();
    console.log(a + "-" + b);
    let res = input("¿cuanto es?");
    let tempFin = new Date();
    miliS = tempFin - tempIn;
  
    return Number(res) === a - b;
}
function multiplicacion(a, b) {
    let tempIn = new Date();
    console.log(a + "*" + b);
    let res = input("¿cuanto es?");
    let tempFin = new Date();
    miliS = tempFin - tempIn;
  
    return Number(res) === a * b;
}

function division(a, b) {
    let tempIn = new Date();
    console.log(a + "/" + b);
    let res = input("¿cuanto es?");
    let tempFin = new Date();
    miliS = tempFin - tempIn;
  
    return Number(res) === a/b;
}

function juego() {
  console.log("JUEGO DE CALCULOS");

  let puntos=0
  let fin = false;

  for (let i = 0; i < 1000 && !fin; i++) {
    operacion = getRandomInt(3);
    opA = getRandomInt(10);
    opB = getRandomInt(10);
    switch (operacion) {
      case 0:
        if (suma(opA, opB)) {
          if (miliS > tiempo) {
            return console.log("tiempo agotado");
            /*fin = true;*/
          }
          puntos++;
          console.log("bien");
        } else {
          console.log("mal");
          fin = true;
        }
        break;
      case 1:
        
      if (resta(opA, opB)) {
        if (miliS > tiempo) {
          return console.log("tiempo agotado\nPuntos: " + puntos);
          /*fin = true;*/
        }
        puntos++;
        console.log("bien");
      } else {
        console.log("mal");
        fin = true;
      }
        break;
      case 2:
       
      if (multiplicacion(opA, opB)) {
        if (miliS > tiempo) {
          return console.log("tiempo agotado\nPuntos: " + puntos);
          /*fin = true;*/
        }
        puntos++;
        console.log("bien");
      } else {
        console.log("mal");
        fin = true;
      }
        break;
        case 3:
          if(opB===0){
            opB++;
          }
            opA=opB*getRandomInt(10);

            if (division(opA, opB)) {
                if (miliS > tiempo) {
                  console.log("tiempo agotado");
                  /*fin = true;*/
                }
                puntos++;
                console.log("bien");
              } else {
                console.log("mal");
                fin = true;
              }
            break;

      default:
        break;
    }
  }



  return console.log("Puntos: " + puntos);
}




juego();
