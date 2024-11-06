function calcularMedia() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    if (num1 >= num2) {
        document.getElementById("resultado").textContent = "O primeiro número deve ser menor que o segundo.";
        return;
    }

    let soma = 0;
    let contador = 0;

    for (let i = num1; i <= num2; i++) {
        soma += i;
        contador++;
    }

    const media = soma / contador;
    document.getElementById("resultado").textContent = 
        `A média aritmética dos números entre ${num1} e ${num2} é: ${media}`;
}
