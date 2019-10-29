const modalGift = ()=>{     
    const popup = document.getElementById('gift'),          
          formWrapper = popup.querySelector('.form-wrapper'),  
          fixedGift = document.querySelector('.fixed-gift');             
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
        } else if (count < 100){
            formWrapper.style.top = count + 'px';
        } else {
        cancelAnimationFrame(modal);
        count = 0;
        }
    };

    fixedGift.addEventListener('click',() => {
        popup.style.display = 'block';
        fixedGift.style.display = 'none';
        modalAnimate();        
    });   

    popup.addEventListener('click',() => {
        let target = event.target;
        if (target.classList.contains('close_icon') 
        || target.classList.contains('close-btn')){
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
export default modalGift;