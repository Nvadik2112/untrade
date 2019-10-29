
const sendFormModals = () => {
    //Валидация для всех формах на сайте
    maskPhone("#callback_form2-phone");
    maskPhone("#callback_form1-phone");
    maskPhone('#phone');
    maskPhone('#callback_form-phone');
    maskPhone('#callback_footer_form-phone');
    document.addEventListener('input', ()=>{
        let target = event.target;
        const nameInputs = target.closest('input[name="name"]');
        if (nameInputs)
            nameInputs.value = nameInputs.value.replace(/[^А-Яа-яЁё\s\d]/g, '');         
               
    });
       // Отправка форм модальных окон 
    const errorMessage = 'Что то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро свяжемся',
        popup1 = document.getElementById('free_visit_form'),
        text1 = popup1.querySelector('h4'),
        popup2 = document.getElementById('callback_form'),
        text2 = popup2.querySelector('h4'),
        statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 1.5rem;';
    statusMessage.style.color = "white";

    document.addEventListener('submit', (event) => {
        let target = event.target;
        if (target.closest('#form1')|| target.closest('#form2')){
            target.appendChild(statusMessage);                
            event.preventDefault();      
            statusMessage.textContent = loadMessage;      
            const formData = new FormData(target); 
            let body = {};          
            formData.forEach((val, key) =>{
                body[key] = val;
            });          
                              
            postData(body)
            .then((response) => {
            if (response.status !== 200){
              throw new Error('status not 200');
            }
            statusMessage.textContent = successMessage;
            text1.textContent = 'ОТПРАВЛЕНО';
            text2.textContent = 'ОТПРАВЛЕНО';

            })
            .catch ((error) => {
            statusMessage.textContent = errorMessage;
            text1.textContent = 'ОШИБКА!';
            text2.textContent = 'ОШИБКА!';
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
    
    document.addEventListener('click',() => {
        let target = event.target;
        if (target.classList.contains('close_icon')){
            statusMessage.textContent = "";
            text1.textContent='ЗАПИСАТЬСЯ НА ВИЗИТ';
            text2.textContent='ОБРАТНЫЙ ЗВОНОК';
        }
        else {
            target = target.closest('.form-content');      
            if(!target){
                statusMessage.textContent = "";
                text1.textContent='ЗАПИСАТЬСЯ НА ВИЗИТ';
                text2.textContent='ОБРАТНЫЙ ЗВОНОК';
            };    
        };   
    });   
};    
export default sendFormModals;