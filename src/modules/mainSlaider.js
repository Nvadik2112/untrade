const mainSlaider = ()=>{
    const mainSlaider = document.querySelector('.main-slider'),
         slide = mainSlaider.querySelectorAll('.slide');   
        
    let currentSlide = 0;
        
    
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
        elem[index].style.display = 'none';
    };
    
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
        elem[index].style.display = 'flex';
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'slide');
        currentSlide++;

        if (currentSlide >= slide.length){
            currentSlide = 0;
        };
        nextSlide(slide, currentSlide, 'slide');
    };

    const startSlide = (time = 3000) => {
            setInterval(autoPlaySlide, time);
    };
    startSlide();
};
export default mainSlaider;