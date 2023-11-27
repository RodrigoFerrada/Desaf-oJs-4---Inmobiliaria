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

//Array de Objects Propiedades en Alquiler
const propiedadesAlquiler = [
  {
    id: 5,
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", //Ingresa aqui la URL de la imagen,
    descripcion: `  Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.`,
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    baños: "2 Baños",
    costo: "2.000",
    smoke: false,
    pets: true,
  },
  {
    id: 6,
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", //Ingresa aqui la URL de la imagen,
    descripcion: `Este hermoso apartamento ofrece una vista impresionante al mar`,
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: "3 Habitaciones",
    baños: "3 Baño",
    costo: "2.500",
    smoke: true,
    pets: true,
  },
  {
    id: 7,
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
  {
    id: 8,
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
];

//Ciclo for of Propiedades en Venta
const propiedades = document.querySelector("#venta");
let contadorVenta = 0;
let resultadoVenta = "";
for (const venta of propiedadesVenta) {
  const mensaje1 = venta.smoke
    ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar`
    : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar`;
  const mensaje2 = venta.pets
    ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas`
    : `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas`;
  if (contadorVenta < 3) {
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
    contadorVenta++;
  } else {
    break;
  }
}
propiedades.innerHTML = resultadoVenta;

//Ciclo fo of Propiedades en Alquiler
const pAlquiler = document.querySelector("#alquilar");
let contadorAlquiler = 0;
let resultadoAlquiler = "";
for (const alquiler of propiedadesAlquiler) {
  const mensaje1 = alquiler.smoke
    ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar`
    : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar`;
  const mensaje2 = alquiler.pets
    ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas`
    : `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas`;
  if (contadorAlquiler < 3) {
    resultadoAlquiler += `
      <div class='col-md-4 mb-4'>
    <div class="card">
      <img
        src=" ${alquiler.src}" class="card-img-top"/ alt=" ${alquiler.nombre}"/>
      <div class="card-body">
        <h5 class="card-title"> ${alquiler.nombre}</h5>
        <p class="card-text"> ${alquiler.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}</p>
        <p>
          <i class="fas fa-bed"></i> ${alquiler.habitaciones} |
          <i class="fas fa-bath"></i> ${alquiler.baños}
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
        <p class="text-danger">${mensaje1}</p>
        <p class="text-danger">${mensaje2}</p>
        
      </div>
    </div>
  </div>
      `;
    contadorAlquiler++;
  } else {
    break;
  }
}
pAlquiler.innerHTML = resultadoAlquiler;
