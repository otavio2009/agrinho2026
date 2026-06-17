let pontos = 0;
let respondidas = 0;

function mostrarDicas() {
  const dicas = document.getElementById("dicas");

  if (dicas.style.display === "none") {
    dicas.style.display = "block";
  } else {
    dicas.style.display = "none";
  }
}

function responder(correto) {
  if (correto) {
    pontos++;
  }

  respondidas++;

  if (respondidas === 3) {
    document.getElementById("resultado").innerText =
      `Você acertou ${pontos} de 3 perguntas! 🌱`;
  }
}

function reiniciarQuiz() {
  pontos = 0;
  respondidas = 0;
  document.getElementById("resultado").innerText = "";
}
