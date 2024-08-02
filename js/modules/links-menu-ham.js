export default function initLinksMenuHam() {
    const links = Array.from(document.querySelectorAll('.menu-escondido li'));

    const menuHam = document.querySelectorAll('.menu-ham');

    const menuEscondido = document.querySelector('.menu-escondido');

    links.forEach((link) => {
        link.addEventListener('click', (link) => {
            const vh = window.innerHeight;
            const itemArray = links.indexOf(link.target);
            const proximaPosicao = vh * itemArray;
            menuEscondido.classList.remove('menu-ativo');
            menuHam.forEach((item) => {
                item.classList.remove('active');
            })
            window.scrollTo({
                top: proximaPosicao,
                behavior: 'smooth',
            });
        })
    })
}