const modal1 = ()=>{        
    const popup = document.getElementById('free_visit_form'),
          openPopup = document.querySelector('.open-popup'),
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
        } else if (count < 40){
            formWrapper.style.top = count*3 + 'px';
        } else {
        cancelAnimationFrame(modal);
        count = 0;
        }
    };

    openPopup.addEventListener('click',() => {
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
export default modal1;