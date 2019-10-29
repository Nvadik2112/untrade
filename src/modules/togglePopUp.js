const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
        popupContent = document.querySelector(".popup-content");      
  let count = 0,
      modal;
  let wth = window.onresize = () => {
    let width = document.documentElement.clientWidth;
    return width;
  };
         
  let modalAnimate = () =>{
    let width = wth();
    modal = requestAnimationFrame(modalAnimate);
    count++;
    if (width < 500){
      modal = false;
    } else if (count < 30){
      popupContent.style.top = count*2 + 'px';
    } else {
      cancelAnimationFrame(modal);
      count = 0;
    }
  };
         
  document.addEventListener('click',() => {
    let target = event.target;
    if (target.classList.contains('popup-btn')){
      popup.style.display= 'block';
      modalAnimate();  
    }
  });
  popup.addEventListener('click',() => {
    let target = event.target;
    if (target.classList.contains('popup-close')){
      popup.style.display = 'none';
    }   
    else {
      target = target.closest('.popup-content');      
      if(!target){
        popup.style.display = 'none';
      }
    }
  });
};
export default togglePopUp;