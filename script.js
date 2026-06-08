//TROCA DE TEMAS

const tema1 = document.getElementById("tema1");
const tema2 = document.getElementById("tema2");
const tema3 = document.getElementById("tema3");

tema1.addEventListener("click", function(){

    document.body.classList.remove("tema-verde");
    document.body.classList.remove("tema-roxo");

    document.body.classList.add("tema-azul");

});

tema2.addEventListener("click", function(){

    document.body.classList.remove("tema-azul");
    document.body.classList.remove("tema-roxo");

    document.body.classList.add("tema-verde");

});

tema3.addEventListener("click", function(){

    document.body.classList.remove("tema-azul");
    document.body.classList.remove("tema-verde");

    document.body.classList.add("tema-roxo");

});


//SLIDESHOW

const slide = document.getElementById("slide");

let imagens = [
    "img/estufa.png",
    "img/galaxia.png",
    "img/planeta.png"
];

let indice = 0;

setInterval(function () {

    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    slide.src = imagens[indice];

}, 3000);


//FORMULÁRIO


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();

    if (nome === "" || email === "") {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Formulário enviado com sucesso!");
});


// QUIZ

const perguntas = [

{
    pergunta: "Qual técnica permite cultivar plantas sem solo?",
    respostas: ["Hidroponia", "Mineração", "Soldagem"],
    correta: 0
},

{
    pergunta: "Qual planeta é considerado um dos principais destinos para futuras colônias humanas?",
    respostas: ["Marte", "Mercúrio", "Netuno"],
    correta: 0
},

{
    pergunta: "Qual é um dos maiores desafios da agricultura espacial?",
    respostas: ["Radiação", "Chuva", "Trânsito"],
    correta: 0
},

{
    pergunta: "O que pode ser reutilizado em sistemas agrícolas espaciais?",
    respostas: ["Água", "Asfalto", "Combustível"],
    correta: 0
},

{
    pergunta: "Qual recurso é limitado no espaço?",
    respostas: ["Água", "Pedras", "Areia"],
    correta: 0
},

{
    pergunta: "Qual tecnologia controla nutrientes das plantas?",
    respostas: ["Sensores", "Televisão", "Impressora"],
    correta: 0
},

{
    pergunta: "Quem poderá utilizar sistemas agrícolas espaciais?",
    respostas: ["Astronautas", "Motoristas", "Pescadores"],
    correta: 0
},

{
    pergunta: "A agricultura espacial ajuda a produzir:",
    respostas: ["Alimentos", "Carros", "Prédios"],
    correta: 0
},

{
    pergunta: "Além do espaço, a tecnologia pode ser usada em:",
    respostas: ["Regiões com clima extremo", "Praias", "Shopping Centers"],
    correta: 0
},

{
    pergunta: "Qual é o objetivo principal da agricultura espacial?",
    respostas: ["Produzir alimentos de forma sustentável", "Fabricar foguetes", "Criar satélites"],
    correta: 0
}

];

let atual = 0;
let pontos = 0;
let respondeu = false;

const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const proxima = document.getElementById("proxima");
const resultado = document.getElementById("resultado");

function mostrarPergunta() {

    respondeu = false;

    pergunta.innerHTML = perguntas[atual].pergunta;

    respostas.innerHTML = "";

    for (let i = 0; i < perguntas[atual].respostas.length; i++) {

        respostas.innerHTML += `
        <button onclick="responder(${i})">
            ${perguntas[atual].respostas[i]}
        </button>
        <br><br>
        `;
    }
}

function responder(opcao) {

    if (respondeu === true) {
        return;
    }

    respondeu = true;

    if (opcao === perguntas[atual].correta) {
        pontos++;
    }
}

proxima.addEventListener("click", function () {

    atual++;

    if (atual < perguntas.length) {

        mostrarPergunta();

    } else {

        pergunta.innerHTML = "";
        respostas.innerHTML = "";

        resultado.innerHTML =
            "Você acertou " +
            pontos +
            " de " +
            perguntas.length +
            " perguntas!";
    }

});
