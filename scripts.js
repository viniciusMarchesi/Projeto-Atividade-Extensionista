function buscarLocais() {
    var tipoResiduo = document.getElementById('residuo').value;
    var mapa = document.getElementById('mapa');
    var cacamba = document.getElementById('cacamba');
    var agradecimento = document.getElementById('agradecimento');

    // Buscar os locais de descarte com base no tipo de resíduo
    switch (tipoResiduo) {
        case 'plastico':
            alert('Locais de descarte para plástico: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar o plástico na Caçamba 01 verde.";
            agradecimento.textContent=("Obrigado por descartar o lixo corretamente! Você está ajudando a proteger o nosso planeta.");
            break;
        case 'vidro':
            alert('Locais de descarte para vidro: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar o vidro na Caçamba 02 verde.";
            agradecimento.textContent=("Obrigado por descartar o lixo corretamente! Você está ajudando a proteger o nosso planeta.");
            break;
        case 'Papelão':
            alert('Locais de descarte para Papelão: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar o papelão na Caçamba 03 verde.";
            agradecimento.textContent=("Obrigado por descartar o lixo corretamente! Você está ajudando a proteger o nosso planeta.");
            break;
        case 'Matéria orgânica':
            alert('Locais de descarte para Matéria orgânica: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar a Matéria orgânica na Caçamba 03 verde.";
            agradecimento.textContent=("Obrigado por descartar o lixo corretamente! Você está ajudando a proteger o nosso planeta.");
            break;
        case 'Metais':
            alert('Locais de descarte para Metais: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar os Metais na Casa de Concreto 02.";
            agradecimento.textContent=("Obrigado por descartar o lixo corretamente! Você está ajudando a proteger o nosso planeta.");
            break;
        case 'Madeiras':
            alert('Locais de descarte para Madeiras: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar as Madeiras na Caçamba Branca.";
            agradecimento.textContent=("Obrigado por descartar o lixo corretamente! Você está ajudando a proteger o nosso planeta.");
            break;
        case 'Eletrônicos':
            alert('Locais de descarte para Eletrônicos: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar os Eletrônicos na Casa de Concreto 01.";
            agradecimento.textContent=("Obrigado por descartar o lixo corretamente! Você está ajudando a proteger o nosso planeta.");
            break;  
        case 'Eletrodomésticos':
            alert('Locais de descarte para Eletrodomésticos: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar os Eletrodomésticos na Casa de Concreto 01.";
            agradecimento.textContent=("Obrigado por descartar o lixo corretamente! Você está ajudando a proteger o nosso planeta.");
            break;  
        case 'Roupas':
            alert('Locais de descarte para Roupas: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar as Roupas Próximo a Entrada na Caçamba de Plástico .";
            agradecimento.textContent=("Obrigado por descartar o lixo corretamente! Você está ajudando a proteger o nosso planeta.");
            break;
        case 'Entulho':
            alert('Locais de descarte para Entulho: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar o Entulho na Caçamba 04 verde.";
            agradecimento.textContent=("Obrigado por descartar o lixo corretamente! Você está ajudando a proteger o nosso planeta.");
            break;                                
        // Adicione mais casos conforme necessário
        default:
            alert('Por favor, selecione um tipo de resíduo.');
            break;
    }
    

}
