//expansão do texto na seção dos projetos

const seta = document.querySelector('.setinha');
const pontinhos = document.querySelector('.pontinhos');
const textoEscondido = document.querySelector('.texto-escondido');

seta.addEventListener('click', () => {
    if (seta.classList.contains('ativo')) {
        pontinhos.style.display = 'inline';
        textoEscondido.style.display = 'none';
    } else {
        pontinhos.style.display = 'none';
        textoEscondido.style.display = 'block';
    }
    seta.classList.toggle('ativo');
});

//menu hamburguer

const menuHam = document.querySelectorAll('.menu-ham');

const hiddenMenu = document.querySelector('.menu-escondido');

menuHam.forEach((item) => {
    item.addEventListener('click', () => {
        if (window.getComputedStyle(hiddenMenu).right === '-370px') {
            hiddenMenu.style.right = '0px';
        } else {
            hiddenMenu.style.right = '-370px';
        }
    })
})



// resolvendo problema da margem pra baixo

const sections = document.querySelectorAll('.secao');

const section = sections[sections.length - 1];

section.style.marginBottom = '60px';

// scroll

window.addEventListener('wheel', (event) => {
    event.preventDefault();
    const vh = window.innerHeight;
    const direcao = event.deltaY / 100;
    const posicaoAtual = window.scrollY;
    const proximaPosicao = posicaoAtual + (vh * direcao);
    hiddenMenu.style.right = '-370px';
    window.scrollTo({
        top: proximaPosicao,
        behavior: 'smooth',
    })
}, { passive: false });

