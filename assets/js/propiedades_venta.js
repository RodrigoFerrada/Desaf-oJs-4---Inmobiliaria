//Array de Objects Propiedades en Venta.
const propiedadesVenta = [
  {
    id: 1,
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg", //Ingresa aqui la URL de la imagen,
    descripcion: `Este apartamento de lujo está ubicado en una exclusiva zona residencial`,
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 Habitaciones",
    baños: "4 Baños",
    costo: "5.000",
    smoke: false,
    pets: false,
  },
  {
    id: 2,
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg", //Ingresa aqui la URL de la imagen,
    descripcion: `Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas`,
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: "2 Habitaciones",
    baños: "1 Baño",
    costo: "1.200",
    smoke: true,
    pets: true,
  },
  {
    id: 3,
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg", //Ingresa aqui la URL de la imagen,
    descripcion: ` Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares`,
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 Habitaciones",
    baños: "3 Baños",
    costo: "4.500",
    smoke: false,
    pets: true,
  },
  {
    id: 4,
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60", //Ingresa aqui la URL de la imagen,
    descripcion: `Este elegante condominio moderno está ubicado en una tranquila zona residencial`,
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    baños: "2 Baños",
    costo: "2.200",
    smoke: false,
    pets: false,
  },
];

//Ciclo for of Propiedades en Venta
const propiedades = document.querySelector("#venta");
let resultadoVenta = "";
for (const venta of propiedadesVenta) {
  const mensaje1 = venta.smoke
    ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar`
    : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar`;
  const mensaje2 = venta.pets
    ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas`
    : `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas`;
  resultadoVenta += `
    <div class='col-md-4 mb-4'>
  <div class="card">
    <img
      src=" ${venta.src}" class="card-img-top"/ alt=" ${venta.nombre}"/>
    <div class="card-body">
      <h5 class="card-title"> ${venta.nombre}</h5>
      <p class="card-text"> ${venta.descripcion}</p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
      <p>
        <i class="fas fa-bed"></i> ${venta.habitaciones} |
        <i class="fas fa-bath"></i> ${venta.baños}
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
      <p class="text-danger">${mensaje1}</p>
      <p class="text-danger">${mensaje2}</p>
    </div>
  </div>
</div>
    `;
}
propiedades.innerHTML = resultadoVenta;
