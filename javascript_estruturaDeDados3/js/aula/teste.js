
            var rodas = Number(prompt("Digite o número de rodas :"));
            var peso = Number(prompt("Digite o peso do veiculo em Kg :"));
            var pessoas = Number(prompt("Digite o número de pessoas :"));

            var categoria = determineLicenseCategory(rodas, peso, pessoas);
            alert("Categoria de licença do veículo: " + categoria);
        

        function determineLicenseCategory(rodas, peso, pessoas) {
            if (rodas >= 2 && rodas <= 3) {
                return "A";
            } else if (rodas === 4 && pessoas <= 8 && peso <= 3500) {
                return "B";
            } else if (rodas >= 4 && peso > 3500 && peso <= 6000) {
                return "C";
            } else if (rodas >= 4 && pessoas > 8) {
                return "D";
            } else if (rodas >= 4 && peso > 6000) {
                return "E";
            } else {
                return "Erro";
            }
        }