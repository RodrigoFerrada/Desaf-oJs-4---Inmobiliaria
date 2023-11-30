import { propiedadesAlquiler } from "./array.js";
import { propiedadesVenta } from "./array.js";
import { generarTemplate } from "./template.js";

const mostrarTemplate = (HTMLElement, propiedades) => {
  let contador = 0;
  let resultado = "";

  for (const propiedad of propiedades) {
    if (contador < 3) {
      resultado += generarTemplate(propiedad);
      contador++;
    } else {
      break;
    }
  }
  HTMLElement.innerHTML = resultado;
};
const pVenta = document.querySelector("#venta");
mostrarTemplate(pVenta, propiedadesVenta);
const pAlquiler = document.querySelector("#alquilar");
mostrarTemplate(pAlquiler, propiedadesAlquiler);
