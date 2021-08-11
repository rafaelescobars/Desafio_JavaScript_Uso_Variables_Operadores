//Botones Flowchart
var flowcharts_button = document.getElementById("flowcharts_button");
var flowcharts_content = document.getElementById("flowcharts_content");
var flowcharts_operations = document.getElementById("flowcharts_operations");
var flowcharts = document.getElementById("flowcharts");
var suma_flowchart_button = document.getElementById("suma_flowchart_button");
var suma_flowchart = document.getElementById("suma_flowchart");
var resta_flowchart_button = document.getElementById("resta_flowchart_button");
var resta_flowchart = document.getElementById("resta_flowchart");
var multiplicacion_flowchart_button = document.getElementById(
  "multiplicacion_flowchart_button"
);
var multiplicacion_flowchart = document.getElementById(
  "multiplicacion_flowchart"
);
var division_flowchart_button = document.getElementById(
  "division_flowchart_button"
);
var division_flowchart = document.getElementById("division_flowchart");
var modulo_flowchart_button = document.getElementById(
  "modulo_flowchart_button"
);
var modulo_flowchart = document.getElementById("modulo_flowchart");

//Section Operations
var operations_button = document.getElementById("operations_button");
var operations_buttons = document.getElementById("operations_buttons");

var operations_section = document.getElementById("operations_section");
var resultado = document.getElementById("resultado");
var suma_operation_button = document.getElementById("suma_operation_button");
var resta_operation_button = document.getElementById("resta_operation_button");
var multiplicacion_operation_button = document.getElementById(
  "multiplicacion_operation_button"
);

//Botones Temperatura
var temperatura_button = document.getElementById("temperatura_button");
var temperatura_resultado = document.getElementById("temperatura_resultado");

//Botones Años
var dias_button = document.getElementById("dias_button");
var dias_resultado = document.getElementById("dias_resultado");

//Botones Promedio
var promedio_button = document.getElementById("promedio_button");
var promedio_resultado = document.getElementById("promedio_resultado");

