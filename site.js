const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const numText = document.getElementById("num");

let data = JSON.parse(localStorage.getItem("raffle")) || initialData;
localStorage.setItem("raffle", JSON.stringify(data));

let selected = "";
const whatsapp = "5511954016025";

for(let i=1;i<=10000;i++){
  const n = String(i).padStart(4,"0");
  const div = document.createElement("div");
  div.classList.add("number");

  const status = data[n] ? data[n] : "reserved";
  div.classList.add(status);

  div.dataset.status =
    status==="available"?"DISPONÍVEL":
    status==="paid"?"PAGO":"RESERVADO";

  if(status==="available"){
    div.onclick=()=>openModal(n);
  }

  div.innerText=n;
  grid.appendChild(div);
}

function openModal(n){
  selected=n;
  numText.innerText=n;
  modal.style.display="block";
}

function closeModal(){
  modal.style.display="none";
}

function pay(){
  const name=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  if(!name||!email){alert("Preencha tudo");return;}

  data[selected]="reserved";
  localStorage.setItem("raffle",JSON.stringify(data));

  const msg=`AÇÃO ENTRE AMIGOS – HB20 2024
Número: ${selected}
Nome: ${name}
E-mail: ${email}`;

  window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`);
}
