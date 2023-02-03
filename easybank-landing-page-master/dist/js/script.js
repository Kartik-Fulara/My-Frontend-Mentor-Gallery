function toggleMenu() {
    const hamburger = document.getElementById('togglehamburger');
    const close = document.getElementById('closeBtn');

    hamburger.classList.toggle('d-none');
    hamburger.classList.toggle('d-block');
    close.classList.toggle('d-none');
    close.classList.toggle('d-block');
}
