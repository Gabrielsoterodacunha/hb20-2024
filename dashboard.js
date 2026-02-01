let data = JSON.parse(localStorage.getItem("raffle")) || {};
const table = document.querySelector("table");

Object.keys(data).forEach(num=>{
  const tr=document.createElement("tr");
  tr.innerHTML=`
    <td>${num}</td>
    <td>${data[num]}</td>
    <td>
      <button onclick="setStatus('${num}','paid')">PAGO</button>
      <button onclick="setStatus('${num}','available')">DISPONÍVEL</button>
      <button onclick="setStatus('${num}','reserved')">RESERVADO</button>
    </td>`;
  table.appendChild(tr);
});

function setStatus(num,status){
  data[num]=status;
  localStorage.setItem("raffle",JSON.stringify(data));
  alert("Atualizado");
}
