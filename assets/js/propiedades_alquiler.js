import { propiedadesAlquiler } from "./array.js";
import { generarTemplate } from "./template.js";

const mostrarTemplate = (HTMLElement, propiedades) => {
  let resultado = "";

  for (const propiedad of propiedades) {
    resultado += generarTemplate(propiedad);
  }
  HTMLElement.innerHTML = resultado;
};
const pAlquiler = document.querySelector("#alquilar");
mostrarTemplate(pAlquiler, propiedadesAlquiler);
