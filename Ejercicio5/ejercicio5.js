
do {
  var num1 = parseInt(prompt("Ingrese el numero 1."));
  var num2 = parseInt(prompt("Ingrese el numero 2."));


  var opcion = prompt(
    "Que operacion desea hacer? \n R/Resta \n S/Suma \n M/Multiplicación \n D/Division."
  ).toUpperCase();

  switch (opcion) {
    case "R":
      alert(num1 - num2);
      break;
    case "S":
      alert(num1 + num2);
      break;

    case "M":
      alert(num1 * num2);
      break;

    case "D":
      alert(num1 / num2);
      break;

    default:
      alert("FLACO CUALQUIER COSA METISTE!!!");
      break;
  }

  var condition = prompt("Desea realizar otra operacion? S/Salir").toUpperCase();



} while (condition != "S");


window.open("https://media.tenor.com/9eFnSCwAiXQAAAAC/gracias-vuelvan-prontos.gif", "_self" );