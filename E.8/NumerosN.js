document.getElementById("numeroForm").addEventListener("submit", function (e) {
    e.preventDefault();  // Impede o comportamento padrão do formulário (recarregar a página)

    let n = parseInt(document.getElementById("numero").value);
    let resultado = '';

    // Verifica se o valor de N é maior que 0
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            resultado += i + (i < n ? ', ' : '');
        }
        document.getElementById("resultado").textContent = `Os números de 1 até ${n} são: ${resultado}`;
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira um número maior que zero.";
    }
});
