export default function initMenuHam() {
    const menuHam = document.querySelectorAll('.menu-ham');

    const menuEscondido = document.querySelector('.menu-escondido');

    function fecharMenu(item) {
        menuEscondido.classList.remove('menu-ativo');
        setTimeout(() => {
            item.classList.remove('active');
        }, 79);
        window.removeEventListener('click', (event) => {
            if (event.target !== menuEscondido) {
                fecharMenu(item);
            }
        })
    }

    function abrirMenu(item) {
        setTimeout(() => {
            menuEscondido.classList.add('menu-ativo');
        }, 0);
        setTimeout(() => {
            item.classList.add('active');
        }, 80);
        clickOutside(item);
    }

    function clickOutside(item) {
        window.addEventListener('click', (event) => {
            if (event.target !== menuEscondido) {
                fecharMenu(item);
            }
        })
    }


    menuHam.forEach((item) => {
        item.addEventListener('click', () => {
            if (menuEscondido.classList.contains('menu-ativo')) {
                fecharMenu(item);
            } else {
                abrirMenu(item);
            }
        })
    });

}


