const sendForm = () => {         
  document.addEventListener('input', ()=>{
    let target = event.target;
    const phoneInputs = target.closest('.form-phone'),
          topInput = target.closest('#form2-name'),
          nameInputs = target.closest('.form-name'),
          messageInput = target.closest('.mess');
    if (phoneInputs){
      phoneInputs.value = phoneInputs.value.replace(/[^\d+]/g, ''); 
    }
    const cyrrilc = (input) => {
      input.value = input.value.replace(/[^А-Яа-яЁё\s]/g, '');
    };
    if (nameInputs) cyrrilc(nameInputs);
    if (topInput) cyrrilc(topInput);
    if (messageInput) cyrrilc(messageInput);                  
  });

  const errorMessage = 'Что то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро свяжемся',
        formName = document.querySelectorAll('input'),
  statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';
  statusMessage.style.color = "white";

  document.addEventListener('submit', (event) => {
    let target = event.target,
        getForm = target.closest('form');
    getForm.appendChild(statusMessage);                
    event.preventDefault();      
    statusMessage.textContent = loadMessage;      
    const formData = new FormData(getForm); 
    let body = {};          
    formData.forEach((val, key) =>{
      body[key] = val;
    });           
    formName.forEach((elem) => {
      elem.value = "";
    });
    setTimeout(() => {
      postData(body)
      .then((response) => {
        if (response.status !== 200){
          throw new Error('status not 200');
        }
        statusMessage.textContent = successMessage;        
      })
      .catch ((error) => {
        statusMessage.textContent = errorMessage;
        console.log(error);
      });
    }, 1000);
  });
            
  const postData = (body) => {
    return fetch('./server.php' ,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };  
};
export default sendForm;