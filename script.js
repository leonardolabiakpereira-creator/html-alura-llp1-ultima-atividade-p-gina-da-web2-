function curtir(botao) {
    const spanCount = botao.querySelector('.count');
    let count = parseInt(spanCount.textContent);
    count++;
    spanCount.textContent = count;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
