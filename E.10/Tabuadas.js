function gerarTabuadas() {
    let n = document.getElementById("numero").value;
    n = parseInt(n);

    // Verificar se N é válido
    if (isNaN(n) || n < 1) {
        alert("Por favor, insira um número maior que 0.");
        return;
    }

    let resultado = '';
    
    // Loop para gerar as tabuadas de 1 até N
    for (let i = 1; i <= n; i++) {
        resultado += `<h3>Tabuada do ${i}:</h3>`;
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}<br>`;
        }
        resultado += "<hr>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
