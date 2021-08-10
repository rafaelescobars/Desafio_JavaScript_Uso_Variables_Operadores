var flowcharts_button = document.getElementById("flowcharts_button");
var flowcharts_content = document.getElementById("flowcharts_content");
var flowcharts_operations = document.getElementById("flowcharts_operations");
var flowcharts = document.getElementById("flowcharts");
var suma_button = document.getElementById("suma_button");
var suma_flowchart = document.getElementById("suma_flowchart");
var resta_button = document.getElementById("resta_button");
var resta_flowchart = document.getElementById("resta_flowchart");
var multiplicacion_button = document.getElementById("multiplicacion_button");
var multiplicacion_flowchart = document.getElementById(
  "multiplicacion_flowchart"
);
var division_button = document.getElementById("division_button");
var division_flowchart = document.getElementById("division_flowchart");
var modulo_button = document.getElementById("modulo_button");
var modulo_flowchart = document.getElementById("modulo_flowchart");

flowcharts_button.onclick = function () {
  if (flowcharts_content.classList.contains("d-none")) {
    flowcharts_content.classList.remove("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  } else {
    flowcharts_content.classList.add("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  }
};

suma_button.onclick = function () {
  if (suma_flowchart.classList.contains("d-none")) {
    suma_flowchart.classList.remove("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  } else {
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  }
};

resta_button.onclick = function () {
  if (resta_flowchart.classList.contains("d-none")) {
    resta_flowchart.classList.remove("d-none");
    suma_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  } else {
    resta_flowchart.classList.add("d-none");
    suma_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  }
};

multiplicacion_button.onclick = function () {
  if (multiplicacion_flowchart.classList.contains("d-none")) {
    multiplicacion_flowchart.classList.remove("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  } else {
    multiplicacion_flowchart.classList.add("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  }
};

division_button.onclick = function () {
  if (division_flowchart.classList.contains("d-none")) {
    division_flowchart.classList.remove("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  } else {
    division_flowchart.classList.add("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  }
};

modulo_button.onclick = function () {
  if (modulo_flowchart.classList.contains("d-none")) {
    modulo_flowchart.classList.remove("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    division_flowchart.classList.add("d-none");
  } else {
    division_flowchart.classList.add("d-none");
    suma_flowchart.classList.add("d-none");
    resta_flowchart.classList.add("d-none");
    multiplicacion_flowchart.classList.add("d-none");
    modulo_flowchart.classList.add("d-none");
  }
};
