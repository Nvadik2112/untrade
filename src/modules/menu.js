const menu = () => {
    const block = document.querySelector('.block'),
        animate = document.querySelector('.animate'),
        button = document.querySelectorAll('.block__button'),
        menu = document.querySelector('.menu'),
        menuMain = document.querySelectorAll('.menu__main'),
        menuBarItem = document.querySelectorAll('.menu__bar-item');

    let count = 0,
        modal,
        key = 0;

    const modalAnimate = () => {
        modal = requestAnimationFrame(modalAnimate);
        count++;
        if (count < 400) {
            animate.style.bottom = count * 8 + 'px';
        } else {
            cancelAnimationFrame(modal);
        }
    };
    const hide = () => {
        menu.style.display = 'flex';
        block.style.display = "none";
    };

    button.forEach((elem, i) => {
        const show = () => {
            menuMain[i].style.display = 'flex';
        }
        elem.addEventListener('click', () => {
            button[0].disabled = 'true'
            button[1].disabled = 'true'
            button[2].disabled = 'true'
            modalAnimate();
            setTimeout(hide, 1160);
            setTimeout(show, 1300);
            menuBarItem[i].classList.add('active');
            key = i

        });
    })
    menuBarItem.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            menuBarItem[key].classList.remove('active');
            menuMain[key].style.display = 'none';
            menuBarItem[i].classList.add('active');
            menuMain[i].style.display = 'flex'
            key = i
        });
    })
}
export default menu;    