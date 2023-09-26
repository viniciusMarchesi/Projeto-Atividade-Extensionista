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
        case 'Papelão':
            alert('Locais de descarte para Papelão: ...');
            break;
        case 'Matéria orgânica':
            alert('Locais de descarte para Matéria orgânica: ...');
            break;
        case 'Metais':
            alert('Locais de descarte para Metais: ...');
            break;
        case 'Madeiras':
            alert('Locais de descarte para Madeiras: ...');
            break;
        case 'Eletrônicos':
            alert('Locais de descarte para Eletrônicos: ...');
            break;  
        case 'Eletrodomésticos':
            alert('Locais de descarte para Eletrodomésticos: ...');
            break;  
        case 'Roupas':
            alert('Locais de descarte para Roupas: ...');
            break;
        case 'Entulho':
            alert('Locais de descarte para Entulho: ...');
            break;                                
        // Adicione mais casos conforme necessário
        default:
            alert('Por favor, selecione um tipo de resíduo.');
            break;
    }
}
