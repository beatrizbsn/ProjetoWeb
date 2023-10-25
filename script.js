document.addEventListener("DOMContentLoaded", function() {
    // Função para buscar o endereço IP usando um serviço de terceiros
    function getIP() {
        // Cria um novo objeto XMLHttpRequest para fazer uma solicitação HTTP
        var xhr = new XMLHttpRequest();
        // Abre uma solicitação GET para o arquivo "get_ip.php" de forma assíncrona
        xhr.open("GET", "get_ip.php", true);
        // Define uma função de retorno de chamada para ser executada quando o estado da solicitação mudar
        xhr.onreadystatechange = function() {
            // Verifica se a solicitação foi concluída com sucesso (readyState 4) e o status da resposta é 200 (OK)
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Atualiza o conteúdo do elemento com o ID "ip" com a resposta da solicitação
                document.getElementById("ip").textContent = xhr.responseText;
            }
        };
        // Envia a solicitação HTTP
        xhr.send();
    }

    // Função para atualizar a data e hora em português
    function updateTime() {
        // Obtém a data e hora atual
        var now = new Date();
        // Define opções de formatação para exibir a data e hora em português
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        // Formata a data atual de acordo com as opções fornecidas
        var formattedDate = now.toLocaleDateString('pt-BR', options);
        // Atualiza o conteúdo do elemento com o ID "data" com a data formatada
        document.getElementById("data").textContent = formattedDate;
    }

    // Chama a função getIP() para obter e exibir o endereço IP
    getIP();
    // Chama a função updateTime() para obter e exibir a data e hora formatadas em português
    updateTime();
});

