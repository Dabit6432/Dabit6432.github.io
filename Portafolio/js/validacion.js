export function valida(input) {
    const tipoDataSet = input.dataset.tipo;

    if(input.validity.valid) {
        input.parentElement.classList.remove("campo--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("campo--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDataSet, input);
    }
} 

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];

const mensajesDeError = {
    nombre: {
        valueMissing : "El campo nombre no puede estar vacío",
    },

    apellidos: {
        valueMissing: "El campo apellidos no puede estar vacío",
    },

    empresa: {
        valueMissing: "El campo empresa no puede estar vacío",
    },

    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },

    telefono: {
        valueMissing: "Este campo telefono no puede estar vacío",
        patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
    },

    ciudad: {
        valueMissing: "Este campo ciudad no puede estar vacío",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres.",
      },

    estado: {
        valueMissing: "Este campo estado no puede estar vacío",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres.",
      },

      mensaje: {
        valueMissing: "Este campo mensaje no puede estar vacío",
        patternMismatch: "El mensaje debe contener almenos 20 caracteres",
    },

};


function mostrarMensajeError(tipoDataSet, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]) {
            console.log(tipoDataSet, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDataSet][error]);
            mensaje = mensajesDeError[tipoDataSet][error];
        }
    });

    return mensaje;
}