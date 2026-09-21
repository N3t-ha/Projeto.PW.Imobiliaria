// Arquivos que serão salvos para usar offline
const ARQUIVOS_CACHE = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    './icon-192_2.png',
    './icon-512.png'
];

// REGISTRO DO SERVICE WORKER (PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW da Fachada registrado com sucesso!', registration);
            })
            .catch(error => {
                console.log('Falha ao registrar SW:', error);
            });
    });
}

// FUNÇÕES DE INTERATIVIDADE DO SITE
function verDetalhes(nomeDoImovel) {
    alert(`Acessando arquivos confidenciais de: ${nomeDoImovel}...\n\nNível de Acesso Inadequado. Por favor, contate a gerência da Ordem para ver as plantas do subsolo.`);
}

function agendarVisita() {
    alert("Visita pré-agendada com sucesso.\n\nUm de nossos 'corretores' especializados entrará em contato em breve. Mantenha seu telemóvel por perto e não atenda números desconhecidos... a menos que seja nós.");
}