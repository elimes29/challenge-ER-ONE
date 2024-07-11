function limpiaImput() {
  document.querySelector("#valorUsuario").value = "";
  return;
}

//funcion que realiza la encriptación
function encripta() {
  //tomamos el valor del texto de entrada
  let texto = document.getElementById("input_entrada").value;
  //creamos arreglo donde guardaremos los cambios encriptados
  let textoSalida = [];
  for (const letra of texto) {
    switch (letra) {
      case "a":
        textoSalida.push("ai");
        break;
      case "e":
        textoSalida.push("enter");
        break;
      case "i":
        textoSalida.push("imes");
        break;
      case "o":
        textoSalida.push("ober");
        break;
      case "u":
        textoSalida.push("ufat");
        break;
      default:
        textoSalida.push(letra);
        break;
    }
  }

  //convertimos arreglo a texto
  let textoSalidaCadena = textoSalida.join("");

  //Mostramos la salida encriptada en el área indicada
  let salida = document.getElementById("input_salida");
  salida.value = textoSalidaCadena;

  //eliminamos el texto de entrada
  document.getElementById("input_entrada").value = "";

  /*activarDiv();*/
}

//funcion que realiza la desencriptación
function desencripta() {
  //tomamos el valor del texto de entrada
  let texto = document.getElementById("input_entrada").value;
  //convertimos el texto a arreglo
  let textoEntrada = texto.split("");

  //creamos el arrelo de la salida
  let textoSalida = [];

  //recorremos el arreglo

  for (let index = 0; index < textoEntrada.length; index++) {
    const letra = textoEntrada[index];

    switch (letra) {
      case "a":
        textoSalida.push("a");
        index = index + 1;
        break;
      case "e":
        textoSalida.push("e");
        index = index + 4;
        break;
      case "i":
        textoSalida.push("i");
        index = index + 3;
        break;
      case "o":
        textoSalida.push("o");
        index = index + 3;
        break;
      case "u":
        textoSalida.push("u");
        index = index + 3;
        break;
      default:
        textoSalida.push(letra);
        break;
    }
  }

  //convertimos arreglo a texto
  let textoSalidaCadena = textoSalida.join("");

  let salida = document.getElementById("input_salida");
  salida.value = textoSalidaCadena;
}

function seleccionarTexto() {
  var input = document.getElementById("input_salida");
  input.select();
}

/*
function toggleDivs() {
  const triggerInput = document.getElementById("input_entrada");
  const div1 = document.getElementById("inicial");
  const div2 = document.getElementById("resto");

  if (triggerInput.value.trim() === "") {
    div1.style.display = "block";
    div2.style.display = "none";
  } else {
    div1.style.display = "none";
    div2.style.display = "block";
  }
}

// Inicializa el estado al cargar la página
toggleDivs();
*/