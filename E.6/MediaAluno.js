let aprovados = 0;

function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    // Verifica se as notas são válidas
    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota2 < 0 || nota1 > 10 || nota2 > 10) {
        document.getElementById("resultado").textContent = "Por favor, insira notas válidas entre 0 e 10.";
        return;
    }

    // Calcula a média
    const media = (nota1 + nota2) / 2;
    let mensagem = `Média: ${media.toFixed(2)} - `;

    // Verifica se o aluno foi aprovado
    if (media >= 9.5) {
        mensagem += "Aprovado!";
        aprovados++;
    } else {
        mensagem += "Reprovado!";
    }

    document.getElementById("resultado").textContent = mensagem;

    // Pergunta se deseja calcular a média de outro aluno
    setTimeout(() => {
        let resposta = prompt("Calcular a média de outro aluno? (S/N)").toUpperCase();
        if (resposta === "S") {
            // Limpa os campos e reinicia o processo
            document.getElementById("nota1").value = "";
            document.getElementById("nota2").value = "";
            document.getElementById("resultado").textContent = "";
        } else {
            alert(`Quantidade de alunos aprovados: ${aprovados}`);
        }
    }, 500);
}
