function contarValores() {
    // Lê os 10 valores inseridos pelo usuário
    const valores = [
        parseInt(document.getElementById("valor1").value),
        parseInt(document.getElementById("valor2").value),
        parseInt(document.getElementById("valor3").value),
        parseInt(document.getElementById("valor4").value),
        parseInt(document.getElementById("valor5").value),
        parseInt(document.getElementById("valor6").value),
        parseInt(document.getElementById("valor7").value),
        parseInt(document.getElementById("valor8").value),
        parseInt(document.getElementById("valor9").value),
        parseInt(document.getElementById("valor10").value),
    ];

    // Contadores para os valores dentro e fora do intervalo
    let dentro = 0;
    let fora = 0;

    // Verifica cada valor se está dentro ou fora do intervalo
    valores.forEach(valor => {
        if (valor >= 24 && valor <= 42) {
            dentro++;
        } else {
            fora++;
        }
    });

    // Exibe os resultados
    document.getElementById("dentro").textContent = `Valores entre 24 e 42: ${dentro}`;
    document.getElementById("fora").textContent = `Valores fora do intervalo: ${fora}`;
}
