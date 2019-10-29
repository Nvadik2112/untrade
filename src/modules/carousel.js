const carousel = ()=>{
    let slider = document.querySelectorAll('.services-slider .slide');
        
    slider.forEach((elem) =>{
        elem.style.marginRight= '6px';
        elem.style.marginLeft = '0px';
             
    });   

    const carousel = new SliderCarousel({
        main: '#services .wrapper',
        wrap: '.services-slider',
    
        slidesToShow: 4,
        infinity: true,
        responsive: [{
        breakpoint: 1024,
        slidesToShow: 3
       },
    {
        breakpoint: 768,
        slidesToShow: 2
       },
    {
        breakpoint: 576,
        slidesToShow: 1
       }
    ]
    });
    carousel.init();    
};
export default carousel;