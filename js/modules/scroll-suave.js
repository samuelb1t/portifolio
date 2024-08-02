export default function initScrollSuave() {
    const menuHam = document.querySelectorAll('.menu-ham');

    const menuEscondido = document.querySelector('.menu-escondido');

    window.addEventListener('wheel', (event) => {
        event.preventDefault();
        const vh = window.innerHeight;
        const direcao = event.deltaY / 100;
        const posicaoAtual = window.scrollY;
        const proximaPosicao = posicaoAtual + (vh * direcao);
        menuEscondido.classList.remove('menu-ativo');
        menuHam.forEach((item) => {
            item.classList.remove('active');
        })
        if (posicaoAtual % vh === 0) {
            window.scrollTo({
                top: proximaPosicao,
                behavior: 'smooth',
            });
        }
    }, { passive: false });
}