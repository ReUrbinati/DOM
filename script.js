let contadorElemento = document.getElementById("contador");
let botaoIncrementar = document.getElementById("incrementar");
let botaoDecrementar = document.getElementById("decrementar");

let contador = 0;

// Passo 2: Atualizar o contador no HTML
function atualizarContador() {
    contadorElemento.textContent = contador;
    if (contador > 10) contador = 10;
    contadorElemento.style.color = contador < 0 ? "red" : "black";
    contadorElemento.textContent = contador;
}


//passo 3: Evento de para incrementar
botaoIncrementar.addEventListener("click", function () {
    contador++;
    atualizarContador();
});

//passo 4: Evento para decrementar
botaoDecrementar.addEventListener("click", function () {
    contador--;
    atualizarContador();
});



atualizarContador()
atualizarContador1()


