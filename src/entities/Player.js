export class Player { // Define e exporta a classe Player para criar o objeto do jogador
    constructor() { // O construtor define as propriedades iniciais quando o jogador nasce
        this.x = 100; // Posição horizontal inicial no mapa
        this.y = 500; // Posição vertical inicial no mapa
        this.width = 50;  // Largura do corpo do jogador (futuro tamanho da imagem/sprite)
        this.height = 80; // Altura do corpo do jogador (futuro tamanho da imagem/sprite)

        this.velocityX = 0; // Velocidade atual no eixo X (anda para os lados)
        this.velocityY = 0; // Velocidade atual no eixo Y (sobe e desce)
        this.speed = 5; // Velocidade máxima de caminhada
        this.gravity = 0.5; // Força que puxa o jogador para baixo constantemente
        this.jumpForce = -12; // A força aplicada para cima no momento do pulo (negativa sobe no Canvas)
        this.isGrounded = false; // Booleano para saber se o jogador está tocando o chão
    }

    update() { // Método que atualiza a lógica de física a cada quadro (frame) do jogo
        // Aplica Gravidade constante
        this.velocityY += this.gravity; // Soma a gravidade à velocidade vertical (aceleração de queda)
        this.y += this.velocityY; // Move o jogador verticalmente com base na velocidade atual
        this.x += this.velocityX; // Move o jogador horizontalmente com base na velocidade atual

        // Chão temporário (O despertar na plataforma de pedra)
        if (this.y + this.height > 600) { // Verifica se a base do jogador passou da altura 600 (o chão)
            this.y = 600 - this.height; // Reposiciona o jogador exatamente em cima da linha do chão
            this.velocityY = 0; // Zera a velocidade de queda para ele não atravessar o piso
            this.isGrounded = true; // Confirma que o jogador está pisando em algo firme
        }
    }

    draw(ctx) { // Método responsável por desenhar o jogador na tela
        // Placeholder azul marinho (cor da Carta de Marfim)
        ctx.fillStyle = '#000080'; // Define a cor do preenchimento como azul marinho
        ctx.fillRect(this.x, this.y, this.width, this.height); // Desenha o retângulo do jogador nas coordenadas atuais
    }

    jump() { // Método acionado para fazer o personagem pular
        if (this.isGrounded) { // Só permite o pulo se o jogador estiver encostado no chão
            this.velocityY = this.jumpForce; // Aplica a força negativa para lançar o jogador para cima
            this.isGrounded = false; // Define que ele não está mais no chão (está no ar)
        }
    }
}