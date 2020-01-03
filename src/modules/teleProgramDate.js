const teleProgramDate = () => {
    const teleDate = document.querySelector('.teleprogram__date'),
        teleProgramData = document.querySelectorAll('.teleprogram__data'),
        teleData = document.querySelectorAll('.teleprogram__data p'),
        mounth = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
        newDate = new Date(),
        oneDay = 86400000;

    const getDate = n => {
        const prevNext = newDate - oneDay * n;
        const datePrevNext = new Date(prevNext).getDate();
        return datePrevNext;
    };

    const getMounth = n => {
        const prevNext = newDate - oneDay * n;
        const mountPrevNext = new Date(prevNext).getMonth();
        return mountPrevNext;
    };

    const days = [getDate(3), getDate(2), getDate(1), getDate(0), getDate(-1), getDate(-2), getDate(-3)],
        mounthes = [getMounth(3), getMounth(2), getMounth(1), getMounth(0), getMounth(-1), getMounth(-2), getMounth(-3)];


    mounthes.forEach((elem, i) => {
        for (let n = 0; n < mounth.length; n++) {
            if (n === mounthes[i] & days[i] <= 9) {
                elem = '0' + days[i] + ' ' + mounth[n].toUpperCase();

            }
            else if (n === mounthes[i] & days[i] > 9) {
                elem = days[i] + ' ' + mounth[n].toUpperCase();

            };
            teleData[i].textContent = elem;
        };
    });

    let index = 3;
    teleProgramData.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            if (!event.target.closest('#dis')) {
                const img = document.createElement("img");
                img.classList.add('teleprogram__greenborder');
                img.setAttribute('src', 'img/greenborder.png');
                teleProgramData[i].appendChild(img);
                teleProgramData[i].setAttribute('id', 'dis');

                const image = teleProgramData[index].querySelector('img');
                teleProgramData[index].removeAttribute('id', 'dis');
                teleProgramData[index].removeChild(image);
                index = i;
            };
        });
    });
    teleDate.addEventListener('click', () => {
        let target = event.target;
        const img = document.createElement("img");
        img.classList.add('teleprogram__greenborder');
        img.setAttribute('src', 'img/greenborder.png');
        const image = teleProgramData[index].querySelector('img');
        if (target.closest('.slide__date-left') && (index > 0)) {
            teleProgramData[index - 1].appendChild(img);
            teleProgramData[index - 1].setAttribute('id', 'dis');
            teleProgramData[index].removeAttribute('id', 'dis');
            teleProgramData[index].removeChild(image);
            index = index - 1;
        };

        if (target.closest('.slide__date-right') && (index < 6)) {
            teleProgramData[index + 1].appendChild(img);
            teleProgramData[index + 1].setAttribute('id', 'dis');
            teleProgramData[index].removeAttribute('id', 'dis');
            teleProgramData[index].removeChild(image);
            index = index + 1;
        };
    });
};

export default teleProgramDate;