function setup() {
  createCanvas(900, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#795548");
  } else {
    background("#4CAF50");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("🧑🏽‍🌾", xJogador1, 100);
  text("🐖", xJogador2, 200);
  text("🐄", xJogador3, 300);
}

function desenhaLinhaDeChegada() {
  rect(800, 0, 10, 400);
}

function verificaVencedor() {
  if (xJogador1 > 800) {
    text("Fazendeiro venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 800) {
    text("Porco venceu!", 50, 200);
    noLoop();
  }
  if (xJogador3 > 800) {
    text("Vaca venceu!", 50, 200);
    noLoop();
  }
}
function keyReleased() {
  if (key == "w") {
    xJogador1 += random(20);
  }
  if (key == "a") {
    xJogador2 += random(20);
  }
  if (key == "d") {
    xJogador3 += random(20);
  }
}