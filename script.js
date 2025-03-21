/* 
========== SISTEMA DE CACHE NEURAL (HPC) ==========
WeakMap para garbage collection eficiente - equivalente a 
poda sináptica em redes neurais biológicas
*/
const neuroCache = new WeakMap();

/* 
========== PRÉ-ATIVAÇÃO PARALELA DE ESTÍMULOS VISUAIS ==========
Carregamento não-bloqueante de assets usando paralelismo
de baixo nível do navegador (similar a GPU Offloading)
*/
function preloadNeuroAssets() {
    const assets = [
        './img/coca-cola.png',
        './img/pepsi-can.png',
        './img/background-image.png',
        './img/pepsi-globe-logo.png'
    ];
    
    assets.forEach(url => {
        new Image().src = url; // Técnica de priming neural via cache de texturas
    });
}

/* 
========== INICIALIZAÇÃO DO SISTEMA DE TEMAS ==========
Mapeamento de elementos DOM para cache neural e
agendamento inteligente de tarecas usando idle callback
*/
function initNeuroThemeSystem() {
    const elements = {
        body: document.body,
        header: document.querySelector('header'),
        footer: document.querySelector('footer'),
        main: document.querySelector('main'),
        bgLogo: document.getElementById('bgLogo'),
        contentText: document.getElementById('contentText'),
        contentImage: document.getElementById('contentImage')
    };
    
    neuroCache.set(document, elements); // Armazenamento em memória de alta velocidade
    
    // Agendamento de tarefa de baixa prioridade (não-bloqueante)
    requestIdleCallback(preloadNeuroAssets, { timeout: 2000 });
}

/* 
========== APLICAÇÃO DE TEMAS COM OTIMIZAÇÃO DE RENDER ==========
Uso de requestAnimationFrame para batch updates e
minimização de reflows - sincronizado com refresh rate
*/
function applyNeuroTheme(theme) {
    requestAnimationFrame(() => {
        const { 
            body,
            bgLogo,
            contentText,
            contentImage
        } = neuroCache.get(document);
        
        const themeConfigs = {
            coke: {
                bodyClass: 'theme-coke',
                textContent: 'Things go better with',
                logoSource: './img/background-image.png',
                imageSource: './img/coca-cola.png'
            },
            pepsi: {
                bodyClass: 'theme-pepsi',
                textContent: 'Live For Now',
                logoSource: './img/pepsi-globe-logo.png',
                imageSource: './img/pepsi-can.png'
            }
        };
        
        const config = themeConfigs[theme];
        
        // Aplicação em lote para 1 único reflow
        body.className = config.bodyClass;
        bgLogo.src = config.logoSource;
        contentText.textContent = config.textContent;
        contentImage.src = config.imageSource;
    });
}

/* 
========== INICIALIZAÇÃO DO SISTEMA ==========
Boot neural em três estágios:
1. Carregamento do motor de temas
2. Aplicação do estado inicial
3. Configuração do listener de alta performance
*/
document.addEventListener('DOMContentLoaded', () => {
    initNeuroThemeSystem();
    applyNeuroTheme('coke'); // Estado padrão (baseline neural)
    
    // Event listener com pattern de toggle de alta eficiência
    document.getElementById('menuToggle').addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('theme-coke') 
            ? 'pepsi' 
            : 'coke';
        applyNeuroTheme(currentTheme);
    });
});

/* 
========== OTIMIZAÇÕES ADICIONAIS ==========
1. Uso de WeakMap evita memory leaks
2. RAF garante sincronização com compositor
3. Pré-carregamento prevê stalls de rede
4. Batch updates minimizam reflows
5. Sistema modular permite scaling vertical
*/