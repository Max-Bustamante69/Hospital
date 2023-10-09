// Archivo: js/Paciente.js
// Objetivo del archivo: Crear la clase Paciente con sus atributos y métodos correspondientes

class Paciente {
  // Constructor de la clase Paciente
  constructor(nombre, enfermedad) {
    // Atributos de la clase
    this.nombre = nombre;                              // Nombre del paciente
    this.enfermedad = enfermedad;                      // Enfermedad que padece el paciente
    this.nombreEnfermedad = enfermedad.nombre;         // Nombre de la enfermedad
    this.tiempoEspera = enfermedad.tiempoEspera;       // Tiempo de espera del paciente
    this.tratamiento = enfermedad.atencionMedica;       // Tratamiento médico que recibe el paciente
    this.gravedad = enfermedad.triage;                 // Gravedad de la enfermedad según el triage
    this.uuid = this.generateUUID();                    // Identificador único del paciente (UUID)
    this.salida = null;                                // Estado de salida del paciente (inicialmente nulo)
  }

  // Método para imprimir la información del paciente
  imprimirPaciente() {
    return `---------------------------------------------------------- \n Nombre: ${this.nombre} - Enfermedad: ${this.enfermedad.nombre} - Triage: ${this.enfermedad.triage} - Tiempo de espera: ${this.enfermedad.tiempoEspera} - Atención médica: ${this.enfermedad.atencionMedica} - Salida: ${this.enfermedad.salida} - Identificador: ${this.uuid}`;
  }

  // Método para generar un UUID (Identificador Único Universal) para el paciente
  generateUUID() {
    const crypto = window.crypto || window.msCrypto;

    if (crypto && crypto.getRandomValues) {
      const buffer = new Uint16Array(8);
      crypto.getRandomValues(buffer);

      // Establecer los bits de versión y variante
      buffer[3] = (buffer[3] & 0x0fff) | 0x4000;
      buffer[4] = (buffer[4] & 0x3fff) | 0x8000;

      // Formatear el UUID
      return `${this.pad4(buffer[0])}${this.pad4(buffer[1])}-${this.pad4(buffer[2])}-${this.pad4(buffer[3])}-${this.pad4(buffer[4])}-${this.pad4(buffer[5])}${this.pad4(buffer[6])}${this.pad4(buffer[7])}`;
    } else {
      console.error('crypto.getRandomValues() no es compatible');
      return null;
    }
  }

  // Método para rellenar con ceros a la izquierda hasta alcanzar 4 dígitos
  pad4(num) {
    let hex = num.toString(16);
    while (hex.length < 4) {
      hex = `0${hex}`;
    }
    return hex;
  }
}

// Exportar la clase Paciente para su uso en otros archivos
export default Paciente;
