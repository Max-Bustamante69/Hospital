# Simulación de Hospital

Una simulación simple de un sistema de hospital con interfaz gráfica.

## Tabla de Contenidos

- [Introducción](#introducción)
- [Clases y Funcionalidades](#clases-y-funcionalidades)
  - [Hospital](#hospital)
  - [Paciente](#paciente)
  - [Enfermedades](#enfermedades)
- [Instalación](#instalación)
- [Uso](#uso)
- [Ejemplos](#ejemplos)
- [Documentación Adicional](#documentación-adicional)

## Introducción

Este proyecto de simulación de hospital se creó para simular el funcionamiento de un hospital ficticio. La simulación tiene como objetivo principal gestionar pacientes, asignar triajes, proporcionar atención médica y realizar un seguimiento de los pacientes. A continuación, se detallan los aspectos más relevantes del proyecto.

## Clases y Funcionalidades

### Hospital

La clase `Hospital` es el núcleo de la simulación y tiene las siguientes funcionalidades principales:

- **Agregar Pacientes**: Permite agregar pacientes al hospital, asignando automáticamente su posición en la lista de espera según su gravedad.
- **Generar Pacientes Aleatorios**: Crea pacientes de manera aleatoria, generando nombres y enfermedades al azar para simular la llegada de nuevos pacientes al hospital.
- **Atender Pacientes**: Toma al paciente de mayor gravedad de la lista de espera y lo traslada a la lista de pacientes atendidos, asignando un resultado de tratamiento aleatorio.
- **Evaluar Salida Médica**: Evalúa si un paciente necesita medicamentos y lo envía al laboratorio para su atención adicional.
- **Generar Informe de Pacientes Atendidos**: Crea un informe con la información de los pacientes atendidos.

### Paciente

La clase `Paciente` representa a los pacientes del hospital. Cada paciente tiene atributos como nombre, enfermedad, gravedad, tiempo de espera, tratamiento y estado de salida. Además, se genera un identificador único para cada paciente.

### Enfermedades

Las enfermedades están representadas en una lista de objetos con atributos como nombre, gravedad, atención médica necesaria y tiempo de espera. Estos objetos se utilizan para asignar enfermedades aleatorias a los pacientes.

## Instalación

Para ejecutar esta simulación, asegúrate de tener instalado Node.js en tu sistema. No se requieren otras dependencias adicionales. Sigue estos pasos:

1. Clona o descarga este repositorio en tu máquina local.

2. Abre una terminal y navega hasta el directorio del proyecto.

3. Ejecuta la simulación con el siguiente comando:

   ```sh
   node main.js
   ```

## Uso

La interfaz de usuario de la simulación consta de un campo de texto y dos botones:

- **Iniciar Simulación**: Ejecuta la simulación con pacientes generados automáticamente. Muestra los registros de pacientes en la consola y el estado final del hospital.
- **Añadir Pacientes**: Se añaden mas pacientes a la simulacion actual, solo podra tener esta opcion siempre y cuando hayan pacientes pendientes en la tabla de triage.

Para una mejor visualización de la animación, reduce el número de pacientes para que quepa en la pantalla sin necesidad de desplazarte.

## Ejemplos

Puedes realizar peticiones automaticas para ver la organizacion de los pacientes, como siempre las gravedades superiores son las primeras en ser atendidas, y para alargar esta organizacion y ver en funcionamiento el laboratorio pordras añadir mas paientes repetidamente.

## Documentación Adicional

Para obtener información detallada sobre los métodos y clases utilizadas en este proyecto, puedes consultar el siguiente [documento de Google Docs](https://docs.google.com/document/d/1on0gxWtfyRfsFA7rcnNgrG_LQrkHno581fevUHhDlik/edit?usp=sharing). Esta documentación incluye explicaciones detalladas de cómo funciona cada parte del código.

**Nota:** Si tienes documentación más extensa, podrías considerar utilizar herramientas de generación de documentación como Sphinx para crear documentación detallada a partir de tus comentarios en el código.
