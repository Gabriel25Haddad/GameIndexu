import { AssetLoader } from '../utils/AssetLoader.js'; // Importa a ferramenta que carrega imagens e sons

export class Engine { // Define a classe principal que controla o fluxo do jogo
    constructor(canvasId) { // O construtor configura o ambiente inicial do jogo
        this.canvas = document.getElementById(canvasId); // Busca o elemento HTML <canvas> onde o jogo aparece
        this.ctx = this.canvas.getContext('2d'); // Pega o "pincel" (contexto) para desenhar em 2D
        this.loader = new AssetLoader(); // Cria uma instância para carregar os arquivos do jogo
        this.lastTime = 0; // Armazena o tempo do último quadro para calcular a fluidez (deltaTime)

        // Estados: 'EXPLORATION' ou 'COMBAT'
        this.gameState = 'EXPLORATION'; // Define se o jogador está andando pelo mapa ou lutando

        // Configuração de tela para o Vazio
        this.canvas.width = 1280; // Define a largura da tela do jogo (HD)
        this.canvas.height = 720; // Define a altura da tela do jogo (HD)
    }

    async init() { // Método de inicialização que carrega tudo antes de começar
        // Exemplo de como a gente vai carregar nossas spritesheets depois
        // await this.loader.loadImage('hero', '/assets/sprites/iris_sheet.png');
        // await this.loader.loadImage('background', '/assets/backgrounds/vazio_marah.png');

        this.start(); // Após carregar os recursos, chama o início do jogo
    }

    start() { // Inicia o ciclo de vida do jogo
        requestAnimationFrame(this.loop.bind(this)); // Pede ao navegador para rodar a função 'loop' o mais rápido possível
    }

    loop(timestamp) { // O "batimento cardíaco" do jogo que roda infinitamente
        const deltaTime = timestamp - this.lastTime; // Calcula quanto tempo passou desde o último quadro (ms)
        this.lastTime = timestamp; // Atualiza o marcador de tempo para o próximo cálculo

        this.update(deltaTime); // Processa toda a lógica (movimento, colisões, mana)
        this.draw(); // Desenha tudo na tela após a lógica ser processada

        requestAnimationFrame(this.loop.bind(this)); // Chama o próximo quadro do ciclo
    }

    update(deltaTime) { // Onde a "mágica" da lógica acontece
        // Lógica de movimento ou cartas baseada no estado
        if (this.gameState === 'EXPLORATION') { // Se estiver explorando...
            // Atualiza física das plataformas (pulos, gravidade, etc.)
        } else if (this.gameState === 'COMBAT') { // Se estiver em luta...
            // Atualiza lógica de turnos e mana (18 pontos)
        }
    }

    draw() { // Onde os visuais são renderizados
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpa a tela inteira para desenhar o novo quadro

        // Renderiza o cenário ou a arena circular do Guardião
        this.ctx.fillStyle = '#FFFFFF'; // Define a cor branca para o fundo (o "Silêncio Branco")
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); // Pinta o fundo da tela

        this.ctx.fillStyle = 'black'; // Define a cor do texto como preto
        this.ctx.fillText(`Estado: ${this.gameState}`, 20, 30); // Escreve na tela em qual estado o jogo está
    }
}