document.getElementById("notasForm").addEventListener("submit", function (e) {
    e.preventDefault();  // Evitar o comportamento padrão do formulário (recarregar a página)

    let notas = [];
    let notaValida = true;
    
    // Lê as notas e valida se estão dentro do intervalo
    for (let i = 1; i <= 6; i++) {
        let nota = parseFloat(document.getElementById(`nota${i}`).value);

        // Verifica se a nota é válida (entre 0 e 10)
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            alert(`Nota ${i} inválida! Insira uma nota entre 0 e 10.`);
            nota = parseFloat(prompt(`Digite a Nota ${i} novamente (entre 0 e 10):`));
        }

        notas.push(nota);
    }

    // Calculando a média
    let soma = notas.reduce((acc, curr) => acc + curr, 0);
    let media = soma / notas.length;

    // Exibindo o resultado
    document.getElementById("resultado").textContent = `A média das notas é: ${media.toFixed(2)}`;
});
