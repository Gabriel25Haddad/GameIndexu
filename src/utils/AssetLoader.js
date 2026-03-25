/**
 * Gerencia o carregamento de imagens e spritesheets feitas.
 */
export class AssetLoader { // Define e exporta a classe responsável por gerenciar arquivos externos
    constructor() { // O construtor prepara o armazém de arquivos
        this.assets = new Map(); // Cria um "Mapa" (dicionário) para guardar as imagens com um nome fácil (ex: 'hero')
    }

    // Carrega uma imagem e retorna uma Promise (uma promessa de que o carregamento vai terminar)
    loadImage(name, url) {
        return new Promise((resolve, reject) => { // Cria a promessa: "Vou tentar carregar, te aviso se conseguir ou falhar"
            const img = new Image(); // Cria um novo objeto de imagem do HTML nativo
            img.src = url; // Define o caminho do arquivo (ex: 'assets/player.png')

            // Quando o navegador terminar de baixar a imagem com sucesso:
            img.onload = () => {
                this.assets.set(name, img); // Guarda a imagem no nosso Mapa usando o nome escolhido
                resolve(img); // Cumpre a promessa, avisando que a imagem está pronta
            };

            // Se houver algum erro (arquivo não existe ou caminho errado):
            img.onerror = () => reject(`Erro ao carregar asset: ${url}`); // Quebra a promessa e mostra o erro
        });
    }

    // Busca uma imagem que já foi carregada anteriormente
    get(name) {
        return this.assets.get(name); // Retorna a imagem guardada no Mapa através do nome dela
    }
}