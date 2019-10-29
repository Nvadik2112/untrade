const calc = () => {
    const priceTotal = document.getElementById('price-total'),
        time = document.querySelector('.time');
    priceTotal.textContent = 1999;
    const mozaika = document.getElementById('card_leto_mozaika'),
        schelkovo = document.getElementById('card_leto_schelkovo'),
        m1 = document.getElementById('m1'),
        m2 = document.getElementById('m2'),
        m3 = document.getElementById('m3'),
        m4 = document.getElementById('m4');
    let val;

    const price = document.querySelector('.price'),
        sendPrice = document.createElement('input');
    sendPrice.setAttribute('type', "hidden");
    sendPrice.setAttribute('name', "price");
    sendPrice.setAttribute('value', '1999');
    price.appendChild(sendPrice);

    time.addEventListener('click', () => {
        let target = event.target;
        if (mozaika.checked === true) {
            if (target.closest('#m1')) {
                val = 1999;
            };
            if (target.closest('#m2')) {
                val = 9900;
            };
            if (target.closest('#m3')) {
                val = 13900;
            };
            if (target.closest('#m4')) {
                val = 19900;
            };
        };
        if (schelkovo.checked === true) {
            if (target.closest('#m1')) {
                val = 2999;
            };
            if (target.closest('#m2')) {
                val = 14990;
            };
            if (target.closest('#m3')) {
                val = 21990;
            };
            if (target.closest('#m4')) {
                val = 24990;
            };
        };

        priceTotal.textContent = val;
        sendPrice.setAttribute('value', priceTotal.textContent);
    });

    mozaika.addEventListener('click', () => {
        if (m1.checked === true) {
            val = 1999;
        };
        if (m2.checked === true) {
            val = 9900;
        };
        if (m3.checked === true) {
            val = 13900;
        };
        if (m4.checked === true) {
            val = 19900;
        };
        priceTotal.textContent = val;
        sendPrice.setAttribute('value', priceTotal.textContent);
    });

    schelkovo.addEventListener('click', () => {
        if (m1.checked === true) {
            val = 2999;
        };
        if (m2.checked === true) {
            val = 14900;
        };
        if (m3.checked === true) {
            val = 21990;
        };
        if (m4.checked === true) {
            val = 24990;
        };
        priceTotal.textContent = val;
        sendPrice.setAttribute('value', priceTotal.textContent);
    });
};
export default calc;