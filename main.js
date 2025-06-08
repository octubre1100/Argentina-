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
  showLegend("regiones");
};

agroButton.onclick = () => {
  if (state.regi) toggleRegiones();
  if (state.cancer) toggleCancer();
  if (!state.agro) toggleAgro();
  infotext.innerHTML =
    "Aqui se dividió el mapa según el nivel estimado de uso de agroquimicos.";
  showLegend("agro");
};

cancerButton.onclick = () => {
  if (state.regi) toggleRegiones();
  if (state.agro) toggleAgro();
  if (!state.cancer) toggleCancer();
  infotext.innerHTML =
    "Aqui se dividió el mapa según cuanto aportan al PIB cada provincia.";
  showLegend("cancer");
};

// Información de regiones en el mapa
const regionInfo = {
 ARE: {
  title: "Entre Ríos",
  description: "La política tomada por dicha provincia es la restricción de 3000 m en aplicaciones aéreas",
  items: [
    "Arroz",
    "Citricos",
    "Soja"
  ]
},
  ARA: {
    title: "Salta",
    description:
      "Salta se encuentra en el noroeste argentino y es famosa por su arquitectura colonial y paisajes montañosos.",
    items: [
    "Soja",
    "Maíz",
    "Caña de azucar"
  ]
  },
  // Agregá más regiones aquí
  ARY: {
    title: "Jujuy",
    description: "Realizan como politica una legislación ambiental activa",
    items: [
    "Tabaco" ,
    "Caña de azucar"
  ]
  },
  ARP: {
    title: "Formosa",
    description: "",
    items: [
    "Algodón",
    "Soja"
  ]
  },
  ARN: {
    title: "Misiones",
    description:
      "La regulacion que toma con el uso de agroquimicos es la prohibición total de la aplicación aérea de plaguicidas",
    items: [
    "Yerba mate",
    "Té",
    "Tabaco"
  ]
  },
  ARH: {
    title: "Chaco",
    description: "Como medida, ellos realizan una legislación parcial",
    items: [
    "Algodón ,
    "Soja"
    
  ]
  },
  ARW: {
    title: "Corrientes",
    description: "En esta provincia hay una regulación local moderada",
    items: [
    "Arroz",
    "Citrus",
    "Forestal"
  ]
  },
  ARK: {
    title: "Catamarca",
    description: "",
    items: [
    "Nogal",
    "Olivo"
  ]
  },
  ARF: {
    title: "La Rioja",
    description: "En dicha provincia toma como medida una regulación parcial	",
    items: [
    "Olivo",
    "Vid"
  ]
  },
  ARJ: {
    title: "San Juan",
    description: "",
    items: [
    "Vid",
    "Olivo"
  ]
  },
  ARM: {
    title: "Mendoza",
    description: "",
    items: [
    "Vid",
    "Frutales",
    "Horticultura"
  ]
  },
  ARQ: {
    title: "Neuquén",
    description:
      "Su medida es simple, realizar una escasa producción extensiva",
    items: [
    "Frutales",
    "Pasturas"
  ]
  },
  ARU: {
    title: "Chubut",
    description: "",
  },
  ARR: {
    title: "Río Negro",
    description: "Allí realizan una regulación frutícola puntual	",
    items: [
    "Furtad de pepita"
  ]
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
    items: [
    "Soja",
    "Maiz",
    "Trigo"
  ]
  },
  ARC: {
    title: "CABA",
    description: "",
  },
  ARS: {
    title: "Santa Fe",
    description:
      "La política tomada por dicha provincia es la restricción de 3000 m en aplicaciones aéreas	",
    items: [
    "Soja",
    "Maíz",
    "Trigo"
  ]
  },
  ART: {
    title: "Tucumán",
    description: "",
items: [
    "Caña de azucar",
    "Soja"
  ]

  },
  ARG: {
    title: "Santiago del Estero",
    description: "",
items: [
    "Soja",
    "Algodón"
  
  ]

  },
  ARD: {
    title: "San Luis",
    description: "",
    items: [
    "Soja",
    "Maíz",
    "Horticultura"
  ]
  },
  ARL: {
    title: "La Pampa",
    description:
      "La principal política es la restricción de 1000 m en aplicaciones aéreas",
    items: [
    "Soja",
    "Trigo",
    "Maíz"
  ]
  },
  ARX: {
    title: "Córdoba",
    description:
      "Esta tiene como regulación proyectos de monitoreo, sin restricción uniforme	",
    items: [
    "Soja",
    "Maiz",
    



  ]
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
  ${
    info.items
      ? `<ul>${info.items.map(item => `<li>${item}</li>`).join("")}</ul>`
      : ""
  }
`;
    dialog.showModal();
  });
});
const legendGroups = {
  regiones: document.querySelector(".legend-group.regiones"),
  agro: document.querySelector(".legend-group.agro"),
  cancer: document.querySelector(".legend-group.cancer"),
};

// Oculta todas las leyendas
function hideAllLegends() {
  Object.values(legendGroups).forEach((group) => {
    group.style.display = "none";
  });
}

// Mostrar solo una
function showLegend(name) {
  hideAllLegends();
  if (legendGroups[name]) {
    legendGroups[name].style.display = "block";
  }
}
hideAllLegends();
