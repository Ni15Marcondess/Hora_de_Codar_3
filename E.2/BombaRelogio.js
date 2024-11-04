let tempo = 30;
const elementoContador = document.getElementById("contador");

const contagemRegressiva = setInterval(() => {
    elementoContador.textContent = tempo;
    tempo--;

    if (tempo < 0) {
        clearInterval(contagemRegressiva);
        elementoContador.textContent = "EXPLOSÃO";
        
        // Adiciona a classe "explosao" para alterar o estilo
        document.body.classList.add("explosao");
    }
}, 1000);
