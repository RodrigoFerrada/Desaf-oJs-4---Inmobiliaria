import { propiedadesVenta } from "./data/array.js";
import { generarTemplate } from "./data/template.js";

const mostrarTemplate = (HTMLElement, propiedades) => {
  let resultado = "";

  for (const propiedad of propiedades) {
    resultado += generarTemplate(propiedad);
  }
  HTMLElement.innerHTML = resultado;
};
const pVenta = document.querySelector("#venta");
mostrarTemplate(pVenta, propiedadesVenta);
