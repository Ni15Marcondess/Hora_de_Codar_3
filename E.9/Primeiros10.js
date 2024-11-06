function mostrarNumeros() {
    let resultado = '';
    
    // Imprime os 10 primeiros números maiores que 100
    for (let i = 101; i <= 110; i++) {
        resultado += i + (i < 110 ? ', ' : '');
    }
    
    document.getElementById("resultado").textContent = `Os 10 primeiros números inteiros maiores que 100 são: ${resultado}`;
}
