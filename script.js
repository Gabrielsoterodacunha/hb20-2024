const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const chosenNumber = document.getElementById("chosenNumber");

const whatsapp = "5511954016025";

const availableNumbers = [
  "0051","0390","0542","0739","1247","1816","2105","2391","2997",
  "3079","3222","3235","4107","4734","4739","4753","5878","5916",
  "6179","6616","7164","7504","7574","7765","8105","8262","8618",
  "9541","9690","9973"
];

// alguns pagos vermelhos (exemplo)
const paidNumbers = ["0007","0123","0456","0789","1111","2222"];

// alguns reservados pretos (exemplo)
const reservedNumbers = ["0100","0200","0300","0400","0500"];

let selected = "";

for (let i = 1; i <= 10000; i++) {
  const num = String(i).padStart(4, "0");
  const div = document.createElement("div");
  div.classList.add("number");
  div.innerText = num;

  if (availableNumbers.includes(num)) {
    div.classList.add("available");
    div.dataset.status = "DISPONÍVEL";
    div.onclick = () => openModal(num);

  } else if (paidNumbers.includes(num)) {
    div.classList.add("paid");
    div.dataset.status = "PAGO";

  } else {
    div.classList.add("reserved");
    div.dataset.status = "RESERVADO";
  }

  grid.appendChild(div);
}

function openModal(num) {
  selected = num;
  chosenNumber.innerText = num;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function pay() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Preencha todos os campos");
    return;
  }

  const message = `
AÇÃO ENTRE AMIGOS - HB2024
Número: ${selected}
Nome: ${name}
E-mail: ${email}

Valor:
R$50 unidade
R$40 a partir de 4 números
`;

  window.open(
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}
