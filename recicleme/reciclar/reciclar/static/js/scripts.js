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
            agradecimento.textContent=("🎉 Obrigado por descartar o plástico corretamente! 🥤 Você está ajudando a proteger o nosso planeta. 🌍💚");
            break;
        case 'vidro':
            alert('Locais de descarte para vidro: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar o vidro na Caçamba 02 verde.";
            agradecimento.textContent=("👏 Parabéns por reciclar o vidro! 🍾 O nosso planeta agradece. 🌎💙");
            break;
        case 'Papelão':
            alert('Locais de descarte para Papelão: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar o papelão na Caçamba 03 verde.";
            agradecimento.textContent=("🙌 Muito bem por reciclar o papelão! 📦 A Terra está sorrindo. 🌏💛");
            break;
        case 'Matéria orgânica':
            alert('Locais de descarte para Matéria orgânica: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "É altamente recomendável que você composte a matéria orgânica. Isso não só reduz a quantidade de resíduos que vai para os aterros, mas também enriquece o solo do seu jardim.";
            agradecimento.textContent=("💪 Excelente trabalho ao compostar matéria orgânica! 🍎 O nosso planeta está mais verde graças a você. 🌍💚");
            break;
        case 'Metais':
            alert('Locais de descarte para Metais: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar os Metais na Casa de Concreto 02.";
            agradecimento.textContent=("🎊 Incrível! Você reciclou metais! 🥫 Isso faz uma grande diferença para o nosso planeta. 🌎💜");
            break;
        case 'Madeiras':
            alert('Locais de descarte para Madeiras: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar as Madeiras na Caçamba Branca.";
            agradecimento.textContent=("👍 Ótimo! Você reciclou madeira! 🪵 Isso ajuda a manter as nossas florestas saudáveis. 🌏🌲");
            break;
        case 'Eletrônicos':
            alert('Locais de descarte para Eletrônicos: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar os Eletrônicos na Casa de Concreto 01.";
            agradecimento.textContent=("😊 Fantástico! Você descartou eletrônicos corretamente! 💻 O nosso planeta agradece. 🌍🔋");
            break;  
        case 'Eletrodomésticos':
            alert('Locais de descarte para Eletrodomésticos: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar os Eletrodomésticos na Casa de Concreto 01.";
            agradecimento.textContent=("👏 Maravilhoso! Você reciclou eletrodomésticos! 🧺 Isso ajuda a reduzir o lixo eletrônico no nosso planeta. 🌎🔌");
            break;  
        case 'Roupas':
            alert('Locais de descarte para Roupas: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve doar as roupas próximo à entrada ou procurar um funcionário para orientá-lo sobre onde colocá-las.";
            agradecimento.textContent=("💖 Impressionante! Você doou roupas! 👕 Isso ajuda a reduzir o desperdício e apoia aqueles que precisam. 🌏❤️");
            break;
        case 'Entulho':
            alert('Locais de descarte para Entulho: ...');
            mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.859861818305!2d-47.12787652467001!3d-22.881634636972635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7f815bd8429%3A0xfe63d12e39ecf6ec!2sEcoponto%20Parque%20Via%20Norte!5e0!3m2!1sen!2sus!4v1696102360613!5m2!1sen!2sus";
            cacamba.textContent = "Você deve descartar o Entulho na Caçamba 04 verde.";
            agradecimento.textContent=("😃 Sensacional! Você descartou entulho corretamente! 🧱 Isso ajuda a manter as nossas cidades limpas e seguras. 🌍🏗️");
            break;                                
        // Adicione mais casos conforme necessário
        default:
            alert('Por favor, selecione um tipo de resíduo.');
            break;
    }
    
    document.getElementById('reportForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var address = document.getElementById('address').value;
        var date = document.getElementById('date').value;
        var description = document.getElementById('description').value;

        if(address && date && description) {
            // Cria um objeto FormData para armazenar os dados do formulário
            var formData = new FormData();
            formData.append('address', address);
            formData.append('date', date);
            formData.append('description', description);

            // Cria um objeto XMLHttpRequest para enviar a solicitação ao servidor
            var xhr = new XMLHttpRequest();

            // Configura a solicitação
            xhr.open('POST', 'url_do_seu_servidor_aqui', true);

            // Define o que fazer quando a solicitação for concluída
            xhr.onload = function() {
                if (xhr.status === 200) {
                    alert('Sua denúncia anônima foi enviada com sucesso!');
                } else {
                    alert('Ocorreu um erro ao enviar sua denúncia. Por favor, tente novamente.');
                }
            };

            // Envia a solicitação
            xhr.send(formData);

            // Limpa os campos do formulário
            document.getElementById('address').value = '';
            document.getElementById('date').value = '';
            document.getElementById('description').value = '';
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}
