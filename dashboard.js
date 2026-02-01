function carregarDashboard() {
  const data = JSON.parse(localStorage.getItem("raffle")) || {};
  const tbody = document.querySelector("#table tbody");

  if (!tbody) {
    console.error("Tabela do dashboard não encontrada");
    return;
  }

  tbody.innerHTML = "";

  Object.keys(data).forEach(num => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${num}</td>
      <td>${data[num]}</td>
      <td>
        <button onclick="setStatus('${num}','paid')">PAGO</button>
        <button onclick="setStatus('${num}','available')">DISPONÍVEL</button>
        <button onclick="setStatus('${num}','reserved')">RESERVADO</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function setStatus(num, status) {
  const data = JSON.parse(localStorage.getItem("raffle")) || {};
  data[num] = status;
  localStorage.setItem("raffle", JSON.stringify(data));
  carregarDashboard();
}
