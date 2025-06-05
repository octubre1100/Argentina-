let butonR = document.getElementById("reg");
let butonA = document.querySelector("#agro");
let butonC = document.querySelector("#canc");
let pam = document.querySelectorAll(".pam");
let cuyo = document.querySelectorAll(".cuyo");
let nea = document.querySelectorAll(".nea");
let noa = document.querySelectorAll(".noa");
let pat = document.querySelectorAll(".pat");
let regi = false;
butonR.onclick = function () {
  if (agro == true) {
    muyalto.forEach((el) => el.classList.toggle("Q"));
    alto.forEach((el) => el.classList.toggle("W"));
    medio.forEach((el) => el.classList.toggle("R"));
    bajo.forEach((el) => el.classList.toggle("T"));
    nulo.forEach((el) => el.classList.toggle("Y"));
    agro = false;
  }
  if (cancer == true) {
    high.forEach((el) => el.classList.toggle("abc"));
    mid.forEach((el) => el.classList.toggle("acb"));
    low.forEach((el) => el.classList.toggle("cba"));
    cancer = false;
  }
  if (regi == false) {
    pam.forEach((el) => el.classList.toggle("A"));
    pat.forEach((el) => el.classList.toggle("E"));
    cuyo.forEach((el) => el.classList.toggle("I"));
    nea.forEach((el) => el.classList.toggle("O"));
    noa.forEach((el) => el.classList.toggle("U"));
    regi = true;
    console.log("anda");
  }
};
let muyalto = document.querySelectorAll(".muyalto");
let alto = document.querySelectorAll(".alto");
let medio = document.querySelectorAll(".medio");
let bajo = document.querySelectorAll(".bajo");
let nulo = document.querySelectorAll(".nulo");
let agro = false;
butonA.onclick = function () {
  if (regi == true) {
    pam.forEach((el) => el.classList.toggle("A"));
    pat.forEach((el) => el.classList.toggle("E"));
    cuyo.forEach((el) => el.classList.toggle("I"));
    nea.forEach((el) => el.classList.toggle("O"));
    noa.forEach((el) => el.classList.toggle("U"));
    console.log("anda");
    regi = false;
  }
  if (cancer == true) {
    high.forEach((el) => el.classList.toggle("abc"));
    mid.forEach((el) => el.classList.toggle("acb"));
    low.forEach((el) => el.classList.toggle("cba"));
    cancer = false;
  }
  if (agro == false) {
    muyalto.forEach((el) => el.classList.toggle("Q"));
    alto.forEach((el) => el.classList.toggle("W"));
    medio.forEach((el) => el.classList.toggle("R"));
    bajo.forEach((el) => el.classList.toggle("T"));
    nulo.forEach((el) => el.classList.toggle("Y"));
    agro = true;
    console.log("anda");
  }
};
let high = document.querySelectorAll(".high");
let mid = document.querySelectorAll(".mid");
let low = document.querySelectorAll(".low");
let cancer = false;
butonC.onclick = function () {
  if (regi == true) {
    pam.forEach((el) => el.classList.toggle("A"));
    pat.forEach((el) => el.classList.toggle("E"));
    cuyo.forEach((el) => el.classList.toggle("I"));
    nea.forEach((el) => el.classList.toggle("O"));
    noa.forEach((el) => el.classList.toggle("U"));
    console.log("anda");
    regi = false;
  }
  if (agro == true) {
    muyalto.forEach((el) => el.classList.toggle("Q"));
    alto.forEach((el) => el.classList.toggle("W"));
    medio.forEach((el) => el.classList.toggle("R"));
    bajo.forEach((el) => el.classList.toggle("T"));
    nulo.forEach((el) => el.classList.toggle("Y"));
    agro = false;
  }
  if (cancer == false) {
    high.forEach((el) => el.classList.toggle("abc"));
    mid.forEach((el) => el.classList.toggle("acb"));
    low.forEach((el) => el.classList.toggle("cba"));
    cancer = true;
  }
};
