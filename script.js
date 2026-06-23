// Aguarda o carregamento total da página
document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
    // ==========================================
    const formulario = document.querySelector("form");
    
    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            // Impede o envio padrão do formulário antes da validação
            evento.preventDefault();
            
            // Captura os valores dos campos
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();
            
            // Validação simples de segurança
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos do formulário.");
                return;
            }
            
            // Feedback de sucesso para o usuário
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre sustentabilidade agrícola foi enviada com sucesso.`);
            
            // Limpa os campos do formulário
            formulario.reset();
        });
    }

    // ==========================================
    // 2. ROLAGEM SUAVE PARA OS LINKS DO MENU
    // ==========================================
    const linksMenu = document.querySelectorAll(".nav-links a, #inicio a");
    
    linksMenu.forEach(link => {
        link.addEventListener("click", function (evento) {
            // Obtém o destino do link (ex: #producao)
            const destinoId = this.getAttribute("href");
            
            // Verifica se é um link interno
            if (destinoId.startsWith("#")) {
                evento.preventDefault();
                
                const secaoDestino = document.querySelector(destinoId);
                
                if (secaoDestino) {
                    // Realiza o efeito de rolagem suave até a seção
                    secaoDestino.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // ==========================================
    // 3. INTERATIVIDADE NOS CARDS DE TECNOLOGIA
    // ==========================================
    const cardsTech = document.querySelectorAll(".card-tech");
    
    cardsTech.forEach(card => {
        // Efeito visual leve ao passar o mouse
        card.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.03)";
            this.style.transition = "transform 0.3s ease";
            this.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        });
        
        // Remove o efeito ao tirar o mouse
        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });

    // ==========================================
    // 4. EFEITO VISUAL NA IMAGEM LATERAL
    // ==========================================
    const imgLateral = document.querySelector(".img-lateral");
    
    if (imgLateral) {
        imgLateral.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        });
        
        imgLateral.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
        });
    }
});
