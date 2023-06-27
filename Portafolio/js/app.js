import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input");
const text_areas = document.querySelectorAll("textarea");

inputs.forEach( (input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

text_areas.forEach( (input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});