//Boton Flowcharts
flowcharts_button.onclick = function () {
  if (flowcharts_content.classList.contains("d-none")) {
    flowcharts_content.classList.remove("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
    operations_section.classList.add("d-none");
    operations_buttons.classList.add("d-none");
    resultado.classList.add("d-none");
    temperatura_section.classList.add("d-none");
    temperatura_resultado.classList.add("d-none");
    dias_section.classList.add("d-none");
    dias_resultado.classList.add("d-none");
    promedio_section.classList.add("d-none");
    promedio_resultado.classList.add("d-none");
  } else {
    flowcharts_content.classList.add("d-none");
  }
};

//Botón Suma
suma_flowchart_button.onclick = function () {
  if (suma_flowchart.classList.contains("d-none")) {
    suma_flowchart.classList.remove("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
    resultado.classList.add("d-none");
  } else {
    suma_flowchart.classList.add("d-none");
  }
};

//Botón Resta
resta_flowchart_button.onclick = function () {
  if (resta_flowchart.classList.contains("d-none")) {
    resta_flowchart.classList.remove("d-none");
    suma_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  } else {
    resta_flowchart.classList.add("d-none");
  }
};

//Botón Multiplicación
multiplicacion_flowchart_button.onclick = function () {
  if (multiplicacion_flowchart.classList.contains("d-none")) {
    multiplicacion_flowchart.classList.remove("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  } else {
    multiplicacion_flowchart.classList.add("d-none");
  }
};

//Botón División
division_flowchart_button.onclick = function () {
  if (division_flowchart.classList.contains("d-none")) {
    division_flowchart.classList.remove("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  } else {
    division_flowchart.classList.add("d-none");
  }
};

//Botón Módulo
modulo_flowchart_button.onclick = function () {
  if (modulo_flowchart.classList.contains("d-none")) {
    modulo_flowchart.classList.remove("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
  } else {
    division_flowchart.classList.add("d-none");
  }
};

//Botón Operaciones con dos números
operations_button.onclick = function () {
  if (operations_section.classList.contains("d-none")) {
    operations_section.classList.remove("d-none");
    operations_buttons.classList.remove("d-none");
    resultado.classList.remove("d-none");
    flowcharts_content.classList.add("d-none");
    temperatura_section.classList.add("d-none");
    temperatura_resultado.classList.add("d-none");
    dias_section.classList.add("d-none");
    dias_resultado.classList.add("d-none");
    promedio_section.classList.add("d-none");
    promedio_resultado.classList.add("d-none");
  } else {
    operations_section.classList.add("d-none");
    operations_buttons.classList.add("d-none");
    resultado.classList.add("d-none");
  }
};

//Evitar que se presionesn teclas que no sean numeros
function numbers_only(input) {
  var regex = /[^0-9\.\,]/gi;
  input.value = input.value.replace(regex, "");
}

//Cambiar formato de números
function formato_numeros(input) {
  input.value = Intl.NumberFormat("de-DE").format(parseFloat(input.value));
}

//Validación de datos
function validacion(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (num1 > 0 && num2 > 0) {
    if (num1 != num2) {
    } else {
      resultado.innerHTML =
        "Los números ingresados son iguales. Ingrese números distintos.";
      return false;
    }
  } else {
    resultado.innerHTML =
      "Los números ingresados no son mayores que cero. Ingrese números mayores que cero.";
    return false;
  }
}

function suma(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (validacion(num1, num2) == false) {
  } else {
    var suma = num1 + num2;
    if (isNaN(suma) == false) {
      resultado.innerHTML = "La suma es " + suma;
    }
  }
}

function resta(num1, num2) {
  if (validacion(num1, num2) == false) {
  } else {
    var resta = num1 - num2;
    if (isNaN(resta) == false) {
      resultado.innerHTML = "La resta es " + resta;
    }
  }
}

function multiplicacion(num1, num2) {
  if (validacion(num1, num2) == false) {
  } else {
    var multiplicacion = num1 * num2;
    if (isNaN(multiplicacion) == false) {
      resultado.innerHTML = "La multiplicación es " + multiplicacion;
    }
  }
}

function division(num1, num2) {
  if (validacion(num1, num2) == false) {
  } else {
    var division = num1 / num2;
    if (isNaN(division) == false) {
      resultado.innerHTML = "La división es " + division;
    }
  }
}

function modulo(num1, num2) {
  if (validacion(num1, num2) == false) {
  } else {
    var modulo = num1 % num2;
    if (isNaN(modulo) == false) {
      resultado.innerHTML = "El módulo es " + modulo;
    }
  }
}

//Botón Temperatura
temperatura_button.onclick = function () {
  if (temperatura_section.classList.contains("d-none")) {
    temperatura_section.classList.remove("d-none");
    temperatura_resultado.classList.remove("d-none");
    flowcharts_content.classList.add("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
    operations_section.classList.add("d-none");
    operations_buttons.classList.add("d-none");
    resultado.classList.add("d-none");
    dias_section.classList.add("d-none");
    dias_resultado.classList.add("d-none");
    promedio_section.classList.add("d-none");
    promedio_resultado.classList.add("d-none");
  } else {
    temperatura_section.classList.add("d-none");
    temperatura_resultado.classList.add("d-none");
  }
};

function aceptar_temperatura_button(temperatura) {
  if (temperatura != "") {
    temperatura = parseFloat(temperatura);
    temperatura_Kelvin = temperatura + 273.15;
    temperatura_Fahrenheit = (temperatura * 9) / 5 + 32;
    temperatura_resultado.innerHTML =
      temperatura +
      "°C son equivalentes a " +
      temperatura_Kelvin +
      "°K y a " +
      temperatura_Fahrenheit +
      "°F";
    temperatura_resultado.classList.remove("d-none");
  } else {
    temperatura_resultado.classList.add("d-none");
  }
}

//Boton Dias
dias_button.onclick = function () {
  if (dias_section.classList.contains("d-none")) {
    dias_section.classList.remove("d-none");
    dias_resultado.classList.remove("d-none");
    temperatura_section.classList.add("d-none");
    temperatura_resultado.classList.add("d-none");
    flowcharts_content.classList.add("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
    operations_section.classList.add("d-none");
    operations_buttons.classList.add("d-none");
    resultado.classList.add("d-none");
    promedio_section.classList.add("d-none");
    promedio_resultado.classList.add("d-none");
  } else {
    dias_section.classList.add("d-none");
    dias_resultado.classList.add("d-none");
  }
};

function aceptar_dias_button(dias) {
  if (dias != "") {
    dias = parseFloat(dias);
    if (dias / 365 >= 1) {
      años = Math.floor(dias / 365);
      dias_despues_años = dias % 365;
      if (dias_despues_años / 7 >= 1) {
        semanas = Math.floor(dias_despues_años / 7);
        dias_despues_semanas = dias_despues_años % 7;
        dias_resultado.innerHTML =
          dias +
          " dias equivalen a " +
          años +
          " años, " +
          semanas +
          " semanas y " +
          dias_despues_semanas +
          " dias";
      } else {
        dias_resultado.innerHTML =
          dias +
          " dias equivalen a " +
          años +
          " años, " +
          dias_despues_años +
          " dias";
      }
    } else {
      if (dias / 7 >= 1) {
        semanas = Math.floor(dias / 7);
        dias_despues_semanas = dias % 7;
        dias_resultado.innerHTML =
          dias +
          " dias equivalen a " +
          semanas +
          " semanas y " +
          dias_despues_semanas +
          " dias";
      } else {
        dias_resultado.innerHTML = dias + " dias no alcanzan a ser una semana";
      }
    }
  }
}

//Promedio
promedio_button.onclick = function () {
  if (promedio_section.classList.contains("d-none")) {
    promedio_section.classList.remove("d-none");
    promedio_resultado.classList.remove("d-none");
    dias_section.classList.add("d-none");
    dias_resultado.classList.add("d-none");
    temperatura_section.classList.add("d-none");
    temperatura_resultado.classList.add("d-none");
    flowcharts_content.classList.add("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
    operations_section.classList.add("d-none");
    operations_buttons.classList.add("d-none");
    resultado.classList.add("d-none");
  } else {
    promedio_section.classList.add("d-none");
    promedio_resultado.classList.add("d-none");
  }
};

function aceptar_promedio_button(n1, n2, n3, n4, n5) {
  if (n1 != "" && n2 != "" && n3 != "" && n4 != "" && n5 != "") {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    n4 = parseFloat(n4);
    n5 = parseFloat(n5);
    var suma = n1 + n2 + n3 + n4 + n5;
    var promedio = suma / 5;
    promedio_resultado.innerHTML =
      "La suma de los números es " + suma + " y su promedio es " + promedio;
  } else {
    promedio_resultado.innerHTML = "Ingrese los cinco números";
  }
}
