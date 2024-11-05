let contatore = document.getElementById("contatore");
let aumento = document.getElementById("plus");
let decremento = document.getElementById("minus");
let reset = document.getElementById("reset");

let valoreContatore = 0;

aumento.addEventListener("click", function () {
  valoreContatore += 1;
  document.getElementById("contatore").innerHTML = valoreContatore;
});

decremento.addEventListener("click", function () {
  valoreContatore -= 1;
  document.getElementById("contatore").innerHTML = valoreContatore;
});

reset.addEventListener("click", function () {
  valoreContatore = 0;
  document.getElementById("contatore").innerHTML = valoreContatore;
});
