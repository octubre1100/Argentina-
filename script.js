let butonR = document.getElementById("reg");
let butonA = document.querySelector("#agro");
let butonC = document.querySelector("#canc");
let pam = document.querySelector(".pam");
let cuyo = document.querySelector(".cuyo");
let nea = document.querySelector(".nea");
let noa = document.querySelector(".noa");
let pat = document.querySelector(".pat");
let regi = false;
butonR.onclick = function () {
  console.log("anda");
  if (regi == false) {
    pam.classList.toggle("act");
    pat.classList.toggle("act");
    cuyo.classList.toggle("act");
    nea.classList.toggle("act");
    noa.classList.toggle("act");
    regi = true;
    console.log("anda");
  }
  console.log("anda");
};
