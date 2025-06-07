// Estado centralizado
const state = {
  agro: false,
  cancer: false,
  regi: false,
};

// Botones
const regionButton = document.getElementById("reg");
const agroButton = document.getElementById("agro");
const cancerButton = document.getElementById("canc");
const infotext = document.querySelector(".text");
// Grupos de elementos
const groups = {
  pam: document.querySelectorAll(".pam"),
  cuyo: document.querySelectorAll(".cuyo"),
  nea: document.querySelectorAll(".nea"),
  noa: document.querySelectorAll(".noa"),
  pat: document.querySelectorAll(".pat"),
  muyalto: document.querySelectorAll(".muyalto"),
  alto: document.querySelectorAll(".alto"),
  medio: document.querySelectorAll(".medio"),
  bajo: document.querySelectorAll(".bajo"),
  nulo: document.querySelectorAll(".nulo"),
  high: document.querySelectorAll(".high"),
  mid: document.querySelectorAll(".mid"),
  low: document.querySelectorAll(".low"),
};

// Utilidades para alternar clases
function toggleClasses(elements, className) {
  elements.forEach((el) => el.classList.toggle(className));
}

function toggleGroup(groupsArray, classNames) {
  groupsArray.forEach((group, index) => {
    toggleClasses(group, classNames[index]);
  });
}

// Funciones de control
function toggleRegiones() {
  toggleGroup(
    [groups.pam, groups.pat, groups.cuyo, groups.nea, groups.noa],
    ["A", "E", "I", "O", "U"]
  );
  state.regi = !state.regi;
  console.log("toggle regiones");
}

function toggleAgro() {
  toggleGroup(
    [groups.muyalto, groups.alto, groups.medio, groups.bajo, groups.nulo],
    ["Q", "W", "R", "T", "Y"]
  );
  state.agro = !state.agro;
  console.log("toggle agro");
}

function toggleCancer() {
  toggleGroup([groups.high, groups.mid, groups.low], ["abc", "acb", "cba"]);
  state.cancer = !state.cancer;
  console.log("toggle cancer");
}

// Acciones por botón
regionButton.onclick = () => {
  if (state.agro) toggleAgro();
  if (state.cancer) toggleCancer();
  if (!state.regi) toggleRegiones();
  infotext.innerHTML = "Aqui se dividió el mapa en las regiones geograficas.";
};

agroButton.onclick = () => {
  if (state.regi) toggleRegiones();
  if (state.cancer) toggleCancer();
  if (!state.agro) toggleAgro();
  infotext.innerHTML =
    "Aqui se dividió el mapa según el nivel estimado de uso de agroquimicos.";
};

cancerButton.onclick = () => {
  if (state.regi) toggleRegiones();
  if (state.agro) toggleAgro();
  if (!state.cancer) toggleCancer();
  infotext.innerHTML =
    "Aqui se dividió el mapa según cuanto aportan al PIB cada provincia.";
};

// Información de regiones en el mapa
const regionInfo = {
  ARE: {
    title: "Entre Ríos",
    description:
      "La política tomada por dicha provincia es la restricción de 3000 m en aplicaciones aéreas",
  },
  ARA: {
    title: "Salta",
    description:
      "Salta se encuentra en el noroeste argentino y es famosa por su arquitectura colonial y paisajes montañosos.",
  },
  // Agregá más regiones aquí
  ARY: {
    title: "Jujuy",
    description: "Realizan como politica una legislación ambiental activa",
  },
  ARP: {
    title: "Formosa",
    description: "",
  },
  ARN: {
    title: "Misiones",
    description:
      "La regulacion que toma con el uso de agroquimicos es la prohibición total de la aplicación aérea de plaguicidas",
  },
  ARH: {
    title: "Chaco",
    description: "Como medida, ellos realizan una legislación parcial",
  },
  ARW: {
    title: "Corrientes",
    description: "En esta provincia hay una regulación local moderada",
  },
  ARK: {
    title: "Catamarca",
    description: "",
  },
  ARF: {
    title: "La Rioja",
    description: "En dicha provincia toma como medida una regulación parcial	",
  },
  ARJ: {
    title: "San Juan",
    description: "",
  },
  ARM: {
    title: "Mendoza",
    description: "",
  },
  ARQ: {
    title: "Neuquén",
    description:
      "Su medida es simple, realizar una escasa producción extensiva",
  },
  ARU: {
    title: "Chubut",
    description: "",
  },
  ARR: {
    title: "Río Negro",
    description: "Allí realizan una regulación frutícola puntual	",
  },
  ARZ: {
    title: "Santa Cruz",
    description: "",
  },
  ARV: {
    title: "Tierra del Fuego",
    description: "",
  },
  ARB: {
    title: "Buenos Aires",
    description:
      "La política llevada a cabo con el uso de agroquímicos es ls restricción de 2000 metros para la aplicación aérea de plaguicidas",
  },
  ARC: {
    title: "CABA",
    description: "",
  },
  ARS: {
    title: "Santa Fe",
    description:
      "La política tomada por dicha provincia es la restricción de 3000 m en aplicaciones aéreas	",
  },
  ART: {
    title: "Tucumán",
    description: "",
  },
  ARG: {
    title: "Santiago del Estero",
    description: "",
  },
  ARD: {
    title: "San Luis",
    description: "",
  },
  ARL: {
    title: "La Pampa",
    description:
      "La principal política es la restricción de 1000 m en aplicaciones aéreas",
  },
  ARX: {
    title: "Córdoba",
    description:
      "Esta tiene como regulación proyectos de monitoreo, sin restricción uniforme	",
  },
};

// Manejador para mostrar información en el diálogo
document.querySelectorAll(".map path").forEach((path) => {
  path.addEventListener("click", () => {
    const regionId = path.id;
    const info = regionInfo[regionId];
    if (!info)
      return console.warn(`No se encontró información para: ${regionId}`);

    const dialog = document.getElementById("infoDialog");
    const content = document.getElementById("dialogContent");

    content.innerHTML = `
      <h2>${info.title}</h2>
      <p>${info.description}</p>
    `;
    dialog.showModal();
  });
});
