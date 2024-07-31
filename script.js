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

const menuEscondido = document.querySelector('.menu-escondido');

menuHam.forEach((item) => {
    item.addEventListener('click', () => {
        if (window.getComputedStyle(menuEscondido).right === '-370px') {
            menuEscondido.style.right = '0px';
            setTimeout(() => {
                item.classList.add('active');
            }, 80)

        } else {
            item.classList.remove('active');
            menuEscondido.style.right = '-370px';
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
    menuEscondido.style.right = '-370px';
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

// scroll link menu ham

const links = Array.from(document.querySelectorAll('.menu-escondido li  '));

links.forEach((link) => {
    link.addEventListener('click', (link) => {
        const vh = window.innerHeight;
        const itemArray = links.indexOf(link.target);
        const proximaPosicao = vh * itemArray;
        menuEscondido.style.right = '-370px';
        menuHam.forEach((item) => {
            item.classList.remove('active');
        })
        window.scrollTo({
            top: proximaPosicao,
            behavior: 'smooth',
        });
    })
})
