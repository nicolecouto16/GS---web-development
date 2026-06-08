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

