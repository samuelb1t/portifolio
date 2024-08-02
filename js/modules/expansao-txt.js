export default function initExpansaoTexto() {
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

}