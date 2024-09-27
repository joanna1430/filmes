
let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("9");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("lilac");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(40);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Viva - A Vida é uma Festa";
    } else {
      if (idade >= 1) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Coraline";
        }
      } else {
        if (gostaDeFantasia) {
          return "O pequenino";
        } else {
          return "A noiva cadaver";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "cinderela";
    } else {
      return "frozen";
    }
  }
}
