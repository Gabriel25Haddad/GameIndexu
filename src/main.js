import { Engine } from './core/Engine.js'; // Importa a classe Engine (o motor) do arquivo de núcleo

// Cria uma nova instância do jogo passando o ID do elemento <canvas> do seu HTML
const game = new Engine('gameCanvas');

// Inicializa o motor (chama o método que carrega assets e inicia o loop)
game.init().catch(err => {
    // Caso ocorra qualquer erro no carregamento (AssetLoader) ou na inicialização:
    console.error("Falha ao despertar no Vazio:", err); // Exibe o erro no console com uma mensagem aleatória
});