const arrow = () => {
    const topot = document.getElementById('totop');
    topot.style.display = 'none';
    document.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset;
        if (scrolled > 650) {
            topot.style.display = 'block';
        }
        else topot.style.display = 'none';
    });
};
export default arrow;