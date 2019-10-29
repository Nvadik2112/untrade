const modal2 = ()=>{
    const popup = document.getElementById('callback_form'),
          callbackBtn = document.querySelector('.callback-btn'),
          formWrapper = popup.querySelector('.form-wrapper');                   
    let count = 0,
        modal;
    const wth = window.onresize = () => {
        let width = document.documentElement.clientWidth;
        return width;
    };

    const modalAnimate = () =>{
        let width = wth();
        modal = requestAnimationFrame(modalAnimate);
        count++;
        if (width < 768){
            modal = false;
        } else if (count < 30){
            formWrapper.style.top = count*2 + 'px';
        } else {
        cancelAnimationFrame(modal);
        count = 0;
        }
    };

    callbackBtn.addEventListener('click',() => {
        popup.style.display = 'block';
        modalAnimate();        
    });

    popup.addEventListener('click',() => {
        let target = event.target;
        if (target.classList.contains('close_icon')){
            popup.style.display = 'none';
        }
        else {
            target = target.closest('.form-content');      
            if(!target){
                popup.style.display = 'none';
            };    
        }   
    });    
};
export default modal2;