function buscarLocais() {
    var tipoResiduo = document.getElementById('residuo').value;
    var mapa = document.getElementById('mapa');
    var cacamba = document.getElementById('cacamba');

    // Buscar os locais de descarte com base no tipo de resíduo
    switch (tipoResiduo) {
        case 'plastico':
            alert('Locais de descarte para plástico: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar o plástico na Caçamba 01 verde.";
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
