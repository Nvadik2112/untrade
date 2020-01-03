const scroll = () => {
    const headerNav = document.querySelector('.header__nav');

    headerNav.addEventListener('click', () => {
        if (event.target.closest('#nav__main')) {
            window.scrollTo(0, 150);
        };

        if (event.target.closest('#nav__tele')) {
            window.scrollTo(0, 900);
        };
    });
};

export default scroll;