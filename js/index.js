const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const contatore = document.createElement("h1");
contatore.classList.add("contatore");
contatore.textContent = "0";

const container = document.createElement("div");
container.classList.add("container");

const minus = document.createElement("button");
minus.classList.add("minus");
minus.textContent = "-";

const reset = document.createElement("button");
reset.classList.add("reset");
reset.textContent = "Reset";

const plus = document.createElement("button");
plus.classList.add("plus");
plus.textContent = "+"

container.appendChild(minus);
container.appendChild(reset);
container.appendChild(plus);

wrapper.appendChild(contatore);
wrapper.appendChild(container);

document.body.appendChild(wrapper);

let valoreContatore = 0;

minus.addEventListener("click", function () {
  valoreContatore -= 1;
  contatore.textContent = valoreContatore;
});

plus.addEventListener("click", function () {
  valoreContatore += 1;
  contatore.textContent = valoreContatore;
});

reset.addEventListener("click", function () {
  valoreContatore = 0;
  contatore.textContent = valoreContatore;
});
