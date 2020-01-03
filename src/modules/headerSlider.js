const headerSlider = () => {
    const header = document.querySelector('header'),
        headerPantera = document.querySelector('.header__pantera'),
        headerSubtitle = document.querySelectorAll('.header__subtitle p'),
        headerPremier = document.querySelector('.header__premier');

    const classList = () => {
        header.classList.toggle('hawk');

        if (headerPantera.textContent === "Panthera pardus")
            headerPantera.textContent = 'Accipiter gentilis';
        else
            headerPantera.textContent = "Panthera pardus";

        if (headerSubtitle[0].textContent === 'тень')
            headerSubtitle[0].textContent = 'ястреб';
        else
            headerSubtitle[0].textContent = 'тень';

        if (headerSubtitle[1].textContent === 'леопарда')
            headerSubtitle[1].textContent = 'теревятник';
        else
            headerSubtitle[1].textContent = 'леопарда';

        if (headerPremier.textContent === "Премьера 10 ноября")
            headerPremier.textContent = 'Премьера 31 декабря';
        else
            headerPremier.textContent = "Премьера 10 ноября";
    };
    setInterval(classList, 7000);
};
export default headerSlider;