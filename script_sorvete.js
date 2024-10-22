function toggleSabores(tipo) {
    var saboresDiv = document.getElementById('sabores-' + tipo);
    saboresDiv.style.display = saboresDiv.style.display === 'none' ? 'block' : 'none';
}

function mostrarSabores(tipo) {
    var tamanhoSelect = document.getElementById(tipo + '-tamanho');
    var saboresDiv = document.getElementById('sabor-' + tipo);
    
    if (tamanhoSelect.value !== "") {
        saboresDiv.style.display = 'block';
    } else {
        saboresDiv.style.display = 'none';
    }
}