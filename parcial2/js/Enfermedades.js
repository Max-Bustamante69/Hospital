//path js/Enfermedades.js
//Objetivo del archivo: Crear una lista de enfermedades con sus respectivos valores, triage, atencion medica y tiempo de espera

const enfermedades = [
  {nombre: "Gripe", gravedad: "leve"},
  {nombre: "Resfriado", gravedad: "leve"},
  {nombre: "Dolor de cabeza", gravedad: "leve"},
  {nombre: "Alergia leve", gravedad: "leve"},
  {nombre: "Insomnio", gravedad: "leve"},
  {nombre: "Dolor de garganta", gravedad: "leve"},
  {nombre: "Dolor de oído", gravedad: "leve"},
  {nombre: "Dolor de estómago", gravedad: "leve"},
  {nombre: "Dolor de espalda", gravedad: "leve"},
  {nombre: "Dolor de muelas", gravedad: "leve"},
  {nombre: "Dolor de ojos", gravedad: "leve"},
  {nombre: "Dolor de articulaciones", gravedad: "leve"},
  {nombre: "Dolor de músculos", gravedad: "leve"},
  {nombre: "Dolor de huesos", gravedad: "leve"},
  {nombre: "Dolor de pecho", gravedad: "leve"},
  {nombre: "Dolor de garganta", gravedad: "leve"},

  {nombre: "Neumonía", gravedad: "normal"},
  {nombre: "Bronquitis", gravedad: "normal"},
  {nombre: "Hipertensión", gravedad: "normal"},
  {nombre: "Diabetes", gravedad: "normal"},
  {nombre: "Dolor abdominal", gravedad: "normal"},
  {nombre: "Alergia moderada", gravedad: "normal"},
  {nombre: "Alergia severa", gravedad: "normal"},
  {nombre: "Dolor de cabeza severo", gravedad: "normal"},
  {nombre: "Dolor de estómago severo", gravedad: "normal"},
  {nombre: "Dolor de espalda severo", gravedad: "normal"},
  {nombre: "Dolor de muelas severo", gravedad: "normal"},
  {nombre: "Dolor de ojos severo", gravedad: "normal"},
  {nombre: "Dolor de articulaciones severo", gravedad: "normal"},
  {nombre: "Dolor de músculos severo", gravedad: "normal"},
  {nombre: "Dolor de huesos severo", gravedad: "normal"},
  {nombre: "Dolor de pecho severo", gravedad: "normal"},
  {nombre: "Dolor de garganta severo", gravedad: "normal"},
  {nombre: "Dolor de oído severo", gravedad: "normal"},


  {nombre: "Infarto de miocardio", gravedad: "urgente"},
  {nombre: "Accidente cerebrovascular", gravedad: "urgente"},
  {nombre: "Ataque al corazón", gravedad: "urgente"},
  {nombre: "Trauma grave", gravedad: "urgente"},
  {nombre: "Intoxicación severa", gravedad: "urgente"},
  {nombre: "Dolor de cabeza muy severo", gravedad: "urgente"},
  {nombre: "Dolor de estómago muy severo", gravedad: "urgente"},
  {nombre: "Dolor de espalda muy severo", gravedad: "urgente"},
  {nombre: "Dolor de muelas muy severo", gravedad: "urgente"},
  {nombre: "Dolor de ojos muy severo", gravedad: "urgente"},
  {nombre: "Dolor de articulaciones muy severo", gravedad: "urgente"},
  {nombre: "Dolor de músculos muy severo", gravedad: "urgente"},
  {nombre: "Dolor de huesos muy severo", gravedad: "urgente"},
  {nombre: "Dolor de pecho muy severo", gravedad: "urgente"},
  {nombre: "Dolor de garganta muy severo", gravedad: "urgente"},
  {nombre: "Dolor de oído muy severo", gravedad: "urgente"},


  {nombre: "Paro cardíaco", gravedad: "Azul"},
  {nombre: "Paro respiratorio", gravedad: "Azul"},
  {nombre: "Estado de coma", gravedad: "Azul"},
  {nombre: "Lesión grave en la cabeza", gravedad: "Azul"},
  {nombre: "Herida profunda con hemorragia", gravedad: "Azul"},
  {nombre: "Quemaduras graves", gravedad: "Azul"},
  {nombre: "Trauma craneoencefálico", gravedad: "Azul"},
  {nombre: "Trauma raquimedular", gravedad: "Azul"},
  {nombre: "Trauma torácico", gravedad: "Azul"},
  {nombre: "Trauma abdominal", gravedad: "Azul"},
  {nombre: "Trauma pélvico", gravedad: "Azul"},
  {nombre: "Trauma de extremidades", gravedad: "Azul"},
  {nombre: "Trauma de tejidos blandos", gravedad: "Azul"},
  {nombre: "Trauma de tejidos duros", gravedad: "Azul"}


];




function agregarFactores(enfermedad) {
  switch (enfermedad.gravedad) {
    case "leve":
      enfermedad.valor = 1;
      enfermedad.triage = "Urgencias Leves";
      enfermedad.atencionMedica = ["examenes médicos"];
      enfermedad.tiempoEspera = 15;

      break;
    case "normal":
      enfermedad.valor = 2;
      enfermedad.triage = "Urgencias Normales";
      enfermedad.atencionMedica = ["examenes médicos", "pruebas diagnósticas", "procedimientos curativos"];
      enfermedad.tiempoEspera = 10;
      break;
    case "urgente":
      enfermedad.valor = 3;
      enfermedad.triage = "Estabilidad Urgente";
      enfermedad.atencionMedica = ["examenes médicos", "pruebas diagnósticas", "procedimientos curativos", "estabilización de dolencias"];
      enfermedad.tiempoEspera = 5;
      break;
    case "Azul":
      enfermedad.valor = 4;
      enfermedad.triage = "Código Azul";
      enfermedad.atencionMedica = ["examenes médicos", "pruebas diagnósticas", "procedimientos curativos", "estabilización de dolencias", "monitoreo de signos vitales"];
      enfermedad.tiempoEspera = 1;
      break;
    default:
      enfermedad.triage = "Sin clasificación";
      enfermedad.atencionMedica = [];
      enfermedad.tiempoEspera = "Sin definir";
      enfermedad.tiempoEspera = "Sin definir";
      break;
  }

}

const listaEnfermedades = enfermedades.map(enfermedad => {
    agregarFactores(enfermedad);
    return enfermedad;

  }
);

export default listaEnfermedades;
