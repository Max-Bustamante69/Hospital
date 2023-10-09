//Path: js/main.js

import Hospital from "./Hospital.js";

//define the document for node.js

const hospital = new Hospital();
let interval;
let simulacionIniciada = false;
let tiempoEsperado = 0;

const btnIniciarSimulacion = document.getElementById("iniciarSimulacion");
const btnCerrarLab = document.getElementById("cerrarLab");
const btnCerrarInf = document.getElementById("cerrarInf");
const botonDescargarTxt = document.getElementById('descargarTXT');

// Dialog elements
const lbDialog = document.querySelector("#lbDialog");
const infDialog = document.querySelector("#infDialog");

// Event listeners
btnIniciarSimulacion.addEventListener("click", () => {
  iniciarSimulacion();
  btnIniciarSimulacion.innerHTML = "Añadir Pacientes";
});

btnCerrarInf.addEventListener("click", () => {
  infDialog.close()
  clearAllTables();
});



btnCerrarLab.addEventListener("click", () => {
  // Verify if there are patients to be treated
  console.log(hospital.pacientesPendientes.length)
  if (hospital.pacientesPendientes.length !== 0) {
    reanudarIntervalo();
  }
  lbDialog.close();
});

botonDescargarTxt.addEventListener('click', () => {
  const texto = hospital.listarPacientes();
  escribirEnArchivoTexto(texto);
});

function escribirEnArchivoTexto(texto) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(texto));
  element.setAttribute('download', 'pacientes.txt');
  element.style.display = 'none';

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// Reusable function for creating table sections
function crearSeccionTabla(paciente, tableId, fieldNames) {
  const seccion = document.createElement("tr");
  fieldNames.forEach((fieldName) => {
    seccion.innerHTML += `<td>${paciente[fieldName]}</td>`;
  });
  document.querySelector(tableId).appendChild(seccion);
}

function crearSeccionTratamiento(paciente) {
  crearSeccionTabla(paciente, "#tbTratamiento", ["nombre", "nombreEnfermedad", "gravedad", "tratamiento"]);
}

function crearSeccionSalida(paciente) {
  crearSeccionTabla(paciente, "#tbSalida", ["nombre", "nombreEnfermedad", "gravedad", "salida"]);
}

function crearTablaTriage() {
  clearTable("#tbTriage");
  hospital.pacientesPendientes.forEach((paciente) => {
    crearSeccionTabla(paciente, "#tbTriage", ["nombre", "nombreEnfermedad", "gravedad", "tiempoEspera"]);
  });
}

function crearTablaLaboratorio() {
  clearTable("#tbLaboratorio");
  hospital.laboratorio.forEach((paciente) => {
    crearSeccionTabla(paciente, "#tbLaboratorio", ["nombre", "nombreEnfermedad", "gravedad", "medicamento"]);
  });
  clearInterval(interval);
  lbDialog.showModal();
}

function crearTablaInforme() {
  clearTable("#tbInformacion");
  document.querySelector("#numeroPacientes").innerHTML = hospital.pacientesAtendidos.length.toString();
  document.querySelector("#numeroPacientesAzul").innerHTML = hospital.pacientesAtendidos.filter(paciente => paciente.gravedad === "Código Azul").length.toString();
  document.querySelector("#numeroPacientesUrgente").innerHTML = hospital.pacientesAtendidos.filter(paciente => paciente.gravedad === "Estabilidad Urgente").length.toString();
  document.querySelector("#numeroPacientesNormal").innerHTML = hospital.pacientesAtendidos.filter(paciente => paciente.gravedad === "Urgencias Normales").length.toString();
  document.querySelector("#numeroPacientesLeve").innerHTML = hospital.pacientesAtendidos.filter(paciente => paciente.gravedad === "Urgencias Leves").length.toString();
  hospital.pacientesAtendidos.forEach((paciente) => {
    crearSeccionTabla(paciente, "#tbInformacion", [
      "nombre",
      "nombreEnfermedad",
      "gravedad",
      "tiempoEspera",
      "tratamiento",
      "salida",
      "uuid",
    ]);
  });
  infDialog.showModal();
  toogleSimulacion();
  console.log(hospital.listarPacientes())
}

function clearTable(tableId) {
  document.querySelector(tableId).innerHTML = "";
}

function actualizarTiempoEspera() {
  tiempoEsperado++;
  if (hospital.pacientesPendientes.length !== 0) {
    const paciente = hospital.pacientesPendientes[0];
    if (paciente.tiempoEspera > 0) {
      paciente.tiempoEspera--;
      if (paciente.tiempoEspera === 0) {
        hospital.atenderPaciente(paciente);
        paciente.tiempoEspera = tiempoEsperado;
        hospital.evaluarSalidaMedica(paciente);
        crearSeccionTratamiento(paciente);
        crearSeccionSalida(paciente);
        evaluarLaboratorio();
      }
    }
    crearTablaTriage();
  } else {
    crearTablaInforme();
    crearTablaLaboratorio();
  }
}

function evaluarLaboratorio() {
  if (hospital.laboratorio.length === 10) {
    crearTablaLaboratorio();
    hospital.laboratorio = [];
  }
}

function iniciarSimulacion() {
  if (!simulacionIniciada) {
    interval = setInterval(actualizarTiempoEspera, 100);
    toogleSimulacion();
  }
  hospital.generarPacientes(10);
}

function reanudarIntervalo() {
  interval = setInterval(actualizarTiempoEspera, 100);
}

function toogleSimulacion(){
  simulacionIniciada = !simulacionIniciada;
}

function clearAllTables(){
  btnIniciarSimulacion.innerHTML = "Iniciar Simulacion";
  clearTable("#tbTriage");
  clearTable("#tbTratamiento");
  clearTable("#tbSalida");
  clearTable("#tbLaboratorio");
  clearTable("#tbInformacion");
  hospital.pacientesAtendidos = [];
  hospital.pacientesPendientes = [];
  hospital.laboratorio = [];
  tiempoEsperado = 0;
}
