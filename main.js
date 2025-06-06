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
};

agroButton.onclick = () => {
  if (state.regi) toggleRegiones();
  if (state.cancer) toggleCancer();
  if (!state.agro) toggleAgro();
};

cancerButton.onclick = () => {
  if (state.regi) toggleRegiones();
  if (state.agro) toggleAgro();
  if (!state.cancer) toggleCancer();
};

// Información de regiones en el mapa
const regionInfo = {
  ARE: {
    title: "Entre Ríos",
    description:
      "Entre Ríos es una provincia ubicada en la región mesopotámica de Argentina, conocida por sus ríos y paisajes naturales.",
  },
  ARA: {
    title: "Salta",
    description:
      "Salta se encuentra en el noroeste argentino y es famosa por su arquitectura colonial y paisajes montañosos.",
  },
  // Agregá más regiones aquí
  ARY: {
    title: "Jujuy",
    description:
      "",
  },
  ARP: {
    title: "Formosa",
    description:
      "",
  },
  ARN: {
    title: "Misiones",
    description:
      "",
  },
  ARH: {
    title: "Chaco",
    description:
      "",
  },
  ARW: {
    title: "Corrientes",
    description:
      "",
  },
  ARK: {
    title: "Catamarca",
    description:
      "",
  },
  ARF: {
    title: "La Rioja",
    description: 
      "",
  },
  ARJ: {
    title: "San Juan",
    description:
      "",
  },
  ARM: {
    title: "Mendoza",
    description:
      "",
  },
  ARQ: {
    title: "Neuquén",
    description:
      "",
  },
  ARU: {
    title: "Chubut",
    description: 
      "",
  },
  ARR: {
    title: "Río Negro",
    description:
      "",
  },
  ARZ: {
    title: "Santa Cruz",
    description:
      "",
  },
  ARV: {
    title: "Tierra del Fuego",
    description:
      "",
  },
  ARB: {
    title: "Buenos Aires",
    description:
      "",
  },
  ARC: {
    title: "CABA",
    description:
      "",
  },
  ARS: {
    title: "Santa Fe",
    description: 
      "",
  },
    ART: {
    title: "Tucumán",
    description: 
      "",
  },
    ARG: {
    title: "Santiago del Estero",
    description: 
      "",
  },
    ARD: {
    title: "San Luis",
    description: 
      "",
  },
    ARL: {
    title: "La Pampa",
    description: 
      "",
  },
    ARX: {
    title: "Córdoba",
    description: 
      "",
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
