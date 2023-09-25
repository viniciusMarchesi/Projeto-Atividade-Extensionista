function buscarLocais() {
    var tipoResiduo = document.getElementById('residuo').value;

    // Buscar os locais de descarte com base no tipo de resíduo
    switch (tipoResiduo) {
        case 'plastico':
            alert('Locais de descarte para plástico: ...');
            break;
        case 'vidro':
            alert('Locais de descarte para vidro: ...');
            break;
        // Adicione mais casos conforme necessário
        default:
            alert('Por favor, selecione um tipo de resíduo.');
            break;
    }
}
