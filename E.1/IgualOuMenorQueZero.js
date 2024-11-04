function realizarDivisao() {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);

    // Verifica se o segundo valor é válido
    while (valor2 <= 0) {
        valor2 = parseFloat(prompt("O segundo valor deve ser maior que zero. Insira outro valor:"));
    }

    // Calcula e exibe o resultado da divisão
    const resultado = valor1 / valor2;
    document.getElementById("resultado").textContent = `O resultado da divisão é: ${resultado.toFixed(2)}`;
}
