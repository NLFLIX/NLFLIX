
let cpfsValidos = {};

fetch("cpfs_validos.json")
  .then((res) => res.json())
  .then((data) => {
    cpfsValidos = data;
  });

function verificarCPF() {
  const cpf = document.getElementById("cpf").value.replace(/\D/g, "");
  const erro = document.getElementById("erro");

  if (cpfsValidos[cpf]) {
    document.getElementById("login").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
  } else {
    erro.textContent = "CPF não autorizado.";
  }
}
