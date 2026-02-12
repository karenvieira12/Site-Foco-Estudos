// ARQUIVO: script.js

// =======================================================
// CÓDIGO DO SCROLL_REVEAL (Intersection Observer)
// =======================================================

// 1. CONFIGURAÇÃO do Observador
const observerOptions = {
    root: null, // Usa o viewport (janela do navegador) como referência
    
    // rootMargin: -150px força o observador a esperar que o elemento
    // esteja mais longe do topo, evitando o disparo imediato em telas grandes.
    rootMargin: "-150px 0px -150px 0px", 
    
    // threshold: 0 garante que a animação comece assim que o elemento
    // começar a aparecer (sem esperar que 20% ou 50% dele apareça).
    threshold: 0, 
};

// 2. A FUNÇÃO de callback (O que acontece quando o elemento aparece)
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // Se o elemento rolou para a área visível da tela
        if (entry.isIntersecting) {
            
            // Adiciona a classe CSS que dispara a transição
            entry.target.classList.add('animate-reveal'); 
            
            // Opcional: Para de observar, a animação acontece só uma vez
            observer.unobserve(entry.target); 
        }
    });
};

// 3. Cria o novo observador
const observer = new IntersectionObserver(observerCallback, observerOptions);

// 4. Aplica a observação a todos os elementos marcados
// Itera sobre todos os elementos com a classe 'scroll-reveal'
document.querySelectorAll('.scroll-reveal').forEach(element => {
    observer.observe(element);
});
