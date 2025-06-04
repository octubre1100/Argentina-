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
