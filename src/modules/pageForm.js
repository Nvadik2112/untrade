const pageForm = ()=>{                     
    const errorMessage = 'Что то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Ваша заявка отправлена. Мы скоро свяжемся',
        checkbox =  document.getElementById('check1'),
        btn = document.querySelector('button[name="send"]'),
        thanks = document.getElementById('thanks'),
        text1 = thanks.querySelector('h4'),
        text2 = thanks.querySelector('p'),
        statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 1.5rem;';
    statusMessage.style.color = "white";
        
    btn.addEventListener('click', () => {
        if (checkbox.checked === false){
        alert('Необходимо подтвердить согласие');
        }
    });  

    document.addEventListener('submit', (event) => {               
        let target = event.target;
        if (target.closest('#banner-form')){
            target.appendChild(statusMessage);                
            event.preventDefault();
            thanks.style.display = 'block';
            text1.textContent = '';
            text2.textContent = loadMessage;      
            const formData = new FormData(target); 
            let body = {};          
            formData.forEach((val, key) =>{
                body[key] = val;
            });           
           
            thanks.display = 'block';
            postData(body)
            .then((response) => {
                if (response.status !== 200){
                throw new Error('status not 200');
                } 
            text1.textContent = 'СПАСИБО!';
            text2.textContent = successMessage;        
            })
            .catch ((error) => {            
            text1.textContent = 'ОШИБКА!';
            text2.textContent = errorMessage;
            console.log(error);
          });
        };
    });

    const postData = (body) =>{
        return fetch('./server.php' ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        });
    };

    thanks.addEventListener('click',() => {
        let target = event.target;
        if (target.classList.contains('close_icon')
        || target.classList.contains('close-btn')){
            thanks.style.display = 'none'; 
        }   
        else {
            target = target.closest('.form-content');      
            if(!target){
                thanks.style.display = 'none';
            };            
        }            
    });
};
export default pageForm;