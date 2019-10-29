const form4 = () => {
    const thanks = document.getElementById('thanks'),
        errorMessage = 'Что то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро свяжемся',
        statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 1.5rem;';
    statusMessage.style.color = "black";

    document.addEventListener('submit', (event) => {
        let target = event.target;
        if (target.closest('#card_order')) {
            target.appendChild(statusMessage);
            event.preventDefault();
            statusMessage.textContent = loadMessage;
            const formData = new FormData(target);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            thanks.display = 'block';
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status not 200');
                    }
                    statusMessage.textContent = successMessage;
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.log(error);

                });
        };
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};
export default form4;