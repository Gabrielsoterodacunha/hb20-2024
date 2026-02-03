// 🔴 FORÇAR ALGUNS NÚMEROS COMO PAGO (SEM QUEBRAR O SITE)
(function () {
  const numerosPago = ["0051", "6179", "7504", "7574"];

  let data = JSON.parse(localStorage.getItem("raffle"));
  if (!data) return;

  let alterou = false;

  numerosPago.forEach(num => {
    if (data[num] && data[num] !== "paid") {
      data[num] = "paid";
      alterou = true;
    }
  });

  if (alterou) {
    localStorage.setItem("raffle", JSON.stringify(data));
  }
})();
