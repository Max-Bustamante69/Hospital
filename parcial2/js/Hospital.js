// Importa la clase Paciente y la lista de enfermedades desde otros archivos.
import Paciente from "./Paciente.js";
import listaEnfermedades from "./Enfermedades.js";

// Define la clase Hospital.
class Hospital {

  // Define listas constantes de SALIDAS y MEDICAMENTOS.
  SALIDAS = ["Alta", "Alta con medicamento", "Alta Voluntaria", "Remitido para Hospitalización", "Remitido a Médico Especialista", "Morgue"];
  MEDICAMENTOS = ["Omeprazol", "Paracetamol", "Ibuprofeno", "Aspirina", "Diclofenaco", "Amoxicilina", "Ciprofloxacino", "Dexametasona", "Loratadina", "Metformina", "Naproxeno", "Ranitidina", "Salbutamol", "Sulfametoxazol", "Trimetoprima", "Clonazepam", "Diazepam", "Fluoxetina", "Lorazepam", "Metronidazol", "Pantoprazol", "Prednisona", "Sertralina", "Tamsulosina", "Tramadol", "Venlafaxina", "Alprazolam", "Atorvastatina", "Cetirizina", "Oxaprost", "Doxycycline", "Glimepiride", "Finasteride", "Ceftin", "Trazodone", "Topiramate", "Nortriptyline", "Mometasone", "Levetiracetam", "Lansoprazole", "Fexofenadine", "Desvenlafaxine", "Carbamazepine", "Budesonide", "Bupropion", "Benazepril", "Aripiprazole", "Amphetamine", "Alendronate", "Adefovir", "Zidovudine", "Zileuton", "Yohimbine", "Xenical", "Voriconazole", "Verapamil", "Valacyclovir", "Valsartan", "Vardenafil", "Tacrolimus", "Sulfadiazine", "Sparfloxacin", "Ropinirole", "Risedronate", "Quetiapine", "Piroxicam", "Pindolol", "Pemetrexed", "Paclitaxel", "Oxaprozin", "Ondansetron", "Olanzapine", "Ofloxacin", "Omeprazole", "Nortriptyline", "Mirtazapine", "Methocarbamol", "Medroxyprogesterone", "Meclizine", "Mebendazole", "Mefenamic acid"];// Lista de medicamentos (abreviada aquí).

  // Constructor de la clase Hospital.
  constructor() {
    this.pacientesPendientes = []; // Lista de pacientes pendientes.
    this.pacientesAtendidos = []; // Lista de pacientes atendidos.
    this.laboratorio = []; // Lista de pacientes en el laboratorio.
  }

  // Agregar un paciente a la lista de pacientes pendientes según la gravedad de la enfermedad.
  agregarPaciente(nombre, enfermedad) {
    let paciente = new Paciente(nombre, enfermedad, enfermedad.tiempoEspera);
    if (this.pacientesPendientes.length === 0) {
      this.pacientesPendientes.push(paciente);
    } else {
      for (let i = 0; i < this.pacientesPendientes.length; i++) {
        if (paciente.enfermedad.valor > this.pacientesPendientes[i].enfermedad.valor) {
          this.pacientesPendientes.splice(i, 0, paciente);
          return;
        }
      }
      this.pacientesPendientes.push(paciente);
    }
  }

  // Genera un nombre aleatorio combinando un nombre y un apellido.
  generateRandomName() {
    // Listas de nombres y apellidos aleatorios (abreviados aquí).
    const firstName = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Hannah", "Ivy", "Jack", "Katherine", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Riley", "Sophia", "Thomas", "Uma", "Victoria", "William", "Xander", "Yasmine", "Zachary", "Abigail", "Benjamin", "Chloe", "Daniel", "Elizabeth", "Faith", "Gabriel", "Harper", "Isabella", "Jacob", "Kennedy", "Lily", "Mason", "Natalie", "Owen", "Piper", "Quinn", "Ryan", "Samuel", "Trinity", "Violet", "Wyatt", "Xavier", "Yvonne", "Zoe", "Elijah", "Ava", "Michael", "Sofia", "William", "Emily", "James", "Sophia", "Benjamin", "Olivia", "Lucas", "Amelia", "Henry", "Evelyn", "Daniel", "Abigail", "Matthew", "Charlotte", "David", "Harper", "Andrew", "Scarlett", "Joseph", "Madison", "Jackson", "Lily", "Samuel", "Grace", "John", "Avery", "Robert", "Ella", "Michael", "Aria", "Ethan", "Riley", "Alexander", "Chloe", "Nicholas", "Aubrey", "Matthew", "Layla", "William", "Aaliyah", "James", "Nora", "John", "Zoe", "David", "Aurora", "Joseph", "Luna", "Daniel", "Lillian", "Noah", "Addison", "Christopher", "Camila", "Elijah", "Natalia"];
    const lastName = ["Smith", "Johnson", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Marshall", "Reyes", "Owens", "Spencer", "Fisher", "Jordan", "Ramos", "Fleming", "Fields", "Sandoval", "Snyder", "Stone", "Bradley", "Hawkins", "Dunn", "Gardner", "Stephens", "Payne", "Pierce", "Berry", "Matthews", "Arnold", "Wagner"];


    // Selecciona un nombre y un apellido aleatorio.
    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];

    return `${randomFirstName} ${randomLastName}`;
  }

  // Genera pacientes aleatorios y los agrega a la lista de pacientes pendientes.
  generarPacientes(cantidad) {
    for (let i = 0; i < cantidad; i++) {
      let nombre = this.generateRandomName();
      let enfermedad = listaEnfermedades[Math.floor(Math.random() * listaEnfermedades.length)];
      this.agregarPaciente(nombre, enfermedad);
    }
  }

  // Evalúa la salida médica del paciente y lo coloca en el laboratorio si es necesario.
  evaluarSalidaMedica(paciente) {
    if (paciente.salida === "Alta con medicamento") {
      paciente.medicamento = this.generarMedicamento();
      this.laboratorio.unshift(paciente);
    }
  }

  // Genera un medicamento aleatorio.
  generarMedicamento() {
    return this.MEDICAMENTOS[Math.floor(Math.random() * this.MEDICAMENTOS.length)];
  }

  // Atiende al paciente, moviéndolo de pendiente a atendido.
  atenderPaciente() {
    let paciente = this.pacientesPendientes.shift();
    paciente.salida = this.SALIDAS[Math.floor(Math.random() * this.SALIDAS.length)];
    this.pacientesAtendidos.push(paciente);
  }

  // Lista y retorna información sobre los pacientes atendidos.
  listarPacientes() {
    let informe = ""
    this.pacientesAtendidos.forEach(paciente => {
      informe += paciente.imprimirPaciente() + "\n";
    });
    return informe;
  }
}

// Exporta la clase Hospital para su uso en otros archivos.
export default Hospital;
