const arrow = document.querySelector('.arrow-scroll');
arrow.style.display = 'none';
arrow.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

document.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;
    if (scrolled > 145) {
        arrow.style.display = 'block';
    }
    else arrow.style.display = 'none';
});

export default arrow;