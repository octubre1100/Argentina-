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
  if (state.regi) {
    animateMapShake();
    return;
  }
  if (state.agro) toggleAgro();
  if (state.cancer) toggleCancer();
  toggleRegiones();
  infotext.innerHTML = "Aqui se dividió el mapa en las regiones geograficas.";
  showLegend("regiones");
  animateMapPulse();
};

agroButton.onclick = () => {
  if (state.agro) {
    animateMapShake();
    return;
  }
  if (state.regi) toggleRegiones();
  if (state.cancer) toggleCancer();
  toggleAgro();
  infotext.innerHTML =
    "Aqui se dividió el mapa según el nivel estimado de uso de agroquimicos.";
  showLegend("agro");
  animateMapPulse();
};

cancerButton.onclick = () => {
  if (state.cancer) {
    animateMapShake();
    return;
  }
  if (state.regi) toggleRegiones();
  if (state.agro) toggleAgro();
  toggleCancer();
  infotext.innerHTML =
    "Aqui se dividió el mapa según cuanto aportan al PIB cada provincia.";
  showLegend("cancer");
  animateMapPulse();
};

// Información de regiones en el mapa
const regionInfo = {
  ARE: {
    title: "Entre Ríos",
    description:
      "La política tomada por dicha provincia es la restricción de 3000 m en aplicaciones aéreas y las fumigaciones cercanas a escuelas rurales",
    items: ["Arroz", "Citricos", "Soja"],
  },
  ARA: {
    title: "Salta",
    description: "Normas ambientales y fitosanitarias provinciales",
    items: ["Soja", "Maíz", "Caña de azucar"],
  },
  // Agregá más regiones aquí
  ARY: {
    title: "Jujuy",
    description:
      "Realizan como politica una legislación ambiental activa con reglamentos técnicos provinciales con fuerte control en zonas tabacaleras y cañeras.",
    items: ["Tabaco", "Caña de azucar"],
  },
  ARP: {
    title: "Formosa",
    description:
      "Ley provincial con zonas de exclusión aérea; énfasis en capacitación de aplicadores.",
    items: ["Algodón", "Soja"],
  },
  ARN: {
    title: "Misiones",
    description:
      "Prohibición total de fumigaciones aéreas y de uso de glifosato desde 2020; se promueve la agroecología.",
    items: ["Yerba mate", "Té", "Tabaco"],
  },
  ARH: {
    title: "Chaco",
    description:
      "Ley provincial regula uso y aplicación. Controles en áreas de producción de algodón y soja.",
    items: ["Algodón", "Soja"],
  },
  ARW: {
    title: "Corrientes",
    description:
      "Leyes de control fitosanitario y ordenanzas locales; se promueve la agricultura orgánica en zonas de cultivo de yerba mate.",
    items: ["Arroz", "Citrus", "Forestal", "Yerba Mate"],
  },
  ARK: {
    title: "Catamarca",
    description:
      "Exige registro provincial de productos, formuladores, aplicadores y depósitos.",
    items: ["Nogal", "Olivo"],
  },
  ARF: {
    title: "La Rioja",
    description:
      "Proyectos de ley en estudio para establecer distancias mínimas; fuerte presión ambientalista.	",
    items: ["Olivo", "Vid"],
  },
  ARJ: {
    title: "San Juan",
    description:
      "Registros de aplicadores y control técnico, pero sin distancias definidas. Se estudia proyecto de ley desde 2023.",
    items: ["Vid", "Olivo"],
  },
  ARM: {
    title: "Mendoza",
    description:
      "Ley provincial; en zonas vitivinícolas se promueve el control integrado; fuerte fiscalización en áreas protegidas.",
    items: ["Vid", "Frutales", "Horticultura"],
  },
  ARQ: {
    title: "Neuquén",
    description:
      "Legislación sobre residuos peligrosos; sin ley específica sobre agroquímicos, pero sí controles por parte del Ministerio de Producción.",
    items: ["Frutales", "Pasturas"],
  },
  ARU: {
    title: "Chubut",
    description:
      "Se rige por la ley ambiental general; sin normativa específica sobre agroquímicos.",
    items: ["Cerezas", "Berries", "Manzanas", "Horailzas", "Alfalfa"],
  },
  ARR: {
    title: "Río Negro",
    description:
      "Ley provincial; se regula especialmente en el Alto Valle por el impacto en frutales.",
    items: ["Frutas de pepita"],
  },
  ARZ: {
    title: "Santa Cruz",
    description:
      "Producción agrícola limitada; sin regulación específica pero bajo marco ambiental.",
    items: ["Cerezas", "Hortalizas", "Forrajes", "Frutales clima frio"],
  },
  ARV: {
    title: "Tierra del Fuego",
    description:
      "Prácticamente sin agricultura intensiva; no hay normativas específicas.",
  },
  ARB: {
    title: "Buenos Aires",
    description:
      "municipios como Pergamino prohíben el glifosato; se creó el OTA (Observatorio Técnico de Agroquímicos).",
    items: ["Soja", "Maiz", "Trigo"],
  },
  ARC: {
    title: "CABA",
    description:
      "No se permite uso agrícola con agroquímicos; hay ordenanzas que regulan fitosanitarios en espacios verdes.",
  },
  ARS: {
    title: "Santa Fe",
    description:
      "La política tomada por dicha provincia es la restricción de 3000 m en aplicaciones aéreas	",
    items: ["Soja", "Maíz", "Trigo"],
  },
  ART: {
    title: "Tucumán",
    description:
      "Regula especialmente cultivos intensivos; exige capacitación obligatoria a aplicadores.",
    items: ["Caña de azucar", "Soja"],
  },
  ARG: {
    title: "Santiago del Estero",
    description:
      "Leyes provinciales + ordenanzas locales; frecuente conflictividad en zonas de expansión agrícola.",
    items: ["Soja", "Algodón"],
  },
  ARD: {
    title: "San Luis",
    description:
      "Regula desde formulación hasta aplicación, se reorganizó control interministerial.",
    items: ["Soja", "Maíz", "Horticultura"],
  },
  ARL: {
    title: "La Pampa",
    description:
      "Prohíbe aplicación aérea; ordenanzas locales (Santa Rosa, General Pico) amplían controles y zonas de amortiguamiento.",
    items: ["Soja", "Trigo", "Maíz"],
  },
  ARX: {
    title: "Córdoba",
    description:
      "Esta tiene como regulación proyectos de monitoreo, distancias mínimas según tipo de producto; fuerte presión social por ampliarlas; restricciones más duras en zonas escolares y rurales.	",
    items: ["Soja", "Maiz"],
  },
};
const regionGeneralInfo = {
  pam: {
    title: "Región Pampeana",
    description:
      "Incluye provincias con fuerte desarrollo agrícola-ganadero, alta densidad poblacional y gran aporte al PIB nacional.",
  },
  pat: {
    title: "Región Patagónica",
    description:
      "Zona de baja densidad poblacional y clima frío, con economía basada en hidrocarburos, turismo y fruticultura.",
  },
  cuyo: {
    title: "Región de Cuyo",
    description:
      "Caracterizada por clima árido y economías vitivinícolas. Importante actividad minera en algunas provincias.",
  },
  nea: {
    title: "Región del NEA",
    description:
      "Región subtropical, con producción forestal, yerba mate, té y algodón. Alta biodiversidad y riqueza hídrica.",
  },
  noa: {
    title: "Región del NOA",
    description:
      "Zona montañosa con cultura andina, producción agrícola en los valles y minería. Alta diversidad cultural.",
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
  <h5>${"Algunas politicas respecto a agroquimicos son:"}</h5>
  <p>${info.description}</p>
  <p>${"Estos son algunos cultivos destacados:"}</p>
  ${
    info.items
      ? `<ul>${info.items.map((item) => `<li>${item}</li>`).join("")}</ul>`
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
document.querySelectorAll(".color.clickable").forEach((el) => {
  // Mostrar info general si tiene regionKey
  el.addEventListener("click", () => {
    const regionKey = el.dataset.region;
    const info = regionGeneralInfo[regionKey];
    if (!info) return;

    const dialog = document.getElementById("infoDialog");
    const content = document.getElementById("dialogContent");

    content.innerHTML = `
      <h2>${info.title}</h2>
      <p>${info.description}</p>
    `;
    dialog.showModal();
  });

  // Resaltar provincias al pasar el mouse
  el.addEventListener("mouseenter", () => {
    const group = el.dataset.group;
    const cls = el.dataset.class;
    if (!group || !cls) return;

    document.querySelectorAll(`.map path.${group}.${cls}`).forEach((path) => {
      path.classList.add("highlight");
    });
  });

  el.addEventListener("mouseleave", () => {
    const group = el.dataset.group;
    const cls = el.dataset.class;
    if (!group || !cls) return;

    document.querySelectorAll(`.map path.${group}.${cls}`).forEach((path) => {
      path.classList.remove("highlight");
    });
  });
});
const resetButton = document.getElementById("reset");

resetButton.onclick = () => {
  // Añadir clase para animación
  const mapElement = document.querySelector(".map");
  mapElement.classList.add("animate-reset");

  // Quitar clase de animación luego de que termine
  mapElement.addEventListener(
    "animationend",
    () => {
      mapElement.classList.remove("animate-reset");
    },
    { once: true }
  );

  // Quitar clases activas
  Object.entries(groups).forEach(([key, nodeList]) => {
    nodeList.forEach((el) => {
      el.classList.remove("A", "E", "I", "O", "U");
      el.classList.remove("Q", "W", "R", "T", "Y");
      el.classList.remove("abc", "acb", "cba");
      el.classList.remove("highlight");
    });
  });

  // Resetear estado
  state.agro = false;
  state.cancer = false;
  state.regi = false;

  hideAllLegends();

  // Cerrar diálogo
  const dialog = document.getElementById("infoDialog");
  if (dialog.open) dialog.close();

  // Restaurar texto
  infotext.innerHTML = "Haz clic en un botón para visualizar el mapa.";
};
function animateMapPulse() {
  const mapElement = document.querySelector(".map");
  mapElement.classList.add("animate-pulse");
  mapElement.addEventListener(
    "animationend",
    () => {
      mapElement.classList.remove("animate-pulse");
    },
    { once: true }
  );
}
function animateMapShake() {
  const mapElement = document.querySelector(".map");
  mapElement.classList.add("animate-shake");
  mapElement.addEventListener(
    "animationend",
    () => {
      mapElement.classList.remove("animate-shake");
    },
    { once: true }
  );
}